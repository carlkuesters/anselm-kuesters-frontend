export interface Comment {
  readonly id: number;
  readonly attributes: {
    readonly author: string;
    readonly content: string;
    readonly date: string;
  };
}
