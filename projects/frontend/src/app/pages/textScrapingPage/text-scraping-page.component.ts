import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {combineLatest, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import LineChart = google.visualization.LineChart;
import LineChartOptions = google.visualization.LineChartOptions;

import {TextScrapingStoreFacadeService} from '../../core/services/text-scraping-store-facade/text-scraping-store-facade.service';
import {TextSource} from '../../model/text-scraping/text-source';
import {TextWordAnalysis} from '../../model/text-scraping/text-word-analysis';

@Component({
  selector: 'anselm-text-scraping-page',
  templateUrl: './text-scraping-page.component.html',
  styleUrls: ['./text-scraping-page.component.scss']
})
export class TextScrapingPageComponent implements OnInit, AfterViewInit {

  formGroup: FormGroup;
  @ViewChild('chart', { static: false }) chartContainer: ElementRef;
  chart: LineChart;
  textSources: Observable<TextSource[]>;
  trendlineEnabled: Observable<boolean>;
  textWorldAnalyses: Observable<TextWordAnalysis[]>;

  constructor(private formBuilder: FormBuilder,
              private textScrapingStoreFacadeService: TextScrapingStoreFacadeService) {
  }

  ngOnInit(): void {
    this.textSources = this.textScrapingStoreFacadeService.getTextSources();
    this.trendlineEnabled = this.textScrapingStoreFacadeService.isTrendlineEnabled();
    this.textWorldAnalyses = this.textScrapingStoreFacadeService.getTextWordAnalyses();

    this.textSources.pipe(filter(textSources => Boolean(textSources))).subscribe(textSources => {
      this.formGroup = this.formBuilder.group({
        word: ['', Validators.required],
        trendline: [false],
      });
      textSources.forEach(textSource => {
        const textSourceControlName = 'textSource_' + textSource.id;
        this.formGroup.addControl(textSourceControlName, this.formBuilder.control(true));
        this.formGroup.get(textSourceControlName).valueChanges.subscribe(checked => {
          this.textScrapingStoreFacadeService.configureTextSource(textSource.id, checked);
        });
      });
      this.formGroup.get('word').valueChanges.subscribe(word => {
        this.textScrapingStoreFacadeService.setWord(word);
      });
      this.formGroup.get('trendline').valueChanges.subscribe(checked => {
        this.textScrapingStoreFacadeService.configureTrendline(checked);
      });
    });

    this.textScrapingStoreFacadeService.loadTextSources();
  }

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(() => {
      this.chart = new google.visualization.LineChart(this.chartContainer.nativeElement);

      combineLatest([
        this.textWorldAnalyses.pipe(filter(textWorldAnalyses => Boolean(textWorldAnalyses))),
        this.trendlineEnabled,
      ]).subscribe(([textWorldAnalyses, trendlineEnabled]) => {
        this.drawChart(textWorldAnalyses, trendlineEnabled);
      });
    });
  }

  checkCurrentWord(): void {
    this.textScrapingStoreFacadeService.loadTextWordAnalysis();
  }

  private drawChart(wordAnalyses: TextWordAnalysis[], trendlineEnabled: boolean): void {
    const dataArray: any[] = [
      [{
        type: 'number',
        label: 'Year'
      }, {
        type: 'number',
        label: 'Count'
      }],
    ];
    wordAnalyses.forEach(wordAnalysis => {
      dataArray.push([wordAnalysis.year, Number(wordAnalysis.totalCount)]);
    });
    const data = google.visualization.arrayToDataTable(dataArray);

    const options: LineChartOptions = {
      legend: { position: 'none' },
      colors: [ '#FC0' ],
      hAxis: {
        format: '0',
      },
      vAxis: {
        format: '0',
      },
      animation: {
        duration: 500,
        easing: 'out',
        startup: true,
      },
    };
    if (trendlineEnabled) {
      options.trendlines = {
        0: {
          color: '#D72',
        },
      };
    }
    this.chart.draw(data, options);
  }
}
