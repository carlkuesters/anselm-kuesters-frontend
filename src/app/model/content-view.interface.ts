export interface ContentView {
  readonly routeOrUrl: boolean;
  readonly link: string;
  readonly icon: string;
  readonly title: string;
  readonly date: string;
  readonly commentsCount: number;
  readonly publicationsCount: number;
}
