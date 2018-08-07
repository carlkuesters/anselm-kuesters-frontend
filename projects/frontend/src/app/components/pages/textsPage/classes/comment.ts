import {Serializable} from './serializable';

export class Comment implements Serializable<Comment> {
  id: number;
  author: string;
  text: string;
  date: number;

  deserialize(json): Comment {
    this.id = json.id;
    this.author = json.author;
    this.text = json.text;
    this.date = json.date;
    return this;
  }
}
