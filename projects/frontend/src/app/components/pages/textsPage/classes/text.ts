import {SeoService} from "../../../../services/seo.service";

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

  public deserialize(json): Text {
    this.id = json.id;
    this.title = json.title;
    this.content = json.content;
    this.date = json.date;

    this.commentsCount = json.commentsCount;
    this.publicationsCount = json.publicationsCount;
    return this;
  }

  public getSeoId() {
    return SeoService.generateSeoId(this.id, this.title);
  }
}
