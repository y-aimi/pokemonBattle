'use client';

import { dummyScreenStyle, mainStyle, screenStyle } from '@/app/pokemon/pokemon.css';
import { usePokemon } from '@/app/pokemon/usePokemon';
import { Answer } from '@/features/answer/Answer';
import { BlackedOut } from '@/features/blackedOut/BlackedOut';
import { Congratulations } from '@/features/congratulations/Congratulations';
import { EnemyParty } from '@/features/enemyParty/EnemyParty';
import { EnemyPokemon } from '@/features/enemyPokemon/EnemyPokemon';
import { FriendPokemon } from '@/features/friendPokemon/FriendPokemon';
import { Question } from '@/features/question/Question';
import { ReturnToHome } from '@/features/returnToHome/ReturnToHome';

/**
 * ポケモンページ
 */
export default function Pokemon() {
  const {
    enemyPokemon,
    friendPokemon,
    question,
    isDispQuestion,
    questionLevelIndex,
    correctAnswer,
    answer,
    remainingEnemyPokemon,
    inputValue,
    enemyProgressCount,
    friendProgressCount,
    isWinBattle,
    isEnableBattle,
    isBlackOut,
    handleInputKeyDown,
    handleInputOnChange,
    handleInputOnCompositionStart,
    handleInputOnCompositionEnd,
  } = usePokemon();

  return (
    <main className={mainStyle}>
      <div className={dummyScreenStyle} />
      <div className={screenStyle}>
        <EnemyParty remainingEnemyPokemon={remainingEnemyPokemon} />
        <EnemyPokemon
          {...{
            pokemon: enemyPokemon,
            questionLevelIndex: questionLevelIndex,
            progressCount: enemyProgressCount,
            isWinBattle: isWinBattle,
          }}
        />
        <Question {...{ question: question, isDispQuestion: isDispQuestion }} />
        <FriendPokemon
          {...{
            pokemon: friendPokemon,
            questionLevelIndex: questionLevelIndex,
            progressCount: friendProgressCount,
            isWinBattle: isWinBattle,
          }}
        />
        <ReturnToHome />
        {isWinBattle ? (
          <Congratulations />
        ) : isBlackOut ? (
          <BlackedOut />
        ) : (
          <Answer
            {...{
              answer: answer,
              correctAnswer: correctAnswer,
              inputValue: inputValue,
              isEnableBattle: isEnableBattle,
              isDispQuestion: isDispQuestion,
              handleInputKeyDown: handleInputKeyDown,
              handleInputOnChange: handleInputOnChange,
              handleInputOnCompositionStart: handleInputOnCompositionStart,
              handleInputOnCompositionEnd: handleInputOnCompositionEnd,
            }}
          />
        )}
      </div>
      <div className={dummyScreenStyle} />
    </main>
  );
}
