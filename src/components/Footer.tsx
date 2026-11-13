import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/trip-categories', label: 'Trip Categories' },
  { to: '/tour-packages', label: 'Tour Packages' },
  { to: '/vehicles', label: 'Our Vehicles' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Trusted travel and vehicle rental partner in Thangachimadam &amp; Rameswaram with{' '}
              {BUSINESS_INFO.experience} of experience serving pilgrims, families, institutions, and corporate travellers.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Language Booking Desks */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Language Booking Desks
            </h3>
            <div className="space-y-4 text-sm">
              <div className="rounded-xl bg-navy-900 border border-navy-800 p-3.5">
                <p className="text-xs font-semibold text-orange-400">Hindi Booking Support</p>
                <a
                  href={BUSINESS_INFO.contacts.hindi.telHref}
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400 tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                  {BUSINESS_INFO.contacts.hindi.number}
                </a>
                <div className="mt-2">
                  <a
                    href={buildDirectWhatsAppUrl('hindi')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    WhatsApp Hindi Desk
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-navy-900 border border-navy-800 p-3.5">
                <p className="text-xs font-semibold text-orange-400">English Booking Support</p>
                <a
                  href={BUSINESS_INFO.contacts.english.telHref}
                  className="mt-1 inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400 tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
                  {BUSINESS_INFO.contacts.english.number}
                </a>
                <div className="mt-2">
                  <a
                    href={buildDirectWhatsAppUrl('english')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    WhatsApp English Desk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: General Contact & Address */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="block text-xs text-slate-400">General Enquiries</span>
                <a
                  href={BUSINESS_INFO.contacts.general.telHref}
                  className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400 tabular-nums mt-0.5"
                >
                  <Phone className="w-4 h-4 text-orange-400" aria-hidden="true" />
                  {BUSINESS_INFO.contacts.general.number}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-400">Email</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="inline-flex items-center gap-2 font-medium text-white hover:text-orange-400 mt-0.5 break-all"
                >
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-400">Office Address</span>
                <p className="text-slate-300 mt-0.5">{BUSINESS_INFO.address}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AJR Tours and Travels. All Rights Reserved.</p>
          <p>{BUSINESS_INFO.cityRegion}</p>
        </div>
      </div>
    </footer>
  );
}
