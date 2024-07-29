import { QuestionLevel } from '@/types/QuestionLevel';

/**
 * アプリ共通定義
 *
 * ※クラス名とimport名を同一にするためlintオプションでnamespaceの使用を許可する
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Const {
  // ----------------------------------------------------------------------------------------------------
  // ポケモン図鑑
  // ----------------------------------------------------------------------------------------------------

  /** ポケモン図鑑_全国（最小値） */
  export const POKEDEX_ALL_MIN = 1;
  /** ポケモン図鑑_全国（最大値） */
  export const POKEDEX_ALL_MAX = 1017;

  /** ポケモン図鑑_カントー地方（最小値） */
  export const POKEDEX_KANTO_MIN = 1;
  /** ポケモン図鑑_カントー地方（最大値） */
  export const POKEDEX_KANTO_MAX = 151;

  /** ポケモン図鑑_ジョウト地方（最小値） */
  export const POKEDEX_JOHTO_MIN = 152;
  /** ポケモン図鑑_ジョウト地方（最大値） */
  export const POKEDEX_JOHTO_MAX = 251;

  /** ポケモン図鑑_ホウエン地方（最小値） */
  export const POKEDEX_HOENN_MIN = 252;
  /** ポケモン図鑑_ホウエン地方（最大値） */
  export const POKEDEX_HOENN_MAX = 386;

  /** ポケモン図鑑_シンオウ地方（最小値） */
  export const POKEDEX_SINNOH_MIN = 387;
  /** ポケモン図鑑_シンオウ地方（最大値） */
  export const POKEDEX_SINNOH_MAX = 493;

  /** ポケモン図鑑_イッシュ地方（最小値） */
  export const POKEDEX_UNOVA_MIN = 494;
  /** ポケモン図鑑_イッシュ地方（最大値） */
  export const POKEDEX_UNOVA_MAX = 649;

  /** ポケモン図鑑_カロス地方（最小値） */
  export const POKEDEX_KALOS_MIN = 650;
  /** ポケモン図鑑_カロス地方（最大値） */
  export const POKEDEX_KALOS_MAX = 721;

  /** ポケモン図鑑_アローラ地方（最小値） */
  export const POKEDEX_ALOLA_MIN = 722;
  /** ポケモン図鑑_アローラ地方（最大値） */
  export const POKEDEX_ALOLA_MAX = 807;

  /** ポケモン図鑑_ガラル地方（最小値） */
  export const POKEDEX_GALAR_MIN = 808;
  /** ポケモン図鑑_ガラル地方（最大値） */
  export const POKEDEX_GALAR_MAX = 898;

  /** ポケモン図鑑_ヒスイ地方（最小値） */
  export const POKEDEX_HISUI_MIN = 899;
  /** ポケモン図鑑_ヒスイ地方（最大値） */
  export const POKEDEX_HISUI_MAX = 905;

  /** ポケモン図鑑_パルデア地方（最小値） */
  export const POKEDEX_PALDEA_MIN = 906;
  /** ポケモン図鑑_パルデア地方（最大値） */
  export const POKEDEX_PALDEA_MAX = 1017;

  // ----------------------------------------------------------------------------------------------------
  // その他
  // ----------------------------------------------------------------------------------------------------

  /** 敵プログレスバーカウント（初期値） */
  export const ENEMY_PROGRESS_COUNT_INIT = 0;
  /** レベル毎の敵プログレスバーのカウント（最大値） */
  export const ENEMY_PROGRESS_COUNT_MAX_BY_LEVEL: { [key in QuestionLevel]: number } = {
    level1: 5,
    level2: 3,
    level3: 1,
  };
  /** 味方プログレスバーカウント（初期値） */
  export const FRIEND_PROGRESS_COUNT_INIT = 0;
  /** 味方プログレスバーカウント（最大値） */
  export const FRIEND_PROGRESS_COUNT_MAX = 2;

  /** 問題範囲の最小値 */
  export const QUESTION_RANGE_MIN = 0;

  /** 問題難易度の初期値（インデックス） */
  export const QUESTION_LEVEL_INDEX_INIT = 0;

  /** 敵ポケモン数 */
  export const ENEMY_POKEMON_TOTAL_COUNT = 3;
  /** 残り敵ポケモンなし */
  export const REMAINING_ENEMY_POKEMON_NOTHING = 0;

  /** 解答時間 */
  export const ANSWER_TIME_LIMIT = 10;

  /** 強制的に正答にするテキスト */
  export const FORCE_CORRECT_ANSWER_TEXT = 'サトシ';

  /** 味方ポケモンID */
  export const FRIEND_POKEMON_ID = '25';
}
