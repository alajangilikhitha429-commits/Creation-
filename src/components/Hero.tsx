import React from 'react';
import { 
  Globe, 
  Boxes, 
  Sparkles, 
  Smartphone, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CategoryId } from '../types';

interface HeroProps {
  onSelectCategory: (cat: CategoryId) => void;
  onOpenMatcher: () => void;
  totalPlatforms: number;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSelectCategory, 
  onOpenMatcher,
  totalPlatforms 
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 pt-8 pb-10 sm:pt-12 sm:pb-14">
      {/* Subtle background tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Subtle text kicker (Anti-slop: zero pill capsule) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>BTech Engineering Project Directory</span>
            <span aria-hidden="true">·</span>
            <span className="text-indigo-600">Updated for 2026 Academic Year</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Popular platforms to build websites & apps for your college projects.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From 24-hour hackathons and 2nd-year mini projects to final-year capstone submissions. Compare difficulty, student pricing perks, and what you can build across 5 specialized categories.
          </p>

          {/* Quick Action Badges / Callouts */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenMatcher}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all hover:scale-[1.01]"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Stack Recommendation Wizard</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            
            <div className="flex items-center gap-3 text-xs text-slate-500 py-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {totalPlatforms} Verified Platforms
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Viva-Ready Talking Points
              </span>
            </div>
          </div>

          {/* Category Jump Cards / Quick Tabs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { id: 'website-builders', name: 'Website Builders', icon: Globe, desc: 'Framer, Webflow, WordPress' },
              { id: 'nocode-lowcode', name: 'No-Code / Low-Code', icon: Boxes, desc: 'Bubble, FlutterFlow, Retool' },
              { id: 'ai-builders', name: 'AI Builders', icon: Sparkles, desc: 'v0, Bolt.new, Lovable' },
              { id: 'app-dev', name: 'App Dev', icon: Smartphone, desc: 'Flutter, React Native, Expo' },
              { id: 'coding-platforms', name: 'Coding Stacks', icon: Code2, desc: 'Next.js, Supabase, Vercel' },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id as CategoryId)}
                  className="text-left p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-400 hover:shadow-xs transition-all group"
                >
                  <Icon className="w-4 h-4 text-slate-700 group-hover:text-indigo-600 mb-2 transition-colors" />
                  <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {cat.desc}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
