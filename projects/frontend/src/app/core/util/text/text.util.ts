import {DisplayedTextEntry} from '../../../model/displayed-text-entry';
import {TextEntry} from '../../../model/textEntry';
import {generateSeoId} from '../seo/seo.util';

export function toDisplayedTextEntries(textEntries: TextEntry[]): DisplayedTextEntry[] {
  return textEntries.map(textEntry => toDisplayedTextEntry(textEntry));
}

function toDisplayedTextEntry(textEntry: TextEntry): DisplayedTextEntry {
  return {
    seoId: generateSeoId(textEntry.id, textEntry.title),
    title: textEntry.title,
    date: textEntry.date,
    commentsCount: textEntry.commentsCount,
    publicationsCount: textEntry.publicationsCount,
  };
}
