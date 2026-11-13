import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Compass, Users, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { HERO_IMAGE } from '../data/business';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenBooking: (initialService?: string) => void;
}

const PILLAR_ICONS = [Clock, ShieldCheck, Compass, Users] as const;

export function AboutPage({ onOpenBooking }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <>
      <SeoHead
        title={t.aboutPage.seoTitle}
        description={t.aboutPage.seoDescription}
      />

      <section className="bg-navy-950 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            {t.aboutPage.kicker}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {t.aboutPage.heroSub}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-16/10 rounded-2xl overflow-hidden border border-slate-200">
              <SafeImage
                src={HERO_IMAGE}
                alt="AJR Tours and Travels coastal highway journey near Rameswaram"
                loading="eager"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 text-balance">
              {t.brand.tagline}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.aboutPage.p1}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.aboutPage.p2}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
              >
                {t.aboutPage.bookTrip}
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
              >
                <span>{t.aboutPage.contactTeam}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-10">
            {t.aboutPage.whyHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.aboutHighlights.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white border border-slate-200 p-6"
              >
                <span className="font-display text-sm font-bold text-orange-600 tabular-nums">
                  {item.number}.
                </span>
                <h3 className="font-display text-lg font-bold text-navy-900 mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
            {t.aboutPage.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <div key={pillar.title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-navy-900">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 mt-1">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
