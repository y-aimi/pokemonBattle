import { AppRoutes } from '@/common/AppRoutes';
import { pokemonBallStyle, returnToHomeContainerStyle } from '@/features/returnToHome/ReturnToHome.css';
import { useRouter } from 'next/navigation';

/**
 * ホーム画面に戻る
 */
export const ReturnToHome = () => {
  const router = useRouter();

  return (
    <div className={returnToHomeContainerStyle} onClick={() => router.push(AppRoutes.index)}>
      <img className={pokemonBallStyle} src={'/pokemon_ball.svg'} alt="ball" />
      <p>ポケモンセンターに戻る</p>
      <img className={pokemonBallStyle} src={'/pokemon_ball.svg'} alt="ball" />
    </div>
  );
};
