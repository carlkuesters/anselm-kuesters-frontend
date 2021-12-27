export interface Comment {
  readonly attributes: {
    readonly author: string;
    readonly content: string;
    readonly date: string;
  };
}
