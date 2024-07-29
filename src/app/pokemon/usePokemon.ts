import { get } from '@/api/ApiBase';
import { ApiEndpoints } from '@/api/ApiParams';
import { Const } from '@/common/AppConst';
import { GlobalContext } from '@/contexts/GlobalContext';
import { QuestionConst } from '@/features/question/QuestionConst';
import { useDataFetch } from '@/hooks/useDataFetch';
import { QuestionLevel } from '@/types/QuestionLevel';
import { QuestionObj } from '@/types/QuestionObj';
import { UtilRandom } from '@/util/UtilRandom';
import { PokeAPI } from 'pokeapi-types';
import { ChangeEvent, KeyboardEvent, useContext, useEffect, useState } from 'react';

/**
 * ポケモン用hooks
 */
export const usePokemon = () => {
  const { pokedexRange } = useContext(GlobalContext);

  // ----------------------------------------------------------------------------------------------------
  // state
  // ----------------------------------------------------------------------------------------------------

  // 敵ポケモンID
  const [enemyPokeId, setEnemyPokeId] = useState<string>();
  // 敵ポケモン情報
  const [enemyPokemon, setEnemyPokemon] = useState<PokeAPI.Pokemon>();
  // 味方ポケモン情報
  const [friendPokemon, setFriendPokemon] = useState<PokeAPI.Pokemon>();
  // 問題
  const [question, setQuestion] = useState<QuestionObj>();
  // 問題表示有無
  const [isDispQuestion, setIsDispQuestion] = useState<boolean>(false);
  // 問題難易度インデックス
  const [questionLevelIndex, setQuestionLevelIndex] = useState<number>(Const.QUESTION_LEVEL_INDEX_INIT);
  // 正解
  const [correctAnswer, setCorrectAnswer] = useState<QuestionObj>();
  // 解答
  const [answer, setAnswer] = useState<string>();
  // 残り敵ポケモン数
  const [remainingEnemyPokemon, setRemainingEnemyPokemon] = useState<number>(Const.ENEMY_POKEMON_TOTAL_COUNT);
  // フォーム入力値
  const [inputValue, setInputValue] = useState<string>('');
  // 敵プログレスバーのカウント
  const [enemyProgressCount, setEnemyProgressCount] = useState<number>(Const.ENEMY_PROGRESS_COUNT_INIT);
  // 味方プログレスバーのカウント
  const [friendProgressCount, setFriendProgressCount] = useState<number>(Const.FRIEND_PROGRESS_COUNT_INIT);
  // タイムアウト設定の状態
  const [timeoutStatus, setTimeoutStatus] = useState<NodeJS.Timeout>();
  // バトルに勝利しているか
  const [isWinBattle, setIsWinBattle] = useState<boolean>(false);
  // バトル開始しているかどうか
  const [isEnableBattle, setIsEnableBattle] = useState<boolean>(false);
  // 入力テキストが変換可能な状態かどうか
  const [isComposition, setIsComposition] = useState<boolean>(false);
  // input処理が有効化どうか
  const [isEnableInputAction, setIsEnableInputAction] = useState<boolean>(true);
  // ブラックアウト状態かどうか
  const [isBlackOut, setIsBlackOut] = useState<boolean>(false);

  // ----------------------------------------------------------------------------------------------------
  // hooks
  // ----------------------------------------------------------------------------------------------------

  // ポケモン図鑑範囲をフックして敵のポケモンIDを更新
  useEffect(() => {
    if (pokedexRange.min === undefined || pokedexRange.max === undefined) {
      return;
    }
    setEnemyPokeId(UtilRandom.getRandomRangeIntString(pokedexRange.min, pokedexRange.max));
  }, [pokedexRange.min, pokedexRange.max]);

  // 敵画像がnullだった場合再抽選
  useEffect(() => {
    if (enemyPokemon?.sprites.front_default === null) {
      setEnemyPokeId(UtilRandom.getRandomRangeIntString(pokedexRange.min, pokedexRange.max));
    }
  }, [enemyPokemon]);

  // バトル開始状態をフックして問題表示有無を管理
  useEffect(() => {
    if (isEnableBattle) {
      setIsDispQuestion(true);
    }
  }, [isEnableBattle]);

  // プログレスバーのカウントフック処理
  useEffect(() => {
    if (enemyProgressCount >= Const.ENEMY_PROGRESS_COUNT_MAX_BY_LEVEL[QuestionLevel[questionLevelIndex]]) {
      setIsEnableInputAction(false);
      setTimeout(() => {
        setEnemyPokeId(UtilRandom.getRandomRangeIntString(pokedexRange.min, pokedexRange.max));
        setEnemyProgressCount(Const.ENEMY_PROGRESS_COUNT_INIT);
        setQuestionLevelIndex((preState) => preState + 1);
        setRemainingEnemyPokemon((preState) => preState - 1);
        setIsEnableInputAction(true);
      }, 1 * 1000);
    }
  }, [enemyProgressCount]);

  // プログレスカウントをフックして問題情報を変更
  useEffect(() => {
    if (questionLevelIndex < QuestionLevel.length) {
      // 出題範囲の最大値
      const questionRangeMax = QuestionConst.QuestionList[QuestionLevel[questionLevelIndex]].length - 1;
      setQuestion(
        QuestionConst.QuestionList[QuestionLevel[questionLevelIndex]][
          UtilRandom.getRandomRangeInt(Const.QUESTION_RANGE_MIN, questionRangeMax)
        ]
      );
    }
    setIsDispQuestion(false);
  }, [enemyProgressCount]);

  // 味方ポケモンのダメージ管理
  useEffect(() => {
    // タイムアウト設定
    if (isDispQuestion && questionLevelIndex < QuestionLevel.length) {
      // 出題範囲の最大値
      const questionRangeMax = QuestionConst.QuestionList[QuestionLevel[questionLevelIndex]].length - 1;
      // タイムアウト設定内処理
      const timeoutSetting = setTimeout(() => {
        setFriendProgressCount((preState) => preState + 1);
        setIsDispQuestion(false);
        setQuestion(
          QuestionConst.QuestionList[QuestionLevel[questionLevelIndex]][
            UtilRandom.getRandomRangeInt(Const.QUESTION_RANGE_MIN, questionRangeMax)
          ]
        );
        setCorrectAnswer(question);
      }, Const.ANSWER_TIME_LIMIT * 1000);
      setTimeoutStatus(timeoutSetting);
    }
    // タイムアウト解除
    if (timeoutStatus !== undefined) {
      clearTimeout(timeoutStatus);
    }
  }, [isDispQuestion]);

  // 全てのレベルをクリアすると勝利
  useEffect(() => {
    if (remainingEnemyPokemon === Const.REMAINING_ENEMY_POKEMON_NOTHING) {
      setIsEnableInputAction(false);
      setTimeout(() => {
        setIsWinBattle(true);
      }, 1 * 1000);
    }
  }, [remainingEnemyPokemon]);

  // ブラックアウト状態の変更
  useEffect(() => {
    if (friendProgressCount >= Const.FRIEND_PROGRESS_COUNT_MAX) {
      setTimeout(() => {
        setIsBlackOut(true);
      }, 1 * 1000);
    }
  }, [friendProgressCount]);

  // ----------------------------------------------------------------------------------------------------
  // イベントハンドル
  // ----------------------------------------------------------------------------------------------------

  // inputタグonKeyDownイベントの処理
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || isComposition || !isEnableInputAction) {
      return;
    }

    setIsEnableBattle(true);
    setInputValue('');
    setAnswer(e.currentTarget.value);

    // 正解を答えた場合の処理（強制的に正答にするオプション付き）
    if (e.currentTarget.value === question?.kana || e.currentTarget.value === Const.FORCE_CORRECT_ANSWER_TEXT) {
      setEnemyProgressCount((preState) => preState + 1);
      setCorrectAnswer(question);
      setIsDispQuestion(false);
    }

    // 次の問題を出題する処理
    if (e.currentTarget.value === '' && !isDispQuestion) {
      setIsDispQuestion(true);
    }
  };

  // inputタグonChangeイベントの処理
  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // inputタグonCompositionStartイベントの処理
  const handleInputOnCompositionStart = () => {
    setIsComposition(true);
  };

  // inputタグonCompositionEndイベントの処理
  const handleInputOnCompositionEnd = () => {
    setIsComposition(false);
  };

  // ----------------------------------------------------------------------------------------------------
  // データ取得処理
  // ----------------------------------------------------------------------------------------------------

  /**
   * 敵ポケモンのデータ取得
   */
  useDataFetch(
    async ({ config }) => {
      // 条件が揃っていなければデータ取得しない
      if (enemyPokeId === undefined || isWinBattle) {
        return;
      }

      const url = `${ApiEndpoints.pokemon}/${enemyPokeId}`;
      const res = await get<PokeAPI.Pokemon>(url, config);

      //正常終了時
      if (res !== undefined) {
        setEnemyPokemon(res);
      }
    },
    [enemyPokeId]
  );

  /**
   * 味方ポケモンのデータ取得（back_defaul画像がnullのケースが多いため固定値）
   */
  useDataFetch(async ({ config }) => {
    // 条件が揃っていなければデータ取得しない
    if (isWinBattle) {
      return;
    }

    const url = `${ApiEndpoints.pokemon}/${Const.FRIEND_POKEMON_ID}`;
    const res = await get<PokeAPI.Pokemon>(url, config);

    //正常終了時
    if (res !== undefined) {
      setFriendPokemon(res);
    }
  }, []);

  // ----------------------------------------------------------------------------------------------------
  // 返却値
  // ----------------------------------------------------------------------------------------------------

  return {
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
  };
};
