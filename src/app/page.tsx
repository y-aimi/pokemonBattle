'use client';

import {
  RegionLinkContainerStyle,
  dummyScreenStyle,
  hintContainerStyle,
  hintKeywordStyle,
  hintPokemonStyle,
  hintStyle,
  mainStyle,
  pokemonBallStyle,
  questionCountContainerStyle,
  questionCountStyle,
  screenStyle,
  titleContainerStyle,
  titleQuestionContainerStyle,
  titleStyle,
} from '@/app/index.css';
import { Const } from '@/common/AppConst';
import { QuestionConst } from '@/features/question/QuestionConst';
import { RegionLink } from '@/features/regionLink/RegionLink';

/**
 * indexページ
 */
export default function index() {
  return (
    <main className={mainStyle}>
      <div className={dummyScreenStyle} />
      <div className={screenStyle}>
        <div className={titleQuestionContainerStyle}>
          <div className={titleContainerStyle}>
            <img className={pokemonBallStyle} src={'/pokemon_ball.svg'} alt="ball" />
            <p className={titleStyle}>ポケモンといっしょに漢字でGO！</p>
            <img className={pokemonBallStyle} src={'/pokemon_ball.svg'} alt="ball" />
          </div>
          <div className={questionCountContainerStyle}>
            <p>
              1匹目の問題数: <span className={questionCountStyle}>{QuestionConst.QuestionList.level1.length}</span> 問
            </p>
            <p>
              2匹目の問題数: <span className={questionCountStyle}>{QuestionConst.QuestionList.level2.length}</span> 問
            </p>
            <p>
              3匹目の問題数: <span className={questionCountStyle}>{QuestionConst.QuestionList.level3.length}</span> 問
              (漢検1級レベル)
            </p>
          </div>
        </div>
        <div className={RegionLinkContainerStyle}>
          <RegionLink {...{ region: 'カントー地方', min: Const.POKEDEX_KANTO_MIN, max: Const.POKEDEX_KANTO_MAX }} />
          <RegionLink {...{ region: 'ジョウト地方', min: Const.POKEDEX_JOHTO_MIN, max: Const.POKEDEX_JOHTO_MAX }} />
          <RegionLink {...{ region: 'ホウエン地方', min: Const.POKEDEX_HOENN_MIN, max: Const.POKEDEX_HOENN_MAX }} />
        </div>
        <div className={RegionLinkContainerStyle}>
          <RegionLink {...{ region: 'シンオウ地方', min: Const.POKEDEX_SINNOH_MIN, max: Const.POKEDEX_SINNOH_MAX }} />
          <RegionLink {...{ region: 'イッシュ地方', min: Const.POKEDEX_UNOVA_MIN, max: Const.POKEDEX_UNOVA_MAX }} />
          <RegionLink {...{ region: 'カロス地方', min: Const.POKEDEX_KALOS_MIN, max: Const.POKEDEX_KALOS_MAX }} />
        </div>
        <div className={RegionLinkContainerStyle}>
          <RegionLink {...{ region: 'アローラ地方', min: Const.POKEDEX_ALOLA_MIN, max: Const.POKEDEX_ALOLA_MAX }} />
          <RegionLink {...{ region: 'ガラル地方', min: Const.POKEDEX_GALAR_MIN, max: Const.POKEDEX_GALAR_MAX }} />
          <RegionLink {...{ region: 'ヒスイ地方', min: Const.POKEDEX_HISUI_MIN, max: Const.POKEDEX_HISUI_MAX }} />
        </div>
        <div className={RegionLinkContainerStyle}>
          <RegionLink {...{ region: 'パルデア地方', min: Const.POKEDEX_PALDEA_MIN, max: Const.POKEDEX_PALDEA_MAX }} />
          <RegionLink {...{ region: 'すべての地方', min: Const.POKEDEX_ALL_MIN, max: Const.POKEDEX_ALL_MAX }} />
          <div className={hintContainerStyle}>
            <div className={hintStyle}>
              どうしてもクリアできない時は、解答で「
              <span className={hintKeywordStyle}>{Const.FORCE_CORRECT_ANSWER_TEXT}</span>」と答えるニャ!
            </div>
            <img className={hintPokemonStyle} src={'/ニャース.png'} alt="ball" />
          </div>
        </div>
      </div>
      <div className={dummyScreenStyle} />
    </main>
  );
}
