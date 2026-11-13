import { useState, useCallback } from 'react';
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  APILoadingStatus,
} from '@vis.gl/react-google-maps';
import { MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { useLanguage } from '../context/LanguageContext';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

const OFFICE_POSITION = BUSINESS_INFO.coordinates;

function OfficeLocationMarker() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);
  const { t } = useLanguage();

  const handleMarkerClick = useCallback(() => {
    setInfoWindowOpen((prev) => !prev);
  }, []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={OFFICE_POSITION}
        onClick={handleMarkerClick}
        title={t.brand.name}
      >
        <Pin background="#EA580C" borderColor="#0B1F3A" glyphColor="#FFFFFF" />
      </AdvancedMarker>
      {infoWindowOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={260}
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <div className="p-1 text-slate-900">
            <p className="font-display font-bold text-sm text-navy-900">{t.brand.name}</p>
            <p className="text-xs text-slate-600 mt-1">{t.brand.address}</p>
            <p className="text-xs text-slate-700 mt-1.5 tabular-nums">
              {t.contactPage.mapGeneralPrefix} {BUSINESS_INFO.contacts.general.number}
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

function MapViewportWithStatus() {
  const status = useApiLoadingStatus();

  if (status === APILoadingStatus.FAILED || status === APILoadingStatus.AUTH_FAILURE) {
    return <MapFallbackCard />;
  }

  return (
    <div className="h-[380px] w-full rounded-2xl overflow-hidden border border-slate-200">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={OFFICE_POSITION}
        defaultZoom={13}
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <OfficeLocationMarker />
      </GoogleMap>
    </div>
  );
}

function MapFallbackCard() {
  const { t } = useLanguage();
  const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_INFO.name}, ${BUSINESS_INFO.address}`,
  )}`;

  return (
    <div className="h-[380px] w-full rounded-2xl border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-2xl bg-navy-900 text-orange-400 flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6" />
      </div>
      <h3 className="font-display text-lg font-bold text-navy-900">{t.brand.name}</h3>
      <p className="text-sm text-slate-600 mt-1 max-w-sm">{t.brand.address}</p>
      <a
        href={mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
      >
        <span>{t.contactPage.mapOpenBtn}</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export function GoogleMapCard() {
  if (!MAPS_API_KEY) {
    return <MapFallbackCard />;
  }

  return (
    <APIProvider apiKey={MAPS_API_KEY} libraries={['marker']} language="en" region="IN">
      <MapViewportWithStatus />
    </APIProvider>
  );
}
