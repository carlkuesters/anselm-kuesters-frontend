export interface AboutMeEvent {
  readonly id: number;
  readonly attributes: {
    readonly date: string;
    readonly dateTitle: string;
    readonly title: string;
    readonly location: string;
    readonly major: boolean;
  };
}
