import {Component, OnInit} from '@angular/core';

import {Quote} from './components/quote/classes/quote';

@Component({
  selector: 'home-page-component',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent implements OnInit{
  quote: Quote;

  ngOnInit(): void{
    // TODO: Receive from backend
    let quotes: Quote[] = [
      <Quote>{source: "Bob Dylan", text: "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do."},
      <Quote>{source: "Dietrich Bonhoeffer", text: "Wo das Wort von zu Hause bei mir ist, finde ich in der Fremde meinen Weg."},
      <Quote>{source: "John Maynard Keynes", text: "the master-economist must reach a high standard in several different directions and must combine talents not often found together. He must be a mathematician, historian, statesman, philosopher – in some degree"},
      <Quote>{source: "Johann Wolfgang von Goethe", text: "Alles Gescheite ist schon gedacht worden, man muß nur versuchen, es noch einmal zu denken."},
      <Quote>{source: "Johann Wolfgang von Goethe", text: "Im ganzen – haltet euch an Worte! / Dann geht ihr durch die sichre Pforte / Zum Tempel der Gewißheit ein."},
      <Quote>{source: "Franz Kafka", text: "Ich glaube, man sollte überhaupt nur noch solche Bücher lesen, die einen beißen und stechen. […] Ein Buch muss die Axt sein für das gefrorene Meer in uns."},
      <Quote>{source: "Bob Dylan", text: "He who hurries overlooks a lot that he should see."},
    ];
    this.quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}
