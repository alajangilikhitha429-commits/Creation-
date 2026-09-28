import React from 'react';
import { 
  X, 
  ExternalLink, 
  Bookmark, 
  GraduationCap, 
  Lightbulb, 
  CheckCircle2, 
  Award,
  Layers, 
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { Platform } from '../types';

interface PlatformDetailModalProps {
  platform: Platform | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const PlatformDetailModal: React.FC<PlatformDetailModalProps> = ({
  platform,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  if (!platform) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span className="font-semibold text-slate-700">{platform.categoryName}</span>
              <span aria-hidden="true">·</span>
              <span>{platform.difficulty} Difficulty</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-emerald-700">{platform.pricing}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {platform.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {platform.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleSave(platform.id)}
              className={`p-2 rounded-lg border transition-colors ${
                isSaved 
                  ? 'bg-amber-50 border-amber-200 text-amber-600' 
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700'
              }`}
              title={isSaved ? "Saved" : "Save for project"}
              aria-label={isSaved ? "Saved to project" : "Save platform"}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Specialization */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Core Specialization
            </h4>
            <p className="text-sm text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
              {platform.specializesIn}
            </p>
          </div>

          {/* What Students Can Build */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              What Students Can Build
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {platform.canBuild.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50/60 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Viva & Project Presentation Tips */}
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>BTech Project Viva & Presentation Talking Points</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
              {platform.popularForViva}
            </p>
          </div>

          {/* Sample Project Ideas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Ready College Project Ideas Using {platform.name}</span>
            </h4>
            <ul className="space-y-1.5">
              {platform.sampleProjectIdeas.map((idea, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Student Perks */}
          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Pricing & Student Eligibility</span>
            </h4>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div>
                <span className="font-semibold text-slate-900">Plan Structure: </span>
                {platform.pricingDetails}
              </div>
              {platform.studentPerk && (
                <div className="text-emerald-800 font-medium">
                  <span className="font-semibold">Student Perk: </span>
                  {platform.studentPerk}
                </div>
              )}
            </div>
          </div>

          {/* Why it’s great for students */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Advantages for Engineering Students
            </h4>
            <div className="space-y-1.5">
              {platform.prosForStudents.map((pro, idx) => (
                <div key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{pro}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/70 flex items-center justify-between gap-3">
          {platform.docsUrl ? (
            <a
              href={platform.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Documentation</span>
            </a>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Close
            </button>
            <a
              href={platform.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
            >
              <span>Visit Official Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
