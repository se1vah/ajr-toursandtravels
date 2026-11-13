import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TripCategoriesPage } from './pages/TripCategoriesPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState<string | undefined>(undefined);
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

  const handleOpenBooking = (serviceName?: string) => {
    setInitialBookingService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />

      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
          <Route
            path="/trip-categories"
            element={<TripCategoriesPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/tour-packages"
            element={<TourPackagesPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/tour-packages/:slug"
            element={<PackageDetailPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/vehicles" element={<VehiclesPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
      <BookingModal
        isOpen={bookingModalOpen}
        initialService={initialBookingService}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
