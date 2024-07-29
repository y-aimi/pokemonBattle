import { PersistentDataKey } from '@/types/enum/PersistentDataKey';

/**
 * セッションストレージ管理クラス
 *
 * ※クラス名とimport名を同一にするためlintオプションでnamespaceの使用を許可する
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AppSessionStorage {
  // ----------------------------------------------------------------------------------------------------
  // 共通定義
  // ----------------------------------------------------------------------------------------------------

  /**
   * セッションストレージに保存するデータのキー名
   *  - PersistentData：永続データ
   */
  const StorageKey = {
    PokemonPersistent: 'pokemon-persistent',
  } as const;

  type StorageKey = (typeof StorageKey)[keyof typeof StorageKey];

  // ----------------------------------------------------------------------------------------------------
  // 永続データ
  // ----------------------------------------------------------------------------------------------------

  /**
   * 全永続データをセッションストレージから取得
   *
   * @returns 全永続データ
   */
  const getAllPersistentData = (): { [key in PersistentDataKey]?: unknown } => {
    const str = sessionStorage.getItem(StorageKey.PokemonPersistent);
    return str ? JSON.parse(str) : {};
  };

  /**
   * 指定したキーに対応する永続データをセッションストレージから取得
   *
   * @param key 永続データキー
   * @returns 永続データ
   */
  export const getPersistentData = <T, _>(key: PersistentDataKey): T | undefined => {
    return getAllPersistentData()[key] as T;
  };

  /**
   * 永続データをセッションストレージへ保存
   *
   * @param key 永続データキー
   * @param persistentData 永続化データ
   */
  export const setPersistentData = <T, _>(key: PersistentDataKey, persistentData: T) => {
    const current = getAllPersistentData();
    sessionStorage.setItem(StorageKey.PokemonPersistent, JSON.stringify({ ...current, [key]: persistentData }));
  };

  /**
   * 永続データをセッションストレージから削除
   */
  export const removePersistentData = () => {
    sessionStorage.removeItem(StorageKey.PokemonPersistent);
  };
}
