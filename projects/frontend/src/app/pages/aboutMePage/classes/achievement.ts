import {Serializable} from '../../textsPage/classes/serializable';

export class Achievement implements Serializable<Achievement> {
  id: number;
  date: string;
  title: string;
  location: string;

  deserialize(json): Achievement {
    this.id = json.id;
    this.date = json.date;
    this.title = json.title;
    this.location = json.location;
    return this;
  }
}
