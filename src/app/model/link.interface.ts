export interface Link {
  readonly id: number;
  readonly attributes: {
    readonly title: string;
    readonly url: string;
    readonly date: string;
  }
}
