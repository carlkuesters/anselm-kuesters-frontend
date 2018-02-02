export class SeoService {

  private static slugSeperator: string = '-';
  private static slugMaxLength: number = 50;

  public static generateSeoId(id: number, title: string): string {
    return this.sluggify(title) + this.slugSeperator + id;
  }

  private static sluggify(text: string): string {
    return text.toLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
      .substring(0, this.slugMaxLength)
      // Replace all non-allowed character sequences with dashes
      .replace(/[^a-z0-9]+/g, this.slugSeperator)
      // Remove eventual trailing and leading dash
      .replace(new RegExp('/^' + this.slugSeperator + '|' + this.slugSeperator + '$/g'), '');
  }

  public static extractId(seoId: string): number {
    const seperator = '-';
    let lastSeperatorIndex = seoId.lastIndexOf(seperator);
    let idString: string;
    if (lastSeperatorIndex !== -1) {
      idString = seoId.substring(lastSeperatorIndex + seperator.length);
    }
    else {
      idString = seoId;
    }
    return +idString;
  }
}
