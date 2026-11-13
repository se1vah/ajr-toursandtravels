import React, { useEffect, useMemo, useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, BookingLanguage } from '../data/business';
import { TRIP_CATEGORIES } from '../data/tripCategories';
import { TOUR_PACKAGES } from '../data/tourPackages';
import { VEHICLE_CATEGORIES } from '../data/vehicles';
import { buildWhatsAppUrl, getWhatsAppNumberForLanguage } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export function BookingModal({ isOpen, initialService = '', onClose }: BookingModalProps) {
  const { t } = useLanguage();

  const serviceOptions = useMemo(
    () => [
      ...TRIP_CATEGORIES.map((c) => t.tripCategories[c.id]?.name ?? c.name),
      ...TOUR_PACKAGES.map((p) => t.tourPackages[p.slug]?.name ?? p.name),
      ...VEHICLE_CATEGORIES.map((v) => t.vehicles[v.id]?.name ?? v.name),
    ],
    [t],
  );

  const defaultService = serviceOptions[0] ?? 'One Way Trip';

  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [serviceName, setServiceName] = useState(initialService || defaultService);
  const [pickupLocation, setPickupLocation] = useState(t.brand.cityRegion);
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('2');
  const [preferredLanguage, setPreferredLanguage] = useState<BookingLanguage>('English');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setServiceName(initialService);
    } else {
      setServiceName(defaultService);
    }
  }, [initialService, defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    setError(null);
    setSubmittedUrl(null);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!customerName.trim()) {
      setError(t.bookingModal.errName);
      return;
    }
    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError(t.bookingModal.errPhone);
      return;
    }
    if (!pickupLocation.trim() || !destination.trim()) {
      setError(t.bookingModal.errRoute);
      return;
    }
    if (!travelDate) {
      setError(t.bookingModal.errDate);
      return;
    }

    const whatsappUrl = buildWhatsAppUrl({
      customerName,
      mobileNumber,
      serviceName,
      pickupLocation,
      destination,
      travelDate,
      passengers,
      preferredLanguage,
      additionalRequirements,
    });

    setSubmittedUrl(whatsappUrl);
    window.location.assign(whatsappUrl);
  };

  const selectedSupport =
    preferredLanguage === 'Hindi'
      ? BUSINESS_INFO.contacts.hindi
      : BUSINESS_INFO.contacts.english;

  const selectedSupportLabel =
    preferredLanguage === 'Hindi' ? t.contacts.hindiLabel : t.contacts.englishLabel;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/75 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-navy-900 px-6 py-5 text-white flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-orange-400">
              {t.brand.name} · {t.brand.experienceBadge}
            </p>
            <h2 id="booking-modal-title" className="text-xl font-bold tracking-tight mt-0.5">
              {t.bookingModal.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.bookingModal.closeLabel}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div
              role="alert"
              className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          {submittedUrl && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 space-y-2">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>
                  {t.bookingModal.preparedTitle} {selectedSupportLabel}
                </span>
              </div>
              <p className="text-xs text-emerald-800">
                {t.bookingModal.preparedHint}{' '}
                <span className="tabular-nums font-medium">{selectedSupport.display}</span>.
              </p>
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.bookingModal.openWhatsappBtn} ({getWhatsAppNumberForLanguage(preferredLanguage)})
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.customerName}
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={t.quickBooking.customerNamePlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.mobileNumber}
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder={t.quickBooking.mobilePlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.bookingModal.serviceLabel}
              </label>
              <select
                id="modal-service"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              >
                {!serviceOptions.includes(serviceName) && serviceName && (
                  <option value={serviceName}>{serviceName}</option>
                )}
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.bookingModal.languageLabel}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { value: 'English', label: t.bookingModal.langEnglish },
                  { value: 'Hindi', label: t.bookingModal.langHindi },
                ] as const).map((lang) => (
                  <button
                    key={lang.value}
                    type="button"
                    onClick={() => setPreferredLanguage(lang.value)}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
                      preferredLanguage === lang.value
                        ? 'border-orange-600 bg-orange-50 text-orange-800'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-pickup" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.pickupLocation}
              </label>
              <input
                id="modal-pickup"
                type="text"
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder={t.bookingModal.pickupPlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <div>
              <label htmlFor="modal-destination" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.destination}
              </label>
              <input
                id="modal-destination"
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={t.bookingModal.destinationPlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.travelDate}
              </label>
              <input
                id="modal-date"
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <div>
              <label htmlFor="modal-passengers" className="block text-xs font-semibold text-slate-700 mb-1.5">
                {t.quickBooking.passengers}
              </label>
              <input
                id="modal-passengers"
                type="number"
                min={1}
                max={100}
                required
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.bookingModal.notesLabel}
            </label>
            <textarea
              id="modal-notes"
              rows={2}
              value={additionalRequirements}
              onChange={(e) => setAdditionalRequirements(e.target.value)}
              placeholder={t.bookingModal.notesPlaceholder}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-600">
            <span>
              {t.bookingModal.routingTo} <strong className="text-navy-900">{selectedSupportLabel}</strong>
            </span>
            <a
              href={selectedSupport.telHref}
              className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:text-orange-600 tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              {t.bookingModal.callPrefix} {selectedSupport.display}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              {t.bookingModal.cancel}
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <MessageCircle className="w-4 h-4" />
              {t.bookingModal.submitBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
