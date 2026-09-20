import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  handwrittenQuote?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  badge,
  title,
  subtitle,
  handwrittenQuote,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      <div className={`flex items-center gap-2 mb-2 ${isCenter ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full shadow-sm">
            {number}
          </span>
        )}
        {badge && (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg font-medium mt-2">
          {subtitle}
        </p>
      )}

      {handwrittenQuote && (
        <p className="font-hand text-2xl text-amber-300 pt-1 tracking-wide">
          {handwrittenQuote}
        </p>
      )}
    </motion.div>
  );
};
