'use client';

import { Const } from '@/common/AppConst';
import { usePersistentState } from '@/hooks/usePersistentState';
import { PokedexRange } from '@/types/PokedexRange';
import { createContext, ReactNode, SetStateAction, useContext } from 'react';

/**
 * アプリ共通データ管理用Context
 */
export const GlobalContext = createContext({
  // ----------------------------------------------------------------------------------------------------
  // 図鑑範囲
  // ----------------------------------------------------------------------------------------------------

  /**
   * 図鑑範囲
   */
  pokedexRange: { min: Const.POKEDEX_ALL_MIN, max: Const.POKEDEX_ALL_MAX } as PokedexRange,

  /**
   * 図鑑範囲をセット
   * @param pokedexRange 図鑑範囲
   */
  setPokedexRange: (pokedexRange: SetStateAction<PokedexRange>) => {},
});

/**
 * アプリ共通データ管理用ContextのProvider
 */
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(GlobalContext);

  // ----------------------------------------------------------------------------------------------------
  // 図鑑範囲
  // ----------------------------------------------------------------------------------------------------
  const [pokedexRange, setPokedexRange] = usePersistentState<PokedexRange>(context.pokedexRange, 'pokedex-range');

  // ----------------------------------------------------------------------------------------------------
  // Provider作成
  // ----------------------------------------------------------------------------------------------------

  const value = {
    // 図鑑範囲
    pokedexRange,
    setPokedexRange,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
