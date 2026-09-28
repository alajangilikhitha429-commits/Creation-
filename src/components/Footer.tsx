import React from 'react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/platforms';

interface FooterProps {
  onSelectCategory: (cat: CategoryId) => void;
  onOpenStudentPack: () => void;
  onOpenMatcher: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenStudentPack,
  onOpenMatcher,
}) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 pb-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                {'<D/>'}
              </div>
              <span className="font-bold text-slate-900 text-sm">DevStack Campus</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                BTech Edition
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-xs">
              A comprehensive directory curated for engineering students to discover, compare, and choose the right website builders, no-code tools, AI platforms, and app development frameworks for college projects and hackathons.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id as CategoryId);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="hover:text-slate-900 hover:underline transition-colors"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Tools */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">
              Student Tools
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={onOpenMatcher}
                  className="hover:text-slate-900 hover:underline transition-colors"
                >
                  Project Stack Matcher
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStudentPack}
                  className="hover:text-slate-900 hover:underline transition-colors"
                >
                  GitHub Student Developer Pack Guide
                </button>
              </li>
              <li>
                <a
                  href="https://education.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 hover:underline transition-colors"
                >
                  GitHub Education Portal ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} DevStack Campus. Designed for BTech CSE, IT, ECE & Engineering Students.</p>
          <p>All trademarks and platform names belong to their respective owners.</p>
        </div>

      </div>
    </footer>
  );
};
