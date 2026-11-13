import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { GoogleMapCard } from '../components/GoogleMapCard';
import { BUSINESS_INFO, BookingLanguage } from '../data/business';
import { buildDirectWhatsAppUrl, buildWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<BookingLanguage>('English');
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const selectedSubject = t.contactPage.enquiryTypes[subjectIndex] ?? t.contactPage.enquiryTypes[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmittedUrl(null);

    if (!name.trim()) {
      setError(t.contactPage.errName);
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError(t.contactPage.errPhone);
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(t.contactPage.errEmail);
      return;
    }
    if (!message.trim()) {
      setError(t.contactPage.errMessage);
      return;
    }

    const whatsappUrl = buildWhatsAppUrl({
      customerName: name,
      mobileNumber: phone,
      serviceName: selectedSubject,
      pickupLocation: 'To be confirmed',
      destination: 'To be confirmed',
      travelDate: 'Flexible / Upcoming',
      passengers: 'To be confirmed',
      preferredLanguage,
      additionalRequirements: `${email.trim() ? `Email: ${email.trim()} | ` : ''}${message.trim()}`,
    });

    setSubmittedUrl(whatsappUrl);
    window.location.assign(whatsappUrl);
  };

  const selectedDeskLabel =
    preferredLanguage === 'Hindi' ? t.contacts.hindiLabel : t.contacts.englishLabel;

  const selectedDeskShortName =
    preferredLanguage === 'Hindi' ? t.bookingModal.langHindi : t.bookingModal.langEnglish;

  return (
    <>
      <SeoHead
        title={t.contactPage.seoTitle}
        description={t.contactPage.seoDescription}
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            {t.contactPage.kicker}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            {t.contactPage.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {t.contactPage.heroSub}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* General Enquiries */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {t.contacts.generalLabel}
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.general.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {t.contacts.generalDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.general.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-navy-800 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t.contacts.callNow}
                </a>
                <a
                  href={buildDirectWhatsAppUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t.contacts.whatsappChat}
                </a>
              </div>
            </div>

            {/* Hindi Booking Support */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {t.contacts.hindiLabel}
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.hindi.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {t.contacts.hindiDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.hindi.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t.contacts.callHindi}
                </a>
                <a
                  href={buildDirectWhatsAppUrl('hindi')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t.contacts.whatsappHindi}
                </a>
              </div>
            </div>

            {/* English Booking Support */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  {t.contacts.englishLabel}
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.english.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {t.contacts.englishDesc}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.english.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {t.contacts.callEnglish}
                </a>
                <a
                  href={buildDirectWhatsAppUrl('english')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t.contacts.whatsappEnglish}
                </a>
              </div>
            </div>
          </div>

          {/* Office Details + Google Map & Enquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  {t.brand.name}
                </h2>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-900">{t.contactPage.officeAddressLabel}</p>
                    <p className="mt-0.5">{t.brand.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-900">{t.contactPage.emailLabel}</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-orange-600 hover:text-orange-700 font-medium break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(`Travel Enquiry – ${BUSINESS_INFO.name}`)}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-600" />
                    {t.contactPage.sendEmailBtn}
                  </a>
                </div>
              </div>

              <GoogleMapCard />
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                {t.contactPage.formKicker}
              </p>
              <h2 className="font-display text-2xl font-bold text-navy-900 mt-1">
                {t.contactPage.formTitle}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.contactPage.formSub}
              </p>

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
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>
                        {t.contactPage.preparedText} {selectedDeskLabel}
                      </span>
                    </div>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t.contactPage.openWhatsappNow}
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contactPage.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contactPage.namePlaceholder}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contactPage.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contactPage.phonePlaceholder}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contactPage.emailFieldLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contactPage.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lang" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contactPage.langLabel}
                    </label>
                    <select
                      id="contact-lang"
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value as BookingLanguage)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="English">{t.quickBooking.englishDeskOption}</option>
                      <option value="Hindi">{t.quickBooking.hindiDeskOption}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contactPage.enquiryTypeLabel}
                  </label>
                  <select
                    id="contact-subject"
                    value={subjectIndex}
                    onChange={(e) => setSubjectIndex(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    {t.contactPage.enquiryTypes.map((label, idx) => (
                      <option key={label} value={idx}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contactPage.detailsLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactPage.detailsPlaceholder}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.contactPage.submitWhatsapp} ({selectedDeskShortName})
                  </button>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(selectedSubject)}&body=${encodeURIComponent(
                      `Name: ${name}\nPhone: ${phone}\nPreferred Language: ${preferredLanguage}\n\n${message}`,
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-600" />
                    {t.contactPage.sendViaEmail}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
