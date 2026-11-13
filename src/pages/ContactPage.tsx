import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { GoogleMapCard } from '../components/GoogleMapCard';
import { BUSINESS_INFO, BookingLanguage } from '../data/business';
import { buildDirectWhatsAppUrl, buildWhatsAppUrl } from '../utils/whatsapp';

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<BookingLanguage>('English');
  const [subject, setSubject] = useState('Vehicle Rental Enquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmittedUrl(null);

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address or leave it blank.');
      return;
    }
    if (!message.trim()) {
      setError('Please enter your travel enquiry or message.');
      return;
    }

    const whatsappUrl = buildWhatsAppUrl({
      customerName: name,
      mobileNumber: phone,
      serviceName: subject,
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

  return (
    <>
      <SeoHead
        title="Contact Us – Thangachimadam, Rameswaram | AJR Tours and Travels"
        description="Contact AJR Tours and Travels in Thangachimadam, Tamil Nadu (623529). General Enquiries: 9025961026, Hindi Booking Support: 9342207368, English Booking Support: 8870451368."
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Get in Touch · Thangachimadam &amp; Rameswaram
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Reach our dedicated Hindi or English booking desks by phone or WhatsApp, email us for group quotes, or visit our office in Thangachimadam.
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
                  General Enquiries
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.general.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {BUSINESS_INFO.contacts.general.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.general.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-navy-800 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <a
                  href={buildDirectWhatsAppUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Hindi Booking Support */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Hindi Booking Support
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.hindi.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {BUSINESS_INFO.contacts.hindi.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.hindi.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Hindi Desk
                </a>
                <a
                  href={buildDirectWhatsAppUrl('hindi')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Hindi
                </a>
              </div>
            </div>

            {/* English Booking Support */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  English Booking Support
                </p>
                <p className="font-display text-2xl font-bold text-navy-900 mt-2 tabular-nums">
                  {BUSINESS_INFO.contacts.english.number}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {BUSINESS_INFO.contacts.english.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.contacts.english.telHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call English Desk
                </a>
                <a
                  href={buildDirectWhatsAppUrl('english')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-emerald-50 px-4 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp English
                </a>
              </div>
            </div>
          </div>

          {/* Office Details + Google Map & Enquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  {BUSINESS_INFO.name}
                </h2>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-900">Office Address</p>
                    <p className="mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
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
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent('Travel Enquiry – AJR Tours and Travels')}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-600" />
                    Send Email
                  </a>
                </div>
              </div>

              <GoogleMapCard />
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Direct Message
              </p>
              <h2 className="font-display text-2xl font-bold text-navy-900 mt-1">
                Send an Enquiry
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Tell us about your upcoming trip, college tour, corporate transport, or vehicle requirement.
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
                      <span>Enquiry prepared for {preferredLanguage} Booking Support</span>
                    </div>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open WhatsApp Now
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lang" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Language *
                    </label>
                    <select
                      id="contact-lang"
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value as BookingLanguage)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="English">English (8870451368)</option>
                      <option value="Hindi">Hindi (9342207368)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="Vehicle Rental Enquiry">Vehicle Rental Enquiry</option>
                    <option value="Tour Package Quotation">Tour Package Quotation</option>
                    <option value="Pilgrimage Trip Planning">Pilgrimage Trip Planning</option>
                    <option value="School / College / Industrial Visit">School / College / Industrial Visit</option>
                    <option value="Corporate / Wedding Transportation">Corporate / Wedding Transportation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Enquiry Details *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share pickup location, destination, travel dates, and number of passengers..."
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Submit via WhatsApp ({preferredLanguage})
                  </button>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                      `Name: ${name}\nPhone: ${phone}\nPreferred Language: ${preferredLanguage}\n\n${message}`,
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-orange-600" />
                    Send via Email
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
