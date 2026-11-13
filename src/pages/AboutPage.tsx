import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Compass, Users, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { ABOUT_HIGHLIGHTS, BUSINESS_INFO, HERO_IMAGE } from '../data/business';

interface AboutPageProps {
  onOpenBooking: (initialService?: string) => void;
}

export function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <>
      <SeoHead
        title="About Us – AJR Tours and Travels | Thangachimadam & Rameswaram"
        description="Learn about AJR Tours and Travels in Thangachimadam, Tamil Nadu. Over 10 years of safe, comfortable, reliable vehicle rentals and customized tour services."
      />

      <section className="bg-navy-950 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            {BUSINESS_INFO.experience} of Service · {BUSINESS_INFO.cityRegion}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            About AJR Tours and Travels
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Your trusted local and outstation travel partner headquartered in Thangachimadam, Tamil Nadu, delivering safe, punctual, and comfortable road journeys across South India.
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
              {BUSINESS_INFO.tagline}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              AJR Tours and Travels is a trusted travel and vehicle rental service provider with over 10 years of experience. We offer a wide range of vehicles and travel solutions for individuals, families, businesses, educational institutions, and groups.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Our goal is to provide comfortable, safe, reliable, and affordable travel experiences for every customer. Whether you are arriving in Rameswaram for a sacred pilgrimage, planning a family holiday to Kerala and Ooty, or arranging institutional and corporate transport, our team coordinates every mile personally.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
              >
                Book Your Trip
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-10">
            Why Travellers Choose AJR Tours and Travels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_HIGHLIGHTS.map((item) => (
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
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-navy-900">Punctual Pickups</h3>
                <p className="text-xs text-slate-600 mt-1">Timely arrivals at railway stations, airports, hotels, and campuses.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-navy-900">Safety &amp; Maintenance</h3>
                <p className="text-xs text-slate-600 mt-1">Regularly inspected vehicles driven by experienced highway chauffeurs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-navy-900">Local &amp; Regional Knowledge</h3>
                <p className="text-xs text-slate-600 mt-1">Deep familiarity with Rameswaram, Tamil Nadu temples, and Kerala hills.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-navy-900">Bilingual Support</h3>
                <p className="text-xs text-slate-600 mt-1">Dedicated Hindi and English phone &amp; WhatsApp coordinators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
