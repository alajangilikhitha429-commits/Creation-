import React from 'react';
import { X, Trash2, ArrowUpRight, BookOpen, BookmarkCheck } from 'lucide-react';
import { Platform } from '../types';

interface SavedDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedPlatforms: Platform[];
  onRemoveSaved: (id: string) => void;
  onClearAll: () => void;
  onOpenDetails: (platform: Platform) => void;
}

export const SavedDrawerModal: React.FC<SavedDrawerModalProps> = ({
  isOpen,
  onClose,
  savedPlatforms,
  onRemoveSaved,
  onClearAll,
  onOpenDetails,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Your Project Shortlist</h2>
              <p className="text-xs text-slate-500">
                {savedPlatforms.length} {savedPlatforms.length === 1 ? 'platform' : 'platforms'} bookmarked for your team
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedPlatforms.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {savedPlatforms.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-500 text-sm">No platforms saved yet.</p>
              <p className="text-xs text-slate-400 mt-1">
                Click the bookmark icon on any card to save platforms for your project presentation.
              </p>
            </div>
          ) : (
            savedPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{platform.name}</span>
                    <span className="text-[11px] text-slate-500">· {platform.categoryName}</span>
                  </div>
                  <p className="text-xs text-slate-600 truncate mt-0.5">
                    {platform.specializesIn}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                    <span>Difficulty: <strong className="text-slate-700">{platform.difficulty}</strong></span>
                    <span>·</span>
                    <span className="text-emerald-700 font-semibold">{platform.pricing}</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetails(platform);
                    }}
                    className="p-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
                    title="View Guide"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>
                  <a
                    href={platform.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
                    title="Visit Official Website"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onRemoveSaved(platform.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Saved in your browser for team review
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
