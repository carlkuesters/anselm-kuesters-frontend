import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

import {Store} from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import LineChart = google.visualization.LineChart;
import LineChartOptions = google.visualization.LineChartOptions;

import {TextSource} from '../../model/text-scraping/text-source.interface';
import {TextWordAnalysis} from '../../model/text-scraping/text-word-analysis.interface';
import * as TextScrapingActions from '../../store/text-scraping/text-scraping.actions';
import {
  getTextSources,
  getTextWordAnalyses,
  isGoogleChartsAllowed,
  isTrendlineEnabled
} from '../../store/text-scraping/text-scraping.selectors';

@Component({
  selector: 'anselm-text-scraping-page',
  templateUrl: './text-scraping-page.component.html',
  styleUrls: ['./text-scraping-page.component.scss']
})
export class TextScrapingPageComponent implements OnInit {

  googleChartsAllowed: Observable<boolean>;
  textSources: Observable<TextSource[]>;
  trendlineEnabled: Observable<boolean>;
  textWorldAnalyses: Observable<TextWordAnalysis[]>;
  formGroup: UntypedFormGroup;
  @ViewChildren('chart') chartContainers: QueryList<ElementRef>;
  chart: LineChart;

  constructor(private formBuilder: UntypedFormBuilder,
              private store: Store) {
  }

  ngOnInit(): void {
    this.googleChartsAllowed = this.store.select(isGoogleChartsAllowed);
    this.textSources = this.store.select(getTextSources);
    this.trendlineEnabled = this.store.select(isTrendlineEnabled);
    this.textWorldAnalyses = this.store.select(getTextWordAnalyses);

    this.textSources.pipe(filter(textSources => Boolean(textSources))).subscribe(textSources => {
      this.formGroup = this.formBuilder.group({
        word: ['', Validators.required],
        trendline: [false],
      });
      textSources.forEach(textSource => {
        const textSourceControlName = 'textSource_' + textSource.id;
        this.formGroup.addControl(textSourceControlName, this.formBuilder.control(true));
        this.formGroup.get(textSourceControlName).valueChanges.subscribe(checked => {
          this.store.dispatch(TextScrapingActions.configureTextSource({ textSourceId: textSource.id, enabled: checked }));
        });
      });
      this.formGroup.get('word').valueChanges.subscribe(word => {
        this.store.dispatch(TextScrapingActions.setWord({ word }));
      });
      this.formGroup.get('trendline').valueChanges.subscribe(checked => {
        this.store.dispatch(TextScrapingActions.configureTrendline({ enabled: checked }));
      });
    });

  }

  loadGoogleChartsAndInitialize(): void {
    this.store.dispatch(TextScrapingActions.allowGoogleCharts());
    this.loadGoogleCharts().then(() => {
      google.charts.setOnLoadCallback(() => {
        this.store.dispatch(TextScrapingActions.loadTextSources());
        this.chartContainers.changes.subscribe(() => {
          if (this.chartContainers.length > 0) {
            this.chart = new google.visualization.LineChart(this.chartContainers.first.nativeElement);
            combineLatest([
              this.textWorldAnalyses.pipe(filter(textWorldAnalyses => Boolean(textWorldAnalyses))),
              this.trendlineEnabled,
            ]).subscribe(([textWorldAnalyses, trendlineEnabled]) => {
              this.drawChart(textWorldAnalyses, trendlineEnabled);
            });
          }
        });
      });
    });
  }

  private loadGoogleCharts(): Promise<void> {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.onload = () => {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => {
          resolve();
        });
      }
      script.src = 'https://www.gstatic.com/charts/loader.js';
      document.body.appendChild(script);
    });
  }

  checkCurrentWord(): void {
    this.store.dispatch(TextScrapingActions.loadTextWordAnalysis());
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
