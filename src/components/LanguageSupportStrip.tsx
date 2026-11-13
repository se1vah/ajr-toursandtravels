import { Phone, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

export function LanguageSupportStrip() {
  return (
    <section
      aria-label="Dedicated Hindi and English Booking Support"
      className="bg-navy-900 py-14 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Multilingual Travel Desk
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1 text-balance">
              Dedicated Hindi &amp; English Booking Support
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-xl">
            Speak directly with our booking coordinators in your preferred language for instant vehicle confirmation and custom route quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hindi Booking Support */}
          <div className="rounded-2xl bg-navy-800/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                Hindi Booking Support
              </p>
              <p className="font-display text-2xl font-bold text-white mt-2 tabular-nums">
                {BUSINESS_INFO.contacts.hindi.number}
              </p>
              <p className="text-sm text-slate-300 mt-2">
                {BUSINESS_INFO.contacts.hindi.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.contacts.hindi.telHref}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Hindi Desk
              </a>
              <a
                href={buildDirectWhatsAppUrl('hindi')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp Hindi
              </a>
            </div>
          </div>

          {/* English Booking Support */}
          <div className="rounded-2xl bg-navy-800/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                English Booking Support
              </p>
              <p className="font-display text-2xl font-bold text-white mt-2 tabular-nums">
                {BUSINESS_INFO.contacts.english.number}
              </p>
              <p className="text-sm text-slate-300 mt-2">
                {BUSINESS_INFO.contacts.english.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.contacts.english.telHref}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                Call English Desk
              </a>
              <a
                href={buildDirectWhatsAppUrl('english')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp English
              </a>
            </div>
          </div>

          {/* General Enquiries & Email */}
          <div className="rounded-2xl bg-navy-800/80 border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                General Enquiries &amp; Dispatch
              </p>
              <p className="font-display text-2xl font-bold text-white mt-2 tabular-nums">
                {BUSINESS_INFO.contacts.general.number}
              </p>
              <p className="text-sm text-slate-300 mt-2">
                {BUSINESS_INFO.contacts.general.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={BUSINESS_INFO.contacts.general.telHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-navy-900 px-4 py-2 text-xs font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                Call General
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
