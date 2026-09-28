import React from 'react';
import { 
  Compass, 
  Bookmark, 
  GraduationCap, 
  Search, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CategoryId } from '../types';

interface NavbarProps {
  activeCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  savedCount: number;
  onOpenSavedModal: () => void;
  onOpenMatcherModal: () => void;
  onOpenStudentPackModal: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSavedModal,
  onOpenMatcherModal,
  onOpenStudentPackModal,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Student Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <span className="font-mono text-cyan-400">{'<'}</span>D<span className="font-mono text-cyan-400">{'/>'}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-lg tracking-tight">DevStack</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  Campus
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Web & App Builders Directory for BTech Projects
              </p>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search tools (e.g. Flutter, React, No-code, v0, Firebase)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5 rounded"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Project Stack Matcher */}
            <button
              onClick={onOpenMatcherModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Project Matcher</span>
              <span className="sm:hidden">Match</span>
            </button>

            {/* Student Perks Guide */}
            <button
              onClick={onOpenStudentPackModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200/60 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="hidden lg:inline">Student Perks</span>
            </button>

            {/* Saved Bookmarks */}
            <button
              onClick={onOpenSavedModal}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors"
              title="View Bookmarked Platforms"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'text-amber-500 fill-amber-500' : 'text-slate-500'}`} />
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Search input bar */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search platforms, skills, languages..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
