import { AxiosRequestConfig } from 'axios';
import { DependencyList, useEffect } from 'react';

/**
 * データ取得処理の型
 *
 * @param config AxiosRequestConfig axiosリクエスト設定パラメータ
 */
export type FetchAction = ({ config }: { config: AxiosRequestConfig }) => Promise<void>;

/**
 * データ取得処理制御用Hook
 *
 * @param func データ取得処理
 * @param deps 依存配列（デフォルト：パラメータなし）
 */
export const useDataFetch = (func: FetchAction, deps?: DependencyList) => {
  // アプリ共通データ

  useEffect(() => {
    const abortController = new AbortController();
    let hasFinished = false;

    (async () => {
      await func({ config: { signal: abortController.signal } });
      hasFinished = true;
    })();

    // アンマウント時にデータ取得未完であればリクエストをキャンセル
    return () => {
      if (!hasFinished) {
        abortController.abort();
      }
    };
  }, deps);
};
