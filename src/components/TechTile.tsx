import React from 'react';
import { TechItem } from '../types/portfolio';

interface TechTileProps {
  item: TechItem;
}

export const TechTile: React.FC<TechTileProps> = ({ item }) => {
  return (
    <div className="tech-tile border border-slate-700/60 rounded-2xl p-4 flex flex-col items-center justify-center text-center group cursor-default">
      <span className="text-2xl mb-1.5 transform group-hover:scale-110 transition-transform">
        {item.icon}
      </span>
      <span className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
        {item.name}
      </span>
      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
        {item.badgeText}
      </span>
    </div>
  );
};
