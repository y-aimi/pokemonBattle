export class UtilRandom {
  /**
   * 0以上最大値以下のランダム値（整数）を取得
   *
   * @param min 最小値（整数）
   * @param max 最大値（整数）
   *
   * @returns 最小値〜最大値のランダム値
   */
  public static getRandomRangeInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 0以上最大値以下のランダム値（整数）をstringで取得
   *
   * @param min 最小値（整数）
   * @param max 最大値（整数）
   *
   * @returns 最小値〜最大値のランダム値
   */
  public static getRandomRangeIntString(min: number, max: number): string {
    return this.getRandomRangeInt(min, max).toString();
  }
}
