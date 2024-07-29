import { PokeAPI } from 'pokeapi-types';
/**
 * ポケモンのprops型
 *
 * - pokemon PokeAPI.Pokemon
 * - questionLevelIndex 問題難易度インデックス
 * - progressCount プログレスバーのカウント
 * - isWinBattle バトルに勝利しているか
 */
export type PokemonProps = {
  pokemon?: PokeAPI.Pokemon;
  questionLevelIndex: number;
  progressCount: number;
  isWinBattle: boolean;
};
