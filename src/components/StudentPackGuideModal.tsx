import React from 'react';
import { X, GraduationCap, CheckCircle2, ExternalLink, ArrowUpRight, Gift, ShieldAlert } from 'lucide-react';

interface StudentPackGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPackGuideModal: React.FC<StudentPackGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const perks = [
    {
      title: 'GitHub Student Developer Pack',
      provider: 'GitHub & 100+ Partners',
      benefit: 'Free GitHub Pro, GitHub Copilot, free custom domains from Namecheap/Name.com, free Heroku/DigitalOcean/Azure credits, free Canva Pro, Termius, and Datadog.',
      link: 'https://education.github.com/pack'
    },
    {
      title: 'Webflow for Education',
      provider: 'Webflow',
      benefit: '100% Free 1-year CMS site plan for accredited engineering students. Perfect for departmental fest or personal portfolio.',
      link: 'https://webflow.com/classroom'
    },
    {
      title: 'Vercel Hobby & Student Deployments',
      provider: 'Vercel',
      benefit: 'Free SSL, unlimited preview deployments, serverless functions, and Git continuous integration for student repositories.',
      link: 'https://vercel.com/pricing'
    },
    {
      title: 'Google Cloud & Firebase Spark Tier',
      provider: 'Google',
      benefit: 'Free lifetime Spark plan with 50k Firestore daily reads, 1GB storage, Google OAuth authentication, and free hosting.',
      link: 'https://firebase.google.com/pricing'
    },
    {
      title: 'JetBrains Student License',
      provider: 'JetBrains',
      benefit: 'Free access to IntelliJ IDEA Ultimate, WebStorm, PyCharm Pro, CLion, and Android Studio plugins for all enrolled BTech students.',
      link: 'https://www.jetbrains.com/community/education/#students'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-emerald-50/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Free Perks for BTech Students</h2>
              <p className="text-xs text-slate-600">Claim over $1,000 in free software tools with your college ID</p>
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

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* How to qualify */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
            <div className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-indigo-600" />
              <span>How BTech Students Can Claim Everything for Free</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed text-slate-600">
              <li>
                <strong>College Email ID:</strong> If your university provides a <code className="bg-white px-1 py-0.5 rounded border border-slate-200">@college.edu</code> or <code className="bg-white px-1 py-0.5 rounded border border-slate-200">@inst.ac.in</code> email, use it as your primary email.
              </li>
              <li>
                <strong>College ID Card:</strong> If your college does not provide an email, a clear photo of your student physical ID card with the valid current academic year works on GitHub Education.
              </li>
              <li>
                <strong>Proof of Enrollment:</strong> Current fee receipt or bonafide certificate can also be uploaded if asked.
              </li>
            </ol>
          </div>

          {/* Perks list */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Top Student Packs to Claim
            </h4>

            {perks.map((p, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h5 className="font-bold text-sm text-slate-900">{p.title}</h5>
                    <p className="text-[11px] text-indigo-600 font-semibold">{p.provider}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{p.benefit}</p>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <span>Claim</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-lg"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
};
