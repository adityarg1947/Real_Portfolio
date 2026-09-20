import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const getVariants = () => {
    let x = 0;
    let y = 0;

    if (direction === 'up') y = 30;
    if (direction === 'down') y = -30;
    if (direction === 'left') x = 30;
    if (direction === 'right') x = -30;

    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0] as const,
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
