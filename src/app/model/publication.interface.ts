export interface Publication {
  readonly attributes: {
    readonly location: string;
    readonly title: string;
    readonly url: string;
    readonly date: string;
  };
}
