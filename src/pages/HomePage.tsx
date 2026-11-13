import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { QuickBookingForm } from '../components/QuickBookingForm';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { BUSINESS_INFO, HERO_IMAGE } from '../data/business';
import { TRIP_CATEGORIES, TripCategoryGroup } from '../data/tripCategories';
import { TOUR_PACKAGES } from '../data/tourPackages';
import { VEHICLE_CATEGORIES } from '../data/vehicles';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onOpenBooking: (initialService?: string) => void;
}

const CATEGORY_GROUPS: TripCategoryGroup[] = [
  'All',
  'Point-to-Point',
  'Rentals & Time-Based',
  'Tours & Occasions',
];

export function HomePage({ onOpenBooking }: HomePageProps) {
  const [selectedGroup, setSelectedGroup] = useState<TripCategoryGroup>('All');
  const { t } = useLanguage();

  const filteredCategories =
    selectedGroup === 'All'
      ? TRIP_CATEGORIES
      : TRIP_CATEGORIES.filter((cat) => cat.group === selectedGroup);

  return (
    <>
      <SeoHead
        title={t.home.seoTitle}
        description={t.home.seoDescription}
      />

      {/* Hero Section */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage
            src={HERO_IMAGE}
            alt="Touring SUV crossing coastal sea bridge near Rameswaram at golden hour"
            loading="eager"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-28 sm:pt-24 sm:pb-32">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold text-orange-400 tracking-wide flex flex-wrap items-center gap-2">
              <span>{t.brand.experienceBadge}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                {t.brand.cityRegion}
              </span>
            </p>

            <h1 className="font-display mt-4 text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white text-balance">
              {t.brand.tagline}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              {t.brand.subTagline}
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              {t.home.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                {t.nav.bookNow}
              </button>
              <Link
                to="/tour-packages"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 backdrop-blur-xs px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors whitespace-nowrap"
              >
                <span>{t.home.explorePackages}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Direct Language Booking Contact Numbers */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-200">
              <a
                href={BUSINESS_INFO.contacts.hindi.telHref}
                className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                <span>
                  {t.contacts.hindiShort}: <strong className="text-white">{BUSINESS_INFO.contacts.hindi.number}</strong>
                </span>
              </a>
              <span aria-hidden="true" className="hidden sm:inline text-white/30">|</span>
              <a
                href={BUSINESS_INFO.contacts.english.telHref}
                className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                <span>
                  {t.contacts.englishShort}: <strong className="text-white">{BUSINESS_INFO.contacts.english.number}</strong>
                </span>
              </a>
              <span aria-hidden="true" className="hidden sm:inline text-white/30">|</span>
              <a
                href={BUSINESS_INFO.contacts.general.telHref}
                className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                <span>
                  {t.contacts.generalShort}: <strong className="text-white">{BUSINESS_INFO.contacts.general.number}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Enquiry Widget */}
      <QuickBookingForm />

      {/* About Us Section */}
      <section className="py-20 bg-white mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.home.aboutKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 mt-2 text-balance">
                {t.home.aboutHeading}
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                {t.home.aboutP1}
              </p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {t.home.aboutP2}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
                >
                  <span>{t.home.readStory}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                >
                  {t.home.planJourney}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
              {t.aboutHighlights.map((item) => (
                <div key={item.number} className="py-5 flex items-start gap-5">
                  <span className="font-display text-sm font-bold text-orange-600 tabular-nums pt-0.5 shrink-0">
                    {item.number}.
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All 16 Trip Categories Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.home.tripCategoriesKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 mt-1 text-balance">
                {t.home.tripCategoriesHeading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                {t.home.tripCategoriesSub}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl w-fit">
              {CATEGORY_GROUPS.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    selectedGroup === group
                      ? 'bg-white text-navy-900 shadow-xs'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {t.tripCategoriesPage.groupTabs[group]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((cat) => {
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
                      <h3 className="font-display text-lg font-bold text-navy-900 mt-1">
                        {name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {shortDescription}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(name)}
                        className="w-full rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors whitespace-nowrap"
                      >
                        {t.nav.bookNow}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/trip-categories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-orange-600 transition-colors"
            >
              <span>{t.home.openCategoriesPage}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.home.packagesKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 mt-1 text-balance">
                {t.home.packagesHeading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                {t.home.packagesSub}
              </p>
            </div>
            <Link
              to="/tour-packages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap"
            >
              <span>{t.home.viewAllPackages}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOUR_PACKAGES.map((pkg) => {
              const loc = t.tourPackages[pkg.slug];
              const name = loc?.name ?? pkg.name;
              const shortDescription = loc?.shortDescription ?? pkg.shortDescription;
              const popularDestinations = loc?.popularDestinations ?? pkg.popularDestinations;
              const alt = loc?.alt ?? pkg.alt;

              return (
                <article
                  key={pkg.slug}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-300 transition-colors"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={pkg.image}
                      alt={alt}
                      fallbackLabel={name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-500 truncate">
                        {popularDestinations.slice(0, 3).join(' · ')}
                      </p>
                      <h3 className="font-display text-lg font-bold text-navy-900 mt-1 text-balance">
                        {name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {shortDescription}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                      <Link
                        to={`/tour-packages/${pkg.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-navy-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
                      >
                        {t.home.viewDetails}
                      </Link>
                      <button
                        type="button"
                        onClick={() => onOpenBooking(name)}
                        className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
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

      {/* Our Vehicles Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.home.vehiclesKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-900 mt-1 text-balance">
                {t.home.vehiclesHeading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                {t.home.vehiclesSub}
              </p>
            </div>
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap"
            >
              <span>{t.home.exploreFleet}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEHICLE_CATEGORIES.map((vehicle) => {
              const loc = t.vehicles[vehicle.id];
              const name = loc?.name ?? vehicle.name;
              const groupLabel = loc?.groupLabel ?? vehicle.group;
              const description = loc?.description ?? vehicle.description;
              const alt = loc?.alt ?? vehicle.alt;

              return (
                <article
                  key={vehicle.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <SafeImage
                      src={vehicle.image}
                      alt={alt}
                      fallbackLabel={name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-500">{groupLabel}</p>
                      <h3 className="font-display text-lg font-bold text-navy-900 mt-1">
                        {name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {description}
                      </p>
                      {vehicle.confirmedCapacity && (
                        <p className="mt-2 text-xs font-medium text-navy-900">
                          {t.home.capacityLabel} {vehicle.confirmedCapacity}
                        </p>
                      )}
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => onOpenBooking(name)}
                        className="w-full rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors whitespace-nowrap"
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
