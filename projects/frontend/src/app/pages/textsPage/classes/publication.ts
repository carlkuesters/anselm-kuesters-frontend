import {Serializable} from './serializable';

export class Publication implements Serializable<Publication> {
  id: number;
  location: string;
  title: string;
  url: string;
  date: number;

  deserialize(json): Publication {
    this.id = json.id;
    this.location = json.location;
    this.title = json.title;
    this.url = json.url;
    this.date = json.date;
    return this;
  }
}
