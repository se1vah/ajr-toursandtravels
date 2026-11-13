import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { TOUR_PACKAGES } from '../data/tourPackages';

interface TourPackagesPageProps {
  onOpenBooking: (initialService?: string) => void;
}

export function TourPackagesPage({ onOpenBooking }: TourPackagesPageProps) {
  return (
    <>
      <SeoHead
        title="Tour Packages – Rameswaram, Kerala, Ooty, Kodaikanal & Munnar | AJR Tours and Travels"
        description="Browse customized tour packages from AJR Tours and Travels: Honeymoon, Family, School & College Trips, Industrial Visits, Corporate, Wedding Guest Transport, and Kerala/Ooty/Kodaikanal/Munnar tours."
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Tailor-Made Itineraries · Custom Quotations
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            Tour Packages
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Every package is customized around your travel dates, pickup location, passenger count, and vehicle preference. Contact our team for a personalized quotation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {TOUR_PACKAGES.map((pkg) => (
              <article
                key={pkg.slug}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-300 transition-colors"
              >
                <div className="aspect-4/3 overflow-hidden bg-slate-100">
                  <SafeImage
                    src={pkg.image}
                    alt={pkg.alt}
                    fallbackLabel={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      {pkg.popularDestinations.slice(0, 4).join(' · ')}
                    </p>
                    <h2 className="font-display text-xl font-bold text-navy-900 mt-1.5 text-balance">
                      {pkg.name}
                    </h2>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {pkg.shortDescription}
                    </p>
                    <p className="mt-3 text-xs font-medium text-orange-700">
                      Contact us for a customized quotation
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <Link
                      to={`/tour-packages/${pkg.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-navy-900 hover:bg-slate-50 transition-colors whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(pkg.name)}
                      className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
