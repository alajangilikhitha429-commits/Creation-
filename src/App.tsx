/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { PlatformCard } from './components/PlatformCard';
import { ComparisonTable } from './components/ComparisonTable';
import { PlatformDetailModal } from './components/PlatformDetailModal';
import { ProjectMatcherModal } from './components/ProjectMatcherModal';
import { StudentPackGuideModal } from './components/StudentPackGuideModal';
import { SavedDrawerModal } from './components/SavedDrawerModal';
import { StudentGuideSection } from './components/StudentGuideSection';
import { Footer } from './components/Footer';

import { PLATFORMS_DATA } from './data/platforms';
import { CategoryId, FilterOptions, Platform } from './types';
import { SearchX, Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';

const STORAGE_SAVED_KEY = 'devstack_saved_platforms_v1';

export default function App() {
  // Filters State
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: 'all',
    difficulty: 'All',
    pricing: 'All',
    onlyStudentPack: false,
    sortBy: 'recommended'
  });

  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Bookmarks / Saved platforms in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SAVED_KEY);
      return saved ? JSON.parse(saved) : ['nextjs-react', 'flutterflow', 'v0-vercel', 'supabase-stack'];
    } catch {
      return ['nextjs-react', 'flutterflow', 'v0-vercel', 'supabase-stack'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(savedIds));
    } catch {
      // ignore storage failure
    }
  }, [savedIds]);

  // Modals state
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [isStudentPackOpen, setIsStudentPackOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Bookmark toggler
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearSaved = () => {
    setSavedIds([]);
  };

  // Keyboard escape listener for any open modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlatform(null);
        setIsMatcherOpen(false);
        setIsStudentPackOpen(false);
        setIsSavedDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter & Sort Pipeline
  const filteredPlatforms = useMemo(() => {
    return PLATFORMS_DATA.filter((platform) => {
      // Category filter
      if (filters.category !== 'all' && platform.category !== filters.category) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty !== 'All' && platform.difficulty !== filters.difficulty) {
        return false;
      }

      // Pricing filter
      if (filters.pricing !== 'All') {
        if (filters.pricing === 'Free' && platform.pricing !== 'Free') return false;
        if (filters.pricing === 'Free Tier' && platform.pricing !== 'Free Tier' && platform.pricing !== 'Free') return false;
        if (filters.pricing === 'Free with Student Pack' && !platform.studentPerk) return false;
      }

      // Student Pack filter
      if (filters.onlyStudentPack && !platform.studentPerk) {
        return false;
      }

      // Search query
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase().trim();
        const matchesName = platform.name.toLowerCase().includes(query);
        const matchesCategory = platform.categoryName.toLowerCase().includes(query);
        const matchesTagline = platform.tagline.toLowerCase().includes(query);
        const matchesSpecialization = platform.specializesIn.toLowerCase().includes(query);
        const matchesBuild = platform.canBuild.some(b => b.toLowerCase().includes(query));
        const matchesProjects = platform.sampleProjectIdeas.some(i => i.toLowerCase().includes(query));
        const matchesPerk = platform.studentPerk?.toLowerCase().includes(query);

        if (!matchesName && !matchesCategory && !matchesTagline && !matchesSpecialization && !matchesBuild && !matchesProjects && !matchesPerk) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === 'difficulty-asc') {
        const rank = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return rank[a.difficulty] - rank[b.difficulty];
      }
      // default 'recommended': preserve curated order
      return 0;
    });
  }, [filters]);

  const savedPlatformsList = useMemo(() => {
    return PLATFORMS_DATA.filter((p) => savedIds.includes(p.id));
  }, [savedIds]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        activeCategory={filters.category}
        onSelectCategory={(cat) => setFilters(f => ({ ...f, category: cat }))}
        savedCount={savedIds.length}
        onOpenSavedModal={() => setIsSavedDrawerOpen(true)}
        onOpenMatcherModal={() => setIsMatcherOpen(true)}
        onOpenStudentPackModal={() => setIsStudentPackOpen(true)}
        searchQuery={filters.search}
        onSearchChange={(q) => setFilters(f => ({ ...f, search: q }))}
      />

      {/* Hero Section */}
      <Hero
        onSelectCategory={(cat) => {
          setFilters(f => ({ ...f, category: cat }));
          // Smooth scroll to catalog
          const catalogEl = document.getElementById('platforms-catalog');
          catalogEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenMatcher={() => setIsMatcherOpen(true)}
        totalPlatforms={PLATFORMS_DATA.length}
      />

      {/* Filter Bar */}
      <div id="platforms-catalog">
        <FilterBar
          filters={filters}
          onChangeFilters={setFilters}
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
          resultCount={filteredPlatforms.length}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {filteredPlatforms.length === 0 ? (
          /* Empty Search / Filter State */
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              No matching platforms found
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any platform matching &ldquo;{filters.search || 'your active filter criteria'}&rdquo;.
            </p>
            <button
              onClick={() => setFilters({
                search: '',
                category: 'all',
                difficulty: 'All',
                pricing: 'All',
                onlyStudentPack: false,
                sortBy: 'recommended'
              })}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all filters</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPlatforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                isSaved={savedIds.includes(platform.id)}
                onToggleSave={handleToggleSave}
                onOpenDetails={setSelectedPlatform}
              />
            ))}
          </div>
        ) : (
          /* Comparison Table */
          <ComparisonTable
            platforms={filteredPlatforms}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onOpenDetails={setSelectedPlatform}
          />
        )}

      </main>

      {/* BTech Student Viva & Project Guide Section */}
      <StudentGuideSection />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setFilters(f => ({ ...f, category: cat }))}
        onOpenStudentPack={() => setIsStudentPackOpen(true)}
        onOpenMatcher={() => setIsMatcherOpen(true)}
      />

      {/* Modals & Drawers */}
      <PlatformDetailModal
        platform={selectedPlatform}
        onClose={() => setSelectedPlatform(null)}
        isSaved={selectedPlatform ? savedIds.includes(selectedPlatform.id) : false}
        onToggleSave={handleToggleSave}
      />

      <ProjectMatcherModal
        isOpen={isMatcherOpen}
        onClose={() => setIsMatcherOpen(false)}
        onSelectPlatform={(p) => setSelectedPlatform(p)}
      />

      <StudentPackGuideModal
        isOpen={isStudentPackOpen}
        onClose={() => setIsStudentPackOpen(false)}
      />

      <SavedDrawerModal
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedPlatforms={savedPlatformsList}
        onRemoveSaved={handleToggleSave}
        onClearAll={handleClearSaved}
        onOpenDetails={setSelectedPlatform}
      />

    </div>
  );
}
