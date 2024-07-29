import {
  congratulationsContainerStyle,
  congratulationsMessageContainerStyle,
  congratulationsPokemonStyle,
  congratulationsScreenStyle,
  congratulationsStyle,
  congratulationsTextStyle,
} from '@/features/congratulations/Congratulations.css';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

/**
 * Congratulations
 */
export const Congratulations = () => {
  return (
    <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} initial={{ opacity: 0 }}>
      <Confetti width={1100} height={740} recycle={true} />
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        className={congratulationsScreenStyle}
      >
        <div className={congratulationsMessageContainerStyle}>
          <img className={congratulationsPokemonStyle} src={'/ニャオハ.png'} alt="pokeImg" />
          <div className={congratulationsTextStyle}>Congratulations！</div>
        </div>
      </motion.div>
      <div className={congratulationsContainerStyle}>
        <p className={congratulationsStyle}>ポケモンリーグ チャンピオン おめでとう！</p>
      </div>
    </motion.div>
  );
};
