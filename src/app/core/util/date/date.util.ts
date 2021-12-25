export function parseDate(dateString: string): number {
  return Date.parse(dateString);
}

export function formatDate_Day_Month(dateString: string): string {
  const date = new Date(parseDate(dateString));
  return date.getDate() + '. ' + (date.getMonth() + 1) + '.';
}
