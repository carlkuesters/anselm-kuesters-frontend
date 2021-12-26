export interface Publication {
  readonly id: number;
  readonly attributes: {
    readonly location: string;
    readonly title: string;
    readonly url: string;
    readonly date: string;
  };
}
