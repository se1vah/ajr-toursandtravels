import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { GALLERY_ITEMS, GalleryCategory } from '../data/gallery';

const GALLERY_FILTERS: GalleryCategory[] = [
  'All',
  'Destinations',
  'Vehicles',
  'Family Trips',
  'Group Tours',
  'Pilgrimage Trips',
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredItems.length]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      <SeoHead
        title="Travel Gallery – Destinations, Fleet & Trips | AJR Tours and Travels"
        description="View travel highlights from AJR Tours and Travels featuring Rameswaram, Pamban Bridge, Dhanushkodi, Kodaikanal, family tours, pilgrimage arrivals, and touring vehicles."
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Destinations · Vehicles · Customer Journeys
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            Photo Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Highlights from coastal Tamil Nadu, temple pilgrimage routes, hill station retreats, and our passenger touring fleet.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              {GALLERY_FILTERS.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-white text-navy-900 shadow-xs'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-600 tabular-nums">
              {filteredItems.length} {filteredItems.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <div className="aspect-4/3 overflow-hidden bg-slate-100">
                  <SafeImage
                    src={item.image}
                    alt={item.alt}
                    fallbackLabel={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500">
                    {item.category} <span aria-hidden="true">·</span> {item.location}
                  </p>
                  <h2 className="font-display text-lg font-bold text-navy-900 mt-1">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 text-white">
              <div>
                <p className="text-xs text-orange-400">
                  {activeItem.category} · {activeItem.location}
                </p>
                <p className="font-display font-bold text-base">{activeItem.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-4/3 bg-black relative">
              <SafeImage
                src={activeItem.image}
                alt={activeItem.alt}
                className="w-full h-full object-contain"
              />
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null
                          ? null
                          : (prev - 1 + filteredItems.length) % filteredItems.length,
                      )
                    }
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-orange-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null ? null : (prev + 1) % filteredItems.length,
                      )
                    }
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 text-white hover:bg-orange-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            <div className="px-5 py-3.5 text-sm text-slate-300">
              {activeItem.caption}
            </div>
          </div>
        </div>
      )}

      <LanguageSupportStrip />
    </>
  );
}
