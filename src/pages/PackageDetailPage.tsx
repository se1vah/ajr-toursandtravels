import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, MapPin, Phone, MessageCircle, Car } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { TOUR_PACKAGES } from '../data/tourPackages';
import { BUSINESS_INFO } from '../data/business';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface PackageDetailPageProps {
  onOpenBooking: (initialService?: string) => void;
}

export function PackageDetailPage({ onOpenBooking }: PackageDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const pkg = TOUR_PACKAGES.find((item) => item.slug === slug);

  if (!pkg) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-navy-900">Package Not Found</h1>
          <p className="mt-3 text-slate-600">
            The tour package you requested could not be found. Browse all available customized packages below.
          </p>
          <Link
            to="/tour-packages"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tour Packages
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SeoHead
        title={`${pkg.name} – Customized Tours | AJR Tours and Travels`}
        description={`${pkg.shortDescription} Popular destinations: ${pkg.popularDestinations.join(', ')}. Contact AJR Tours and Travels for a personalized quote.`}
      />

      <section className="bg-navy-950 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/tour-packages"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-orange-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Tour Packages
          </Link>
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Customized Package Details · Quote on Request
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            {pkg.name}
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            {pkg.popularDestinations.join(' · ')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage src={pkg.image} alt={pkg.alt} loading="eager" />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Package Overview
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {pkg.fullDescription}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                What to Expect
              </h2>
              <ul className="space-y-3">
                {pkg.highlights.map((highlight) => (
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
                  Popular Destinations
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {pkg.popularDestinations.map((dest) => (
                    <li key={dest}>{dest}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-navy-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-orange-600" />
                  Suitable Vehicle Categories
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {pkg.recommendedVehicles.map((veh) => (
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
                Customized Quotation
              </p>
              <h2 className="font-display text-2xl font-bold text-navy-900 mt-1">
                Request Your Custom Itinerary
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pricing depends on your travel dates, pickup location, route duration, and chosen vehicle category. Speak directly with our team for an accurate quote.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(pkg.name)}
              className="w-full rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              Book Now / Request Quote
            </button>

            <div className="pt-5 border-t border-slate-200 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Direct Language Support
              </p>

              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-orange-600">Hindi Booking Support</p>
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
                    aria-label="Call Hindi Booking Support"
                    className="p-2.5 rounded-lg bg-slate-100 text-navy-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildDirectWhatsAppUrl('hindi', `Namaste ${BUSINESS_INFO.name}, mujhe ${pkg.name} ke liye quote chahiye.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Hindi Booking Support"
                    className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-orange-600">English Booking Support</p>
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
                    aria-label="Call English Booking Support"
                    className="p-2.5 rounded-lg bg-slate-100 text-navy-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href={buildDirectWhatsAppUrl('english', `Hello ${BUSINESS_INFO.name}, I would like a quote for ${pkg.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp English Booking Support"
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
