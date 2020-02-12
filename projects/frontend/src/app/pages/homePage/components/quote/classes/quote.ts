import {Serializable} from '../../../../textsPage/classes/serializable';

export class Quote implements Serializable<Quote> {
  id: number;
  source: string;
  text: string;

  deserialize(json): Quote {
    this.id = json.id;
    this.source = json.source;
    this.text = json.text;
    return this;
  }
}
