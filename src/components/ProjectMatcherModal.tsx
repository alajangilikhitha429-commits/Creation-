import React, { useState } from 'react';
import { X, Sparkles, Compass, ArrowRight, RotateCcw, Check, ArrowUpRight } from 'lucide-react';
import { PLATFORMS_DATA } from '../data/platforms';
import { Platform } from '../types';

interface ProjectMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlatform: (platform: Platform) => void;
}

export const ProjectMatcherModal: React.FC<ProjectMatcherModalProps> = ({
  isOpen,
  onClose,
  onSelectPlatform,
}) => {
  const [stage, setStage] = useState<'mini' | 'hackathon' | 'capstone' | 'fest' | 'portfolio'>('capstone');
  const [codingComfort, setCodingComfort] = useState<'nocode' | 'intermediate' | 'advanced'>('intermediate');
  const [targetType, setTargetType] = useState<'web' | 'mobile' | 'dashboard' | 'landing'>('web');

  if (!isOpen) return null;

  // Recommendation logic based on student input
  const getRecommendations = (): Platform[] => {
    let matches = PLATFORMS_DATA.filter(p => {
      // Filter by target type
      if (targetType === 'mobile') {
        return p.category === 'app-dev' || p.id === 'flutterflow';
      }
      if (targetType === 'dashboard') {
        return p.id === 'retool' || p.id === 'appsmith' || p.id === 'supabase-stack' || p.id === 'nextjs-react';
      }
      if (targetType === 'landing') {
        return p.category === 'website-builders' || p.id === 'carrd' || p.id === 'framer' || p.id === 'v0-vercel';
      }
      // web general
      if (codingComfort === 'nocode') {
        return p.category === 'nocode-lowcode' || p.category === 'website-builders' || p.category === 'ai-builders';
      }
      return true;
    });

    // Score by stage
    if (stage === 'capstone') {
      matches = matches.filter(p => p.difficulty !== 'Beginner' || p.id === 'supabase-stack' || p.id === 'firebase-platform');
    } else if (stage === 'mini') {
      matches = matches.filter(p => p.difficulty === 'Beginner' || p.difficulty === 'Intermediate');
    } else if (stage === 'hackathon') {
      matches = matches.filter(p => p.category === 'ai-builders' || p.id === 'vercel-platform' || p.id === 'flutterflow' || p.id === 'replit');
    }

    // fallback if too strict
    if (matches.length === 0) {
      matches = PLATFORMS_DATA.slice(0, 4);
    }

    return matches.slice(0, 3);
  };

  const recommendations = getRecommendations();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Project Stack Matcher</h2>
              <p className="text-xs text-slate-500">Find the perfect tool for your college semester goals</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wizard Form */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Question 1: College Stage */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. What is your project context?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'mini', label: '1st/2nd Year Mini Project', sub: 'Fast results, low stress' },
                { id: 'hackathon', label: 'Hackathon Prototype', sub: '24-48h speed, instant demo' },
                { id: 'capstone', label: 'Final Year Major Capstone', sub: 'Architecture & viva focus' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setStage(item.id as any)}
                  className={`p-3 rounded-lg border text-left text-xs transition-all ${
                    stage === item.id
                      ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-semibold text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Coding Experience */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Your team's coding comfort level:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'nocode', label: 'No-Code / Visual', sub: 'Prefer drag-and-drop & AI' },
                { id: 'intermediate', label: 'Some Coding Knowledge', sub: 'Basic JS, Python, HTML/CSS' },
                { id: 'advanced', label: 'Full-Stack Developers', sub: 'Git, React, APIs, SQL' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCodingComfort(item.id as any)}
                  className={`p-3 rounded-lg border text-left text-xs transition-all ${
                    codingComfort === item.id
                      ? 'border-indigo-600 bg-indigo-50/60 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="font-semibold text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Output format */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. What format are you building?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'web', label: 'Web Application' },
                { id: 'mobile', label: 'Mobile App (APK)' },
                { id: 'dashboard', label: 'Admin / IoT Dashboard' },
                { id: 'landing', label: 'Showcase / Landing' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTargetType(item.id as any)}
                  className={`p-2.5 rounded-lg border text-center text-xs font-medium transition-all ${
                    targetType === item.id
                      ? 'border-indigo-600 bg-indigo-50/60 text-indigo-900 ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recommendations Result Card */}
          <div className="mt-6 pt-5 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Recommended Platforms for Your Setup</span>
              </span>
              <span className="text-[11px] text-slate-500">{recommendations.length} matched</span>
            </div>

            <div className="space-y-2.5">
              {recommendations.map((plat) => (
                <div
                  key={plat.id}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50/50 hover:bg-indigo-50/20 transition-all flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{plat.name}</span>
                      <span className="text-[11px] text-slate-500">· {plat.categoryName}</span>
                    </div>
                    <p className="text-xs text-slate-600 truncate mt-0.5">
                      {plat.specializesIn}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                      <span>Difficulty: <strong className="text-slate-700">{plat.difficulty}</strong></span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">{plat.pricing}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectPlatform(plat);
                      }}
                      className="px-3 py-1.5 text-xs font-medium bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-800 transition-colors"
                    >
                      View Guide
                    </button>
                    <a
                      href={plat.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
                      title="Visit official site"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-lg"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
