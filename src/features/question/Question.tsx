import { Const } from '@/common/AppConst';
import { QuestionContainerStyle, QuestionStyle } from '@/features/question/Question.css';
import { QuestionProps } from '@/types/QuestionProps';
import { motion } from 'framer-motion';

/**
 * 問題
 */
export const Question = (props: QuestionProps) => {
  return (
    <div className={QuestionContainerStyle}>
      {props.isDispQuestion && (
        <motion.p
          className={QuestionStyle}
          animate={{ y: '10rem', fontSize: '12rem', textShadow: '0rem 0.1rem 2rem #b22222, 0rem -5rem 7rem #ff8000' }}
          transition={{ duration: Const.ANSWER_TIME_LIMIT }}
          initial={{ y: '0', fontSize: '3.5rem', textShadow: '0rem 0.1rem 10rem #b22222, 0rem -5rem 15rem #ff8000' }}
        >
          {props.question?.kanji}
        </motion.p>
      )}
    </div>
  );
};
