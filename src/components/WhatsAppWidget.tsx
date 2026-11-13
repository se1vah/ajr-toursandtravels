import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {open && (
        <div
          role="dialog"
          aria-label={t.whatsappWidget.deskTitle}
          className="w-72 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        >
          <div className="bg-navy-900 px-4 py-3 text-white flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-orange-400">{t.whatsappWidget.deskTitle}</p>
              <p className="text-sm font-bold">{t.whatsappWidget.chooseLanguage}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.whatsappWidget.closeAria}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-3 space-y-2">
            <a
              href={buildDirectWhatsAppUrl('english')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-navy-900">{t.contacts.englishLabel}</p>
                <p className="text-xs text-slate-500 tabular-nums">{BUSINESS_INFO.contacts.english.display}</p>
              </div>
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            </a>

            <a
              href={buildDirectWhatsAppUrl('hindi')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-navy-900">{t.contacts.hindiLabel}</p>
                <p className="text-xs text-slate-500 tabular-nums">{BUSINESS_INFO.contacts.hindi.display}</p>
              </div>
              <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            </a>

            <a
              href={BUSINESS_INFO.contacts.general.telHref}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm hover:border-orange-400 hover:bg-orange-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-navy-900">{t.whatsappWidget.generalCallLabel}</p>
                <p className="text-xs text-slate-500 tabular-nums">{BUSINESS_INFO.contacts.general.display}</p>
              </div>
              <Phone className="w-4 h-4 text-orange-600 shrink-0" />
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? t.whatsappWidget.closeAria : t.whatsappWidget.openAria}
        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline whitespace-nowrap">{t.whatsappWidget.buttonLabel}</span>
      </button>
    </div>
  );
}
