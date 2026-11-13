import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Phone, MessageCircle, Car } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { TOUR_PACKAGES } from '../data/tourPackages';
import { BUSINESS_INFO } from '../data/business';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface PackageDetailPageProps {
  onOpenBooking: (initialService?: string) => void;
}

export function PackageDetailPage({ onOpenBooking }: PackageDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const pkg = TOUR_PACKAGES.find((item) => item.slug === slug);

  if (!pkg) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-navy-900">
            {t.packageDetailPage.notFoundTitle}
          </h1>
          <p className="mt-3 text-slate-600">
            {t.packageDetailPage.notFoundDesc}
          </p>
          <Link
            to="/tour-packages"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.packageDetailPage.backToPackages}
          </Link>
        </div>
      </section>
    );
  }

  const loc = t.tourPackages[pkg.slug];
  const name = loc?.name ?? pkg.name;
  const shortDescription = loc?.shortDescription ?? pkg.shortDescription;
  const fullDescription = loc?.fullDescription ?? pkg.fullDescription;
  const popularDestinations = loc?.popularDestinations ?? pkg.popularDestinations;
  const recommendedVehicles = loc?.recommendedVehicles ?? pkg.recommendedVehicles;
  const highlights = loc?.highlights ?? pkg.highlights;
  const alt = loc?.alt ?? pkg.alt;

  return (
    <>
      <SeoHead
        title={`${name} | ${t.brand.name}`}
        description={`${shortDescription} ${popularDestinations.join(', ')}.`}
      />

      <section className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-orange-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.packageDetailPage.allPackagesLink}
          </Link>
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            {t.packageDetailPage.kicker}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            {name}
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            {popularDestinations.join(' · ')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage src={pkg.image} alt={alt} loading="eager" />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {t.packageDetailPage.overviewHeading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {fullDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                {t.packageDetailPage.highlightsHeading}
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-base font-bold text-navy-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  {t.packageDetailPage.destinationsHeading}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {popularDestinations.map((dest) => (
                    <li key={dest}>{dest}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-navy-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-orange-600" />
                  {t.packageDetailPage.vehiclesHeading}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {recommendedVehicles.map((veh) => (
                    <li key={veh}>{veh}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Booking Sidebar */}
          <aside className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.packageDetailPage.sidebarKicker}
              </p>
              <h2 className="font-display text-2xl font-bold text-navy-900 mt-1">
                {t.packageDetailPage.sidebarTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {t.packageDetailPage.sidebarDesc}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(name)}
              className="w-full rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              {t.packageDetailPage.requestQuoteBtn}
            </button>

            <div className="pt-5 border-t border-slate-200 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t.packageDetailPage.directSupportHeading}
              </p>

              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-orange-600">{t.contacts.hindiLabel}</p>
                  <a
                    href={BUSINESS_INFO.contacts.hindi.telHref}
                    className="font-display text-base font-bold text-navy-900 hover:text-orange-600 tabular-nums"
                  >
                    {BUSINESS_INFO.contacts.hindi.number}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.contacts.hindi.telHref}
                    aria-label={t.contacts.callHindi}
                    className="p-2.5 rounded-lg bg-slate-100 text-navy-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildDirectWhatsAppUrl('hindi', `Namaste ${BUSINESS_INFO.name}, mujhe ${pkg.name} ke liye quote chahiye.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.contacts.whatsappHindi}
                    className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-orange-600">{t.contacts.englishLabel}</p>
                  <a
                    href={BUSINESS_INFO.contacts.english.telHref}
                    className="font-display text-base font-bold text-navy-900 hover:text-orange-600 tabular-nums"
                  >
                    {BUSINESS_INFO.contacts.english.number}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.contacts.english.telHref}
                    aria-label={t.contacts.callEnglish}
                    className="p-2.5 rounded-lg bg-slate-100 text-navy-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildDirectWhatsAppUrl('english', `Hello ${BUSINESS_INFO.name}, I would like a quote for ${pkg.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.contacts.whatsappEnglish}
                    className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
