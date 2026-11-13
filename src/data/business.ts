export type BookingLanguage = 'English' | 'Hindi';

export const BUSINESS_INFO = {
  name: 'AJR Tours and Travels',
  shortName: 'AJR Travels',
  tagline: 'Your Journey, Our Responsibility',
  subTagline: 'Explore More. Travel Comfortably. Travel with AJR.',
  experience: '10+ Years',
  address: 'Thangachimadam, Tamil Nadu – 623529, India',
  cityRegion: 'Thangachimadam · Rameswaram · Tamil Nadu',
  email: 'ajrtravels@gmail.com',
  coordinates: {
    lat: 9.2995,
    lng: 79.2392,
  },
  contacts: {
    general: {
      label: 'General Enquiries',
      number: '9025961026',
      display: '+91 90259 61026',
      telHref: 'tel:+919025961026',
      whatsappNumber: '919025961026',
      description: 'Fleet availability, custom quotes, and local Rameswaram & Thangachimadam assistance.',
    },
    hindi: {
      label: 'Hindi Booking Support',
      number: '9342207368',
      display: '+91 93422 07368',
      telHref: 'tel:+919342207368',
      whatsappNumber: '919342207368',
      description: 'Dedicated Hindi-speaking travel desk for pilgrimage tours, family trips, and bookings.',
    },
    english: {
      label: 'English Booking Support',
      number: '8870451368',
      display: '+91 88704 51368',
      telHref: 'tel:+918870451368',
      whatsappNumber: '918870451368',
      description: 'Dedicated English-speaking booking coordinators for corporate, outstation, and custom itineraries.',
    },
  },
} as const;

export const ABOUT_HIGHLIGHTS = [
  {
    number: '01',
    title: '10+ Years of Experience',
    description:
      'Over a decade serving pilgrims, families, institutions, and corporate travellers across Thangachimadam, Rameswaram, and South India.',
  },
  {
    number: '02',
    title: 'Wide Range of Vehicles',
    description:
      'From affordable hatchbacks and comfortable mid-range sedans to spacious MUVs, Tempo Travellers, mini buses, and full-size coaches.',
  },
  {
    number: '03',
    title: 'Professional Travel Services',
    description:
      'Punctual pickups, route-experienced drivers, transparent trip coordination, and well-maintained air-conditioned vehicles.',
  },
  {
    number: '04',
    title: 'Customer-Friendly Booking',
    description:
      'Direct phone and WhatsApp reservation desks with dedicated Hindi and English booking support lines for effortless communication.',
  },
  {
    number: '05',
    title: 'Customized Travel Packages',
    description:
      'Flexible itineraries built around your exact schedule, temple timings, sightseeing stops, and group size—never rigid templates.',
  },
] as const;

import heroCoastalImg from '../assets/images/rameswaram_coastal_journey_1794596065131.jpg';

export const HERO_IMAGE = heroCoastalImg;
