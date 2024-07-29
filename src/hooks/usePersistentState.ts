import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { AppSessionStorage } from '@/common/AppSessionStorage';
import { PersistentDataKey } from '@/types/enum/PersistentDataKey';

/**
 * 永続データ管理用Hook
 *
 * @param defaultValue stateの初期値
 * @param key 永続データキー
 * @returns [永続化state, 永続化state更新関数]
 */
export function usePersistentState<T>(
  defaultValue: T,
  key: PersistentDataKey
): [state: T, dispatch: Dispatch<SetStateAction<T>>] {
  const [state, dispatch] = useState<T>(defaultValue);

  // 初期化完了判定フラグ（true：初期化完了）
  const isInitialized = useRef(false);

  // 永続化処理
  useEffect(() => {
    if (isInitialized.current) {
      AppSessionStorage.setPersistentData(key, state);
    } else {
      dispatch(AppSessionStorage.getPersistentData(key) ?? defaultValue);
      isInitialized.current = true;
    }
  }, [state]);

  return [state, dispatch];
}
