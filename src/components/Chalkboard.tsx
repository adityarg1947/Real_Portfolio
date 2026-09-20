import React from 'react';
import { ClipboardList, Check } from 'lucide-react';

interface ChalkboardProps {
  items: string[];
}

export const Chalkboard: React.FC<ChalkboardProps> = ({ items }) => {
  return (
    <div className="chalkboard-bg border-4 border-wood-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between">
      {/* Corner Board Accent */}
      <div className="absolute top-3 right-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
        Board #01
      </div>

      <div>
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
          <h3 className="text-2xl font-hand font-bold text-amber-200 tracking-wider">
            Currently:
          </h3>
          <ClipboardList className="w-5 h-5 text-amber-300/80" />
        </div>

        {/* Hand-written Style Checklist */}
        <ul className="space-y-4 font-hand text-2xl text-slate-100">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded border-2 border-amber-300 flex items-center justify-center text-amber-300 text-base font-bold bg-white/5 shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Chalk Signature */}
      <div className="pt-8 text-right">
        <span className="font-hand text-xl text-amber-300/70">
          - Keep coding with heart.
        </span>
      </div>
    </div>
  );
};
