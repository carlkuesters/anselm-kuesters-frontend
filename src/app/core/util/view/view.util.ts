import {Comment} from '../../../model/comment';
import {CommentView} from '../../../model/comment-view';
import {TextView} from '../../../model/text-view';
import {ContentView} from '../../../model/content-view';
import {Publication} from '../../../model/publication';
import {PublicationView} from '../../../model/publication-view';
import {Link} from '../../../model/link';
import {Text} from '../../../model/text';
import {TextEntry} from '../../../model/text-entry';
import {formatDate_Day_Month} from '../date/date.util';
import {generateSeoId} from '../seo/seo.util';

export function mapTextEntriesViews(textEntries: TextEntry[]): ContentView[] {
  return textEntries.map(textEntry => mapTextEntryView(textEntry));
}

function mapTextEntryView(textEntry: TextEntry): ContentView {
  return {
    routeOrUrl: true,
    link: '/text/' + generateSeoId(textEntry.id, textEntry.attributes.title),
    icon: 'file-text-o',
    title: textEntry.attributes.title,
    date: textEntry.attributes.date,
    commentsCount: textEntry.attributes.comments.data.length,
    publicationsCount: textEntry.attributes.publications.data.length,
  };
}

export function mapLinksViews(links: Link[]): ContentView[] {
  return links.map(link => mapLinkView(link));
}

function mapLinkView(link: Link): ContentView {
  return {
    routeOrUrl: false,
    link: link.attributes.url,
    icon: (link.attributes.url.startsWith('https://www.youtube.com/') ? 'youtube' : 'link'),
    title: link.attributes.title,
    date: link.attributes.date,
    commentsCount: 0,
    publicationsCount: 0,
  };
}

export function mapTextView(text: Text): TextView {
  return {
    title: text.attributes.title,
    text: text.attributes.text,
    publications: text.attributes.publications.data.map(publication => mapPublicationView(publication)),
    comments: text.attributes.comments.data.map(comment => mapCommentView(comment)),
  };
}

function mapPublicationView(publication: Publication): PublicationView {
  return {
    location: publication.attributes.location,
    title: publication.attributes.title,
    url: publication.attributes.url,
  };
}

function mapCommentView(comment: Comment): CommentView {
  return {
    author: comment.attributes.author,
    content: comment.attributes.content,
    formattedDate: formatDate_Day_Month(comment.attributes.date),
  };
}
