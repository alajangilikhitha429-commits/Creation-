import React from 'react';
import { 
  ExternalLink, 
  Bookmark, 
  BookOpen, 
  Layers, 
  Check, 
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetails: (platform: Platform) => void;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  platform,
  isSaved,
  onToggleSave,
  onOpenDetails,
}) => {
  // Difficulty visual indicator
  const difficultyConfig = {
    Beginner: {
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      bars: 1,
      label: 'Beginner Friendly'
    },
    Intermediate: {
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      bars: 2,
      label: 'Intermediate'
    },
    Advanced: {
      color: 'text-rose-700 bg-rose-50 border-rose-200',
      bars: 3,
      label: 'Advanced Engineering'
    }
  }[platform.difficulty];

  // Pricing badge style
  const isFree = platform.pricing === 'Free' || platform.pricing === 'Free Tier' || platform.pricing === 'Free with Student Pack';

  return (
    <div className="group relative bg-white rounded-xl border border-slate-200 hover:border-slate-400/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between p-5">
      
      {/* Top: Category Kicker & Bookmark Button */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          {/* Quiet text kicker instead of static pill badge */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="text-slate-700 font-semibold">{platform.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{platform.difficulty}</span>
          </div>

          <button
            onClick={() => onToggleSave(platform.id)}
            className="text-slate-400 hover:text-amber-500 p-1 rounded-md transition-colors"
            title={isSaved ? "Remove from saved" : "Save for my project"}
            aria-label={isSaved ? "Remove bookmark" : "Bookmark platform"}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'text-amber-500 fill-amber-500' : ''}`} />
          </button>
        </div>

        {/* Platform Name & Tagline */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
          <span>{platform.name}</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
          {platform.tagline}
        </p>

        {/* What it Specializes In */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Specialization
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {platform.specializesIn}
          </p>
        </div>

        {/* What Students Can Build With It */}
        <div className="mt-3.5">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
            <span>What Students Can Build</span>
            <span className="text-[10px] text-slate-400 font-normal lowercase">{platform.canBuild.length} ideas</span>
          </div>
          <ul className="space-y-1.5">
            {platform.canBuild.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                <span className="text-indigo-600 font-bold leading-tight mt-0.5">•</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Difficulty & Pricing Meta + Action Buttons */}
      <div className="mt-5 pt-3.5 border-t border-slate-100">
        
        {/* Unboxed Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
          
          {/* Difficulty Level with visual bars */}
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="font-medium text-[11px] text-slate-400 uppercase">Difficulty:</span>
            <div className="flex items-center gap-0.5" title={`Level: ${platform.difficulty}`}>
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`w-2 h-2 rounded-xs ${
                    step <= difficultyConfig.bars
                      ? step === 1 
                        ? 'bg-emerald-500' 
                        : step === 2 
                        ? 'bg-amber-500' 
                        : 'bg-rose-500'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-800">{platform.difficulty}</span>
          </div>

          {/* Pricing Status */}
          <div className="flex items-center gap-1">
            <span className="font-medium text-[11px] text-slate-400 uppercase">Pricing:</span>
            <span className={`text-xs font-semibold ${isFree ? 'text-emerald-700' : 'text-slate-800'}`}>
              {platform.pricing}
            </span>
          </div>
        </div>

        {/* Student Pack perk hint if available */}
        {platform.studentPerk && (
          <div className="text-[11px] text-emerald-800 bg-emerald-50/70 border border-emerald-100 rounded-md px-2 py-1 mb-3 flex items-start gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="line-clamp-1 font-medium">{platform.studentPerk}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Official Website Link */}
          <a
            href={platform.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors group/link"
          >
            <span>Official Website</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-slate-900 transition-colors" />
          </a>

          {/* Project & Viva Guide Modal Trigger */}
          <button
            onClick={() => onOpenDetails(platform)}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200/60 transition-colors"
            title="View BTech Project & Viva Guide"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Guide</span>
          </button>
        </div>

      </div>

    </div>
  );
};
