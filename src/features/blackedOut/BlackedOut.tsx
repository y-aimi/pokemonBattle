import { blackedOutContainerStyle, blackedOutScreenStyle, blackedOutStyle } from '@/features/blackedOut/BlackedOut.css';
import { motion } from 'framer-motion';

/**
 * ブラックアウト（めのまえがまっくら）
 */
export const BlackedOut = () => {
  return (
    <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }} initial={{ opacity: 0 }}>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        initial={{ opacity: 0 }}
        className={blackedOutScreenStyle}
      />
      <div className={blackedOutContainerStyle}>
        <p className={blackedOutStyle}>めのまえが まっくらに なった！</p>
      </div>
    </motion.div>
  );
};
