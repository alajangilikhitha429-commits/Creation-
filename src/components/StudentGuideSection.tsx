import React, { useState } from 'react';
import { ChevronDown, HelpCircle, GraduationCap, CheckCircle2 } from 'lucide-react';

export const StudentGuideSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Will college external examiners accept No-Code or AI-assisted platforms for BTech projects?',
      a: 'It depends on your semester level and project scope. For 1st/2nd year mini projects, UI/UX courses, and hackathons, visual and AI builders (Bubble, FlutterFlow, v0) are widely accepted because the focus is on rapid problem-solving. For 4th year major capstones, professors look for architectural depth: if you use FlutterFlow or Lovable, always export the code, show your Git commit history, explain the database schema (ER diagram), and explain how custom backend APIs work.'
    },
    {
      q: 'What is the most recommended tech stack for CSE/IT Final Year Capstones?',
      a: 'The gold standard across universities is a decoupled Full-Stack architecture: Next.js or React + Tailwind CSS on the frontend, combined with a real PostgreSQL database (Supabase or Cloud SQL) and REST/GraphQL APIs. For mobile, Flutter (Dart) or React Native (Expo) earn top marks because you can run them directly on examiners\' phones.'
    },
    {
      q: 'How can our project group host and demo the project for $0?',
      a: 'You do not need to pay for hosting! Use Vercel or GitHub Pages for the web frontend, Supabase or Firebase Spark for the database, and Expo for mobile app live QR testing. All of these provide 100% free lifetime tiers for student projects.'
    },
    {
      q: 'How do we present these tools during our Viva Voce & Project Review?',
      a: 'Always prepare: (1) Architecture diagram showing Frontend, Backend, and Database layers, (2) Live working URL or Android APK, (3) Clean GitHub repository with meaningful commit messages from all team members, and (4) Explain why you picked this platform over alternatives.'
    }
  ];

  return (
    <section className="bg-slate-50/70 border-t border-slate-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>Academic Survival Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions by BTech Students
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Tips on project submissions, external viva evaluations, and free hosting
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:text-indigo-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
