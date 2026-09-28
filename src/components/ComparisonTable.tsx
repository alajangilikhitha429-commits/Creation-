import React from 'react';
import { ExternalLink, Bookmark, ArrowUpRight, BookOpen } from 'lucide-react';
import { Platform } from '../types';

interface ComparisonTableProps {
  platforms: Platform[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenDetails: (platform: Platform) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  platforms,
  savedIds,
  onToggleSave,
  onOpenDetails,
}) => {
  if (platforms.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-xl border border-slate-200">
        <p className="text-slate-500 text-sm">No platforms matched your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">Platform</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">What it Specializes In</th>
              <th className="py-3 px-4">What Students Can Build</th>
              <th className="py-3 px-4">Difficulty</th>
              <th className="py-3 px-4">Pricing</th>
              <th className="py-3 px-4 text-right">Links</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {platforms.map((platform) => {
              const isSaved = savedIds.includes(platform.id);
              return (
                <tr 
                  key={platform.id}
                  className="hover:bg-slate-50/60 transition-colors group"
                >
                  {/* Name */}
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleSave(platform.id)}
                        className="text-slate-300 hover:text-amber-500"
                        title={isSaved ? "Saved" : "Save"}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-amber-500 fill-amber-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => onOpenDetails(platform)}
                        className="hover:text-indigo-600 text-left font-bold text-slate-900 transition-colors"
                      >
                        {platform.name}
                      </button>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">
                    {platform.categoryName}
                  </td>

                  {/* Specialization */}
                  <td className="py-3.5 px-4 max-w-xs text-slate-600">
                    <p className="line-clamp-2">{platform.specializesIn}</p>
                  </td>

                  {/* What students can build */}
                  <td className="py-3.5 px-4 max-w-sm text-slate-600">
                    <ul className="space-y-0.5">
                      {platform.canBuild.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="line-clamp-1 text-[11px]">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Difficulty */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className={`inline-block font-semibold ${
                      platform.difficulty === 'Beginner'
                        ? 'text-emerald-700'
                        : platform.difficulty === 'Intermediate'
                        ? 'text-amber-700'
                        : 'text-rose-700'
                    }`}>
                      {platform.difficulty}
                    </span>
                  </td>

                  {/* Pricing */}
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-semibold text-slate-800">
                      {platform.pricing}
                    </div>
                    {platform.studentPerk && (
                      <div className="text-[10px] text-emerald-600 font-medium">
                        Student perk available
                      </div>
                    )}
                  </td>

                  {/* Official Website Link */}
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onOpenDetails(platform)}
                        className="p-1.5 text-indigo-700 hover:bg-indigo-50 rounded"
                        title="View Guide & Viva Tips"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={platform.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-slate-800 bg-slate-100 hover:bg-slate-200 rounded font-medium transition-colors"
                      >
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500" />
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
