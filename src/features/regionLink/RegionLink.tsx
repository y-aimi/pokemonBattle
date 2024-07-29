import { AppRoutes } from '@/common/AppRoutes';
import { GlobalContext } from '@/contexts/GlobalContext';
import { linkContainerStyle } from '@/features/regionLink/RegionLink.css';
import { RegionLinkProps } from '@/types/RegionLinkProps';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

/**
 * 各地方へのリンク
 *
 * @param region 地方名
 */
export const RegionLink = (props: RegionLinkProps) => {
  const { setPokedexRange } = useContext(GlobalContext);

  // App Routerだとimportパスがnavigationになる
  const router = useRouter();

  /**
   * 必要情報を設定し、画面遷移を実行
   *
   * @param min 図鑑範囲（最小値）
   * @param max 図鑑範囲（最大値）
   */
  const setAndTransiton = (min: number, max: number) => {
    setPokedexRange({ min: min, max: max });
    router.push(AppRoutes.pokemon);
  };

  return (
    <div className={linkContainerStyle} onClick={() => setAndTransiton(props.min, props.max)}>
      {props.region}
    </div>
  );
};
