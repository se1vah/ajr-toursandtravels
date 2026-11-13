import { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { TRIP_CATEGORIES, TripCategoryGroup } from '../data/tripCategories';
import { useLanguage } from '../context/LanguageContext';

interface TripCategoriesPageProps {
  onOpenBooking: (initialService?: string) => void;
}

const GROUPS: TripCategoryGroup[] = [
  'All',
  'Point-to-Point',
  'Rentals & Time-Based',
  'Tours & Occasions',
];

export function TripCategoriesPage({ onOpenBooking }: TripCategoriesPageProps) {
  const [activeGroup, setActiveGroup] = useState<TripCategoryGroup>('All');
  const { t } = useLanguage();

  const visibleCategories =
    activeGroup === 'All'
      ? TRIP_CATEGORIES
      : TRIP_CATEGORIES.filter((cat) => cat.group === activeGroup);

  return (
    <>
      <SeoHead
        title={t.tripCategoriesPage.seoTitle}
        description={t.tripCategoriesPage.seoDescription}
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            {t.tripCategoriesPage.kicker}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            {t.tripCategoriesPage.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {t.tripCategoriesPage.heroSub}
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              {GROUPS.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setActiveGroup(group)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeGroup === group
                      ? 'bg-white text-navy-900 shadow-xs'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {t.tripCategoriesPage.groupTabs[group]}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-600 tabular-nums">
              {t.tripCategoriesPage.showingPrefix} {visibleCategories.length}{' '}
              {t.tripCategoriesPage.showingOf} {TRIP_CATEGORIES.length}{' '}
              {t.tripCategoriesPage.showingSuffix}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleCategories.map((cat) => {
              const loc = t.tripCategories[cat.id];
              const name = loc?.name ?? cat.name;
              const groupLabel = loc?.groupLabel ?? cat.group;
              const shortDescription = loc?.shortDescription ?? cat.shortDescription;
              const alt = loc?.alt ?? cat.alt;

              return (
                <article
                  key={cat.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-300 transition-colors"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={cat.image}
                      alt={alt}
                      fallbackLabel={name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-500">{groupLabel}</p>
                      <h2 className="font-display text-lg font-bold text-navy-900 mt-1">
                        {name}
                      </h2>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {shortDescription}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(name)}
                        className="w-full rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                      >
                        {t.nav.bookNow}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
