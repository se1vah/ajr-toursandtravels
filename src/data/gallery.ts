import pambanImg from '../assets/images/pamban_bridge_sunset_1794596222900.jpg';
import dhanushkodiImg from '../assets/images/dhanushkodi_beach_road_1794596223417.jpg';
import templeCorridorImg from '../assets/images/rameswaram_temple_corridor_1794596223413.jpg';
import kodaikanalImg from '../assets/images/kodaikanal_misty_lake_1794596223637.jpg';
import familyTravelImg from '../assets/images/happy_family_travel_1794596224292.jpg';
import pilgrimageGroupImg from '../assets/images/pilgrimage_group_arrival_1794596225366.jpg';
import suvCoastalImg from '../assets/images/modern_suv_car_1794596136537.jpg';
import tempoCoastalImg from '../assets/images/tempo_traveller_van_1794596136112.jpg';
import coachHighwayImg from '../assets/images/luxury_tourist_coach_1794596137148.jpg';

export type GalleryCategory =
  | 'All'
  | 'Destinations'
  | 'Vehicles'
  | 'Family Trips'
  | 'Group Tours'
  | 'Pilgrimage Trips';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  location: string;
  caption: string;
  image: string;
  alt: string;
}

/**
 * Configurable gallery catalog.
 * Replace image imports or URLs with actual business photographs anytime while keeping metadata intact.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'pamban-bridge',
    title: 'Pamban Sea Bridge at Sunset',
    category: 'Destinations',
    location: 'Pamban · Rameswaram Island',
    caption: 'Iconic sea crossing welcoming travellers arriving onto Rameswaram Island from mainland Tamil Nadu.',
    image: pambanImg,
    alt: 'Pamban sea bridge connecting Rameswaram island across turquoise water at sunset',
  },
  {
    id: 'dhanushkodi-road',
    title: 'Dhanushkodi Land’s End Coastal Drive',
    category: 'Destinations',
    location: 'Dhanushkodi · Tamil Nadu',
    caption: 'Guided coastal sightseeing drives to Arichal Munai where the Bay of Bengal meets the Indian Ocean.',
    image: dhanushkodiImg,
    alt: 'Scenic Dhanushkodi coastal highway flanked by turquoise seas on both sides',
  },
  {
    id: 'rameswaram-temple',
    title: 'Sacred Temple Corridors',
    category: 'Pilgrimage Trips',
    location: 'Rameswaram · Tamil Nadu',
    caption: 'Early morning temple drop-offs and unhurried darshan assistance for pilgrimage visitors.',
    image: templeCorridorImg,
    alt: 'Carved stone temple corridor illuminated by warm morning light in Rameswaram',
  },
  {
    id: 'kodaikanal-lake',
    title: 'Misty Hill Station Escapes',
    category: 'Destinations',
    location: 'Kodaikanal · Western Ghats',
    caption: 'Cool misty lakes, pine forests, and scenic valley viewpoints along our Tamil Nadu & Kerala hill tours.',
    image: kodaikanalImg,
    alt: 'Kodaikanal misty mountain lake framed by pine forests at dawn',
  },
  {
    id: 'family-viewpoint',
    title: 'Multi-Generational Family Road Trips',
    category: 'Family Trips',
    location: 'Tamil Nadu & Kerala Hill Circuit',
    caption: 'Spacious family MUVs and patient chauffeurs creating relaxed holiday memories for every generation.',
    image: familyTravelImg,
    alt: 'Indian family smiling at a scenic mountain viewpoint beside their touring MUV',
  },
  {
    id: 'pilgrimage-group-arrival',
    title: 'Group & Pilgrimage Arrivals',
    category: 'Group Tours',
    location: 'Tamil Nadu Temple Circuit',
    caption: 'Warm hospitality and coordinated group minibus arrivals for temple yatra batches and community tours.',
    image: pilgrimageGroupImg,
    alt: 'Pilgrimage group welcomed beside a clean touring minibus outside a South Indian temple',
  },
  {
    id: 'fleet-suv-coastal',
    title: 'Outstation Touring SUVs',
    category: 'Vehicles',
    location: 'Coastal Tamil Nadu',
    caption: 'Well-maintained air-conditioned SUVs ready for long highway drives and mountain hairpins.',
    image: suvCoastalImg,
    alt: 'Dark slate SUV parked overlooking coastal cliffs in Tamil Nadu',
  },
  {
    id: 'fleet-tempo-traveller',
    title: 'Group Tempo Travellers',
    category: 'Vehicles',
    location: 'South India Touring Routes',
    caption: 'Clean, spacious high-roof vans ideal for family reunions, college trips, and group tours.',
    image: tempoCoastalImg,
    alt: 'White high-roof Tempo Traveller parked at a coastal viewpoint',
  },
  {
    id: 'fleet-coach-bus',
    title: 'Executive Tourist Coaches',
    category: 'Vehicles',
    location: 'Interstate Highways',
    caption: 'Comfortable full-size coaches for industrial visits, school excursions, and large pilgrim groups.',
    image: coachHighwayImg,
    alt: 'Full-size modern touring coach bus on a palm-lined highway plaza',
  },
];
