import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  LayoutGrid, 
  Table as TableIcon, 
  SlidersHorizontal,
  GraduationCap
} from 'lucide-react';
import { CATEGORIES } from '../data/platforms';
import { CategoryId, DifficultyLevel, FilterOptions, PricingType } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  onChangeFilters: (newFilters: FilterOptions) => void;
  viewMode: 'grid' | 'table';
  onChangeViewMode: (mode: 'grid' | 'table') => void;
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChangeFilters,
  viewMode,
  onChangeViewMode,
  resultCount,
}) => {
  const handleCategoryClick = (catId: CategoryId) => {
    onChangeFilters({ ...filters, category: catId });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilters({ ...filters, difficulty: e.target.value as DifficultyLevel | 'All' });
  };

  const handlePricingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilters({ ...filters, pricing: e.target.value as PricingType | 'All' });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilters({ ...filters, sortBy: e.target.value as FilterOptions['sortBy'] });
  };

  const handleStudentPackToggle = () => {
    onChangeFilters({ ...filters, onlyStudentPack: !filters.onlyStudentPack });
  };

  const handleReset = () => {
    onChangeFilters({
      search: '',
      category: 'all',
      difficulty: 'All',
      pricing: 'All',
      onlyStudentPack: false,
      sortBy: 'recommended'
    });
  };

  const isFiltered = 
    filters.category !== 'all' || 
    filters.difficulty !== 'All' || 
    filters.pricing !== 'All' || 
    filters.onlyStudentPack || 
    filters.search !== '';

  return (
    <div className="bg-white border-y border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Category Segmented Tabs (Desktop & Tablet) */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0 mb-3">
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id as CategoryId)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Row: Dropdowns, Student Pack toggle, Results Count, View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Difficulty select */}
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
              <span className="text-slate-500 font-medium">Difficulty:</span>
              <select
                value={filters.difficulty}
                onChange={handleDifficultyChange}
                aria-label="Filter by difficulty level"
                className="bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer text-xs"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Pricing select */}
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
              <span className="text-slate-500 font-medium">Pricing:</span>
              <select
                value={filters.pricing}
                onChange={handlePricingChange}
                aria-label="Filter by pricing model"
                className="bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer text-xs"
              >
                <option value="All">All Plans</option>
                <option value="Free">100% Free</option>
                <option value="Free Tier">Free Tier Available</option>
                <option value="Free with Student Pack">Student Pack Free</option>
              </select>
            </div>

            {/* Student Pack Only Toggle */}
            <button
              onClick={handleStudentPackToggle}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                filters.onlyStudentPack
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-medium'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free Student Perks</span>
            </button>

            {/* Sort by */}
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
              <span className="text-slate-500 font-medium">Sort:</span>
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                aria-label="Sort platforms list"
                className="bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer text-xs"
              >
                <option value="recommended">Best for College</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
                <option value="difficulty-asc">Difficulty (Easy first)</option>
              </select>
            </div>

            {/* Reset Filters button */}
            {isFiltered && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 px-2 py-1 text-xs hover:underline transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right side: Count & View Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Showing <span className="font-semibold text-slate-900">{resultCount}</span> {resultCount === 1 ? 'platform' : 'platforms'}
            </span>

            <div className="flex items-center p-0.5 bg-slate-100 rounded-md border border-slate-200">
              <button
                onClick={() => onChangeViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Grid Cards View"
                aria-label="Grid Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onChangeViewMode('table')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Comparison Table View"
                aria-label="Comparison Table View"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
