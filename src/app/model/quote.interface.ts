export class Quote {
  readonly id: number;
  readonly attributes: {
    readonly source: string;
    readonly text: string;
  };
}
