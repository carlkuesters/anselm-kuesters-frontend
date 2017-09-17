interface Serializable<T> {
  deserialize(json: Object): T;
}

export class Text implements Serializable<Text> {
  id: number;
  title: string;
  content: string;
  date: number;

  commentsCount: number;
  publicationsCount: number;

  deserialize(json) {
    this.id = json.id;
    this.title = json.title;
    this.content = json.content;
    this.date = json.date;

    this.commentsCount = json.commentsCount;
    this.publicationsCount = json.publicationsCount;
    return this
  }
}
