import {Relation} from './relation';

export interface TextEntry {
  readonly id: number;
  readonly attributes: {
    readonly title: string;
    readonly date: string;
    readonly publications: Relation<any[]>;
    readonly comments: Relation<any[]>;
  };
}
