import honeymoonImg from '../assets/images/honeymoon_backwater_resort_1794596072909.jpg';
import familyImg from '../assets/images/family_temple_vacation_1794596133512.jpg';
import schoolCollegeImg from '../assets/images/college_study_tour_1794596134570.jpg';
import industrialVisitImg from '../assets/images/industrial_visit_bus_1794596073911.jpg';
import corporateTransportImg from '../assets/images/corporate_commute_fleet_1794596135517.jpg';
import weddingGuestImg from '../assets/images/wedding_guest_fleet_1794596073940.jpg';
import customTourImg from '../assets/images/custom_tamilnadu_itinerary_1794596134015.jpg';
import keralaHillsImg from '../assets/images/munnar_ooty_hills_1794596134092.jpg';

export interface TourPackage {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  popularDestinations: string[];
  recommendedVehicles: string[];
  highlights: string[];
  image: string;
  alt: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    slug: 'honeymoon-packages',
    name: 'Honeymoon Packages',
    shortDescription: 'Private, unhurried romantic getaways across misty hills, backwaters, and tranquil coastal retreats.',
    fullDescription:
      'Celebrate your new journey together with private chauffeur-driven travel tailored to your pace. From serene Kerala backwaters and misty Munnar tea estates to peaceful coastal sunsets, every itinerary is arranged with privacy, comfort, and attentive coordination.',
    popularDestinations: ['Munnar', 'Alleppey Backwaters', 'Kodaikanal', 'Ooty', 'Kanyakumari'],
    recommendedVehicles: ['Sedan Cars', 'SUV Cars', 'MUV Cars'],
    highlights: [
      'Private air-conditioned car with courteous, experienced chauffeur',
      'Flexible sightseeing pace with scenic photo stops',
      'Door-to-door pickup from Rameswaram, Madurai, or nearest airport',
      'Customized route planning based on your stay dates',
    ],
    image: honeymoonImg,
    alt: 'Traditional Kerala houseboat gliding across calm golden backwaters at sunset',
  },
  {
    slug: 'family-tour-packages',
    name: 'Family Tour Packages',
    shortDescription: 'Safe, comfortable multi-generational holidays balancing temple visits, beaches, and relaxing scenic stops.',
    fullDescription:
      'Designed for parents, children, and senior family members travelling together, our family tour packages prioritize smooth driving, comfortable seating, clean rest stops, and thoughtfully paced schedules across Tamil Nadu and Kerala.',
    popularDestinations: ['Rameswaram', 'Madurai', 'Kanyakumari', 'Velankanni', 'Ooty'],
    recommendedVehicles: ['Sedan Cars', 'MUV Cars', 'Tempo Travellers'],
    highlights: [
      'Senior-friendly itinerary pacing with convenient drop-offs',
      'Spacious luggage capacity for multi-day family travel',
      'Dedicated Hindi and English booking coordination before and during the trip',
      'Custom stops for local dining and heritage landmarks',
    ],
    image: familyImg,
    alt: 'Multi-generational Indian family walking happily along the Rameswaram coastal promenade at sunset',
  },
  {
    slug: 'school-college-trips',
    name: 'School & College Trips',
    shortDescription: 'Well-organized educational excursions and campus tours with dependable group coaches and safety-first drivers.',
    fullDescription:
      'We partner with schools, colleges, and student coordinators to organize safe, punctual educational tours across South India’s heritage monuments, science centres, and coastal ecosystems.',
    popularDestinations: ['Rameswaram', 'Dhanushkodi', 'Madurai', 'Kodaikanal', 'Thanjavur'],
    recommendedVehicles: ['Tempo Travellers', 'Mini Buses', 'Buses'],
    highlights: [
      'Experienced highway and hill-route drivers accustomed to student groups',
      'Clear route scheduling aligned with faculty and parent timelines',
      'Group-sized seating options from vans to full-size tourist coaches',
      'Direct coordinator communication throughout the excursion',
    ],
    image: schoolCollegeImg,
    alt: 'College students admiring historic South Indian stone monuments during a study tour',
  },
  {
    slug: 'industrial-visits',
    name: 'Industrial Visits',
    shortDescription: 'Punctual institutional transport for engineering, management, and technical college industrial visits.',
    fullDescription:
      'Ensure your department’s industrial visit runs strictly on schedule. AJR Tours and Travels provides reliable coaches and mini buses for multi-plant itineraries across Tamil Nadu, Chennai, Coimbatore, Hosur, and Bengaluru.',
    popularDestinations: ['Chennai', 'Coimbatore', 'Trichy', 'Madurai', 'Bengaluru'],
    recommendedVehicles: ['Tempo Travellers', 'Mini Buses', 'Buses'],
    highlights: [
      'On-time reporting at campus gates and industrial plant checkpoints',
      'Comfortable group seating for multi-city study circuits',
      'Optional sightseeing add-ons for student batches after plant hours',
      'Simple institutional quotation and WhatsApp coordination',
    ],
    image: industrialVisitImg,
    alt: 'Modern white AC tourist coach parked outside a South Indian technology and industrial park',
  },
  {
    slug: 'corporate-employee-transport',
    name: 'Corporate Employee Transport',
    shortDescription: 'Dependable daily shift shuttles, executive airport transfers, and offsite travel for businesses.',
    fullDescription:
      'Support your workforce and visiting executives with punctual, well-maintained vehicles. Whether you need scheduled employee commuting, conference delegate transfers, or regional client visits, our fleet adapts to your company’s timetable.',
    popularDestinations: ['Rameswaram', 'Ramanathapuram', 'Madurai', 'Trichy', 'Chennai'],
    recommendedVehicles: ['Sedan Cars', 'MUV Cars', 'Tempo Travellers', 'Mini Buses'],
    highlights: [
      'Consistent reporting discipline for shift changes and executive pickups',
      'Clean, well-kept interiors suitable for corporate guests',
      'Flexible recurring or event-based scheduling',
      'English and Hindi support desk for visiting staff and clients',
    ],
    image: corporateTransportImg,
    alt: 'Organized fleet of white corporate sedans and MUVs ready at a South Indian business hub',
  },
  {
    slug: 'wedding-guest-transportation',
    name: 'Wedding Guest Transportation',
    shortDescription: 'Coordinated arrival pickups, mandapam shuttles, and decorated bridal vehicles for family celebrations.',
    fullDescription:
      'Keep every relative and out-of-town guest comfortable during your wedding festivities. From railway station and airport pickups to synchronized venue shuttles and ceremonial bridal cars, our team handles guest movement smoothly.',
    popularDestinations: ['Thangachimadam', 'Rameswaram', 'Ramanathapuram', 'Madurai', 'Karaikudi'],
    recommendedVehicles: ['Sedan Cars', 'MUV Cars', 'Tempo Travellers', 'Mini Buses'],
    highlights: [
      'Multi-vehicle coordination for large wedding guest lists',
      'Station and airport reception transfers in Tamil Nadu',
      'Clean, well-presented cars and group vans for mandapam shuttles',
      'Dedicated trip coordinator reachable via phone and WhatsApp',
    ],
    image: weddingGuestImg,
    alt: 'Coordinated white MPVs and mid-range sedans outside a decorated South Indian wedding mandapam',
  },
  {
    slug: 'custom-tour-packages',
    name: 'Custom Tour Packages',
    shortDescription: 'Tailor-made road trips designed around your exact dates, preferred stops, vehicle class, and group size.',
    fullDescription:
      'Have a specific pilgrimage circuit, coastal road trip, photography route, or multi-state holiday in mind? Share your starting point, preferred destinations, and passenger count—we build a bespoke travel plan and vehicle quote just for you.',
    popularDestinations: ['Rameswaram', 'Dhanushkodi', 'Madurai', 'Thanjavur', 'Pondicherry'],
    recommendedVehicles: ['Hatchback Cars', 'Sedan Cars', 'SUV Cars', 'MUV Cars', 'Tempo Travellers'],
    highlights: [
      '100% customizable route, duration, and stopover schedule',
      'Vehicle matched carefully to your group size and luggage needs',
      'Local insider guidance on Rameswaram & Tamil Nadu travel timings',
      'Zero hidden assumptions—clear custom quotation via WhatsApp or call',
    ],
    image: customTourImg,
    alt: 'Dramatic coastal cliffs, lighthouse, and clear blue ocean waves in Southern Tamil Nadu',
  },
  {
    slug: 'kerala-ooty-kodaikanal-munnar',
    name: 'Kerala, Ooty, Kodaikanal & Munnar Tour Packages',
    shortDescription: 'Scenic Western Ghats hill station circuits and Kerala backwater journeys starting from Rameswaram or Madurai.',
    fullDescription:
      'Experience South India’s most celebrated cool hill stations and lush green valleys. Travel comfortably along misty ghat roads to Munnar’s tea gardens, Kodaikanal’s pine-fringed lake, Ooty’s botanical slopes, and Kerala’s serene waterways with hill-experienced chauffeurs.',
    popularDestinations: ['Munnar', 'Kodaikanal', 'Ooty', 'Thekkady', 'Alleppey & Kochi'],
    recommendedVehicles: ['Sedan Cars', 'SUV Cars', 'MUV Cars', 'Tempo Travellers'],
    highlights: [
      'Drivers experienced in Western Ghats hairpin bends and hill routes',
      'Seamless multi-day Tamil Nadu to Kerala interstate permits arranged',
      'Customizable combination of hill stations and backwaters',
      'Ideal for couples, families, and small friend groups',
    ],
    image: keralaHillsImg,
    alt: 'Misty rolling emerald tea plantations in Munnar and the Western Ghats at sunrise',
  },
];
