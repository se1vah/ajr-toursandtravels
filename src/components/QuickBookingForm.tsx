import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, BookingLanguage } from '../data/business';
import { TRIP_CATEGORIES } from '../data/tripCategories';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function QuickBookingForm() {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [tripType, setTripType] = useState('One Way Trip');
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('2');
  const [preferredLanguage, setPreferredLanguage] = useState<BookingLanguage>('English');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmittedUrl(null);

    if (!customerName.trim()) {
      setError('Please enter your name.');
      return;
    }
    const digits = mobileNumber.replace(/\D/g, '');
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!pickupLocation.trim() || !destination.trim()) {
      setError('Please enter both pickup location and destination.');
      return;
    }
    if (!travelDate) {
      setError('Please choose a travel date.');
      return;
    }

    const url = buildWhatsAppUrl({
      customerName,
      mobileNumber,
      serviceName: tripType,
      pickupLocation,
      destination,
      travelDate,
      passengers,
      preferredLanguage,
      additionalRequirements,
    });

    setSubmittedUrl(url);
    window.location.assign(url);
  };

  const activeContact =
    preferredLanguage === 'Hindi'
      ? BUSINESS_INFO.contacts.hindi
      : BUSINESS_INFO.contacts.english;

  return (
    <section
      id="quick-booking"
      aria-labelledby="quick-booking-heading"
      className="relative z-10 -mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              Instant WhatsApp Reservation
            </p>
            <h2
              id="quick-booking-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-900 mt-1"
            >
              Quick Booking Enquiry
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Share your trip details below to get a custom quotation directly in English or Hindi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href={BUSINESS_INFO.contacts.hindi.telHref}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 font-medium text-navy-900 hover:border-orange-300 hover:bg-orange-50 transition-colors tabular-nums whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              Hindi Support: {BUSINESS_INFO.contacts.hindi.number}
            </a>
            <a
              href={BUSINESS_INFO.contacts.english.telHref}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 font-medium text-navy-900 hover:border-orange-300 hover:bg-orange-50 transition-colors tabular-nums whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600" />
              English Support: {BUSINESS_INFO.contacts.english.number}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-700" />
                <span>
                  Enquiry ready for {activeContact.label} ({activeContact.display}).
                </span>
              </div>
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Continue on WhatsApp
              </a>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="qb-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Customer Name *
              </label>
              <input
                id="qb-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="qb-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Mobile Number *
              </label>
              <input
                id="qb-phone"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="qb-trip-type" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Trip Type *
              </label>
              <select
                id="qb-trip-type"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              >
                {TRIP_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
                <option value="Custom Tour Package">Custom Tour Package</option>
              </select>
            </div>

            <div>
              <label htmlFor="qb-language" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Preferred Language *
              </label>
              <select
                id="qb-language"
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value as BookingLanguage)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="English">English (8870451368)</option>
                <option value="Hindi">Hindi (9342207368)</option>
              </select>
            </div>

            <div>
              <label htmlFor="qb-pickup" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Pickup Location *
              </label>
              <input
                id="qb-pickup"
                type="text"
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder="e.g., Thangachimadam / Rameswaram"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="qb-destination" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Destination *
              </label>
              <input
                id="qb-destination"
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Madurai / Kanyakumari / Ooty"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="qb-date" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Travel Date *
              </label>
              <input
                id="qb-date"
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>

            <div>
              <label htmlFor="qb-passengers" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Number of Passengers *
              </label>
              <input
                id="qb-passengers"
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

          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
            <div className="flex-1">
              <label htmlFor="qb-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Additional Requirements
              </label>
              <input
                id="qb-notes"
                type="text"
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
                placeholder="Preferred vehicle category, sightseeing stops, flight/train arrival time..."
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0 min-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp ({preferredLanguage})
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
