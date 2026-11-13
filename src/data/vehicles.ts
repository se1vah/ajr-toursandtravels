import hatchbackImg from '../assets/images/midrange_hatchback_car_1794596808276.jpg';
import sedanImg from '../assets/images/midrange_sedan_car_1794596808455.jpg';
import suvImg from '../assets/images/modern_suv_car_1794596136537.jpg';
import muvImg from '../assets/images/spacious_muv_car_1794596135803.jpg';
import tempoImg from '../assets/images/tempo_traveller_van_1794596136112.jpg';
import miniBusImg from '../assets/images/executive_mini_bus_1794596138261.jpg';
import busImg from '../assets/images/luxury_tourist_coach_1794596137148.jpg';

export type VehicleGroup = 'All' | 'Cars' | 'Family & SUV/MUV' | 'Vans & Coaches';

export interface VehicleCategory {
  id: string;
  name: string;
  group: Exclude<VehicleGroup, 'All'>;
  description: string;
  /**
   * Optional confirmed passenger capacity string.
   * Left undefined unless explicitly confirmed by AJR Tours and Travels.
   */
  confirmedCapacity?: string;
  bestFor: string;
  image: string;
  alt: string;
}

/**
 * Configurable vehicle catalog.
 * Update or add entries here as actual fleet vehicles and capacities are confirmed.
 */
export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    id: 'hatchback-cars',
    name: 'Hatchback Cars',
    group: 'Cars',
    description:
      'Budget-friendly, fuel-efficient air-conditioned hatchbacks ideal for everyday rides, solo travellers, and middle-class family outings.',
    bestFor: 'Local Rameswaram trips, budget outstation rides, and daily errands',
    image: hatchbackImg,
    alt: 'Affordable white compact family hatchback parked on a sunlit coastal driveway in Tamil Nadu',
  },
  {
    id: 'sedan-cars',
    name: 'Sedan Cars',
    group: 'Cars',
    description:
      'Affordable, comfortable mid-range 4-door sedans with practical boot space—trusted by middle-class families and business travellers.',
    bestFor: 'Family holidays, business travel, and airport pickups or drops',
    image: sedanImg,
    alt: 'Affordable white mid-range Indian touring sedan parked on a palm-lined driveway',
  },
  {
    id: 'suv-cars',
    name: 'SUV Cars',
    group: 'Family & SUV/MUV',
    description: 'High-clearance, sturdy SUVs offering confident road presence for hill stations, coastal routes, and long highway drives.',
    bestFor: 'Western Ghats hill tours, highway trips, and coastal excursions',
    image: suvImg,
    alt: 'Dark slate SUV parked overlooking coastal cliffs and blue waters in Tamil Nadu',
  },
  {
    id: 'muv-cars',
    name: 'MUV Cars',
    group: 'Family & SUV/MUV',
    description: 'Spacious multi-utility vehicles designed for comfortable family touring, senior pilgrims, and multi-day outstation trips.',
    bestFor: 'Family pilgrimages, multi-city tours, and airport group transfers',
    image: muvImg,
    alt: 'Pearl-white family MUV parked near a coastal palm highway rest stop',
  },
  {
    id: 'tempo-travellers',
    name: 'Tempo Travellers',
    group: 'Vans & Coaches',
    description: 'High-roof touring vans with wide aisles and overhead luggage space so medium-sized groups can travel together comfortably.',
    bestFor: 'Extended family tours, pilgrimage batches, and friend outings',
    image: tempoImg,
    alt: 'White high-roof Tempo Traveller van parked at a scenic coastal overlook',
  },
  {
    id: 'mini-buses',
    name: 'Mini Buses',
    group: 'Vans & Coaches',
    description: 'Air-conditioned touring mini buses ideal for larger family groups, wedding guests, and college department trips.',
    bestFor: 'Wedding guest shuttles, school excursions, and group pilgrimage tours',
    image: miniBusImg,
    alt: 'White and navy executive mini bus parked at a scenic green mountain overlook',
  },
  {
    id: 'buses',
    name: 'Buses',
    group: 'Vans & Coaches',
    description: 'Full-size tourist coaches equipped for large institutional tours, industrial visits, and multi-day South India group charters.',
    bestFor: 'College industrial visits, large corporate outings, and community tours',
    image: busImg,
    alt: 'Full-size modern touring coach bus on a palm-lined South Indian highway plaza',
  },
];
