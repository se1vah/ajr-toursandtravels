import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SiteLanguage } from '../i18n/types';

interface HeaderProps {
  onOpenBooking: (initialService?: string) => void;
}

const LANGUAGE_OPTIONS: Array<{ value: SiteLanguage; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi (हिन्दी)' },
  { value: 'ta', label: 'Tamil (தமிழ்)' },
  { value: 'ml', label: 'Malayalam (മലയാളം)' },
  { value: 'te', label: 'Telugu (తెలుగు)' },
];

export function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/trip-categories', label: t.nav.tripCategories },
    { to: '/tour-packages', label: t.nav.tourPackages },
    { to: '/vehicles', label: t.nav.vehicles },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 lg:gap-4">
        {/* Zone 1: Brand wordmark */}
        <Link
          to="/"
          className="font-display text-base sm:text-lg font-bold tracking-tight text-navy-900 whitespace-nowrap shrink-0 truncate max-w-[175px] sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
        >
          {t.brand.name}
        </Link>

        {/* Zone 2: Desktop single-line navigation links + Language dropdown next to Contact Us */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[13px] xl:text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                  isActive
                    ? 'border-orange-600 text-navy-900 font-semibold'
                    : 'border-transparent hover:text-navy-900 hover:border-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Language Dropdown directly next to Contact Us */}
          <div className="relative inline-flex items-center shrink-0 pl-1">
            <Globe
              className="w-3.5 h-3.5 text-orange-600 pointer-events-none absolute left-3"
              aria-hidden="true"
            />
            <select
              aria-label={t.nav.languageLabel}
              value={language}
              onChange={(e) => setLanguage(e.target.value as SiteLanguage)}
              className="rounded-lg border border-slate-300 bg-slate-50 pl-7 pr-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-navy-900 hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </nav>

        {/* Zone 3: Book Now + Mobile Language / Menu controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Compact Language Dropdown for tablet/mobile */}
          <div className="relative inline-flex items-center lg:hidden shrink-0">
            <Globe
              className="w-3.5 h-3.5 text-orange-600 pointer-events-none absolute left-2.5"
              aria-hidden="true"
            />
            <select
              aria-label={t.nav.languageLabel}
              value={language}
              onChange={(e) => setLanguage(e.target.value as SiteLanguage)}
              className="rounded-lg border border-slate-300 bg-slate-50 pl-7 pr-2 py-1.5 text-xs font-semibold text-navy-900 hover:border-orange-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer"
            >
              {LANGUAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {t.nav.bookNow}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-navy-900 hover:bg-slate-50 transition-colors min-w-[44px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-orange-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between gap-3 px-2">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-600" aria-hidden="true" />
                {t.nav.languageLabel}
              </span>
              <select
                aria-label={t.nav.languageLabel}
                value={language}
                onChange={(e) => setLanguage(e.target.value as SiteLanguage)}
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-navy-900"
              >
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
