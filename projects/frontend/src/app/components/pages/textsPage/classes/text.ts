import {SeoService} from '../../../../services/seo.service';
import {Comment} from './comment';
import {Publication} from './publication';
import {Serializable} from './serializable';

export class Text implements Serializable<Text> {
  id: number;
  title: string;
  content: string;
  date: number;

  commentsCount: number;
  publicationsCount: number;

  publications: Publication[];
  comments: Comment[];

  deserialize(json): Text {
    this.id = json.id;
    this.title = json.title;
    this.content = json.content;
    this.date = json.date;

    // TODO: Seperate single text class and texts array entry?

    this.commentsCount = json.commentsCount;
    this.publicationsCount = json.publicationsCount;

    this.publications = (json.publications ? json.publications.map((jsonPub) => new Publication().deserialize(jsonPub)) : []);
    this.comments = (json.comments ? json.comments.map((jsonComment) => new Comment().deserialize(jsonComment)) : []);

    return this;
  }

  getSeoId() {
    return SeoService.generateSeoId(this.id, this.title);
  }
}
