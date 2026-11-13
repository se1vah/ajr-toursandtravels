import oneWayImg from '../assets/images/one_way_highway_1794596066347.jpg';
import roundTripImg from '../assets/images/round_trip_drive_1794596065599.jpg';
import multiCityImg from '../assets/images/multi_city_route_1794596071047.jpg';
import multipleStopImg from '../assets/images/scenic_stopover_tour_1794596067283.jpg';
import localTripImg from '../assets/images/local_city_ride_1794596067344.jpg';
import outstationImg from '../assets/images/outstation_road_trip_1794596067116.jpg';
import airportPickupImg from '../assets/images/midrange_airport_sedan_1794596809204.jpg';
import airportDropImg from '../assets/images/airport_drop_service_1794596069425.jpg';
import hourlyRentalImg from '../assets/images/hourly_city_rental_1794596069131.jpg';
import fullDayImg from '../assets/images/full_day_charter_1794596068594.jpg';
import nightTripImg from '../assets/images/night_highway_travel_1794596068772.jpg';
import packageTourImg from '../assets/images/south_india_tour_1794596070211.jpg';
import pilgrimageImg from '../assets/images/temple_pilgrimage_trip_1794596069623.jpg';
import corporateImg from '../assets/images/midrange_corporate_sedan_1794596809347.jpg';
import weddingImg from '../assets/images/midrange_wedding_sedan_1794596810430.jpg';
import groupTripImg from '../assets/images/group_tour_van_1794596133395.jpg';

export type TripCategoryGroup = 'All' | 'Point-to-Point' | 'Rentals & Time-Based' | 'Tours & Occasions';

export interface TripCategory {
  id: string;
  name: string;
  group: Exclude<TripCategoryGroup, 'All'>;
  shortDescription: string;
  image: string;
  alt: string;
}

export const TRIP_CATEGORIES: TripCategory[] = [
  {
    id: 'one-way-trip',
    name: 'One Way Trip',
    group: 'Point-to-Point',
    shortDescription: 'Direct point-to-point drops from Thangachimadam or Rameswaram to any city across Tamil Nadu and neighboring states.',
    image: oneWayImg,
    alt: 'Silver sedan cruising on a palm-lined South Indian highway for a one-way trip',
  },
  {
    id: 'round-trip',
    name: 'Round Trip',
    group: 'Point-to-Point',
    shortDescription: 'Comfortable return journeys with the same dedicated vehicle and driver waiting throughout your trip.',
    image: roundTripImg,
    alt: 'Touring SUV at a scenic Tamil Nadu valley viewpoint during a round trip',
  },
  {
    id: 'multi-city-trip',
    name: 'Multi-City Trip',
    group: 'Tours & Occasions',
    shortDescription: 'Seamless multi-destination road itineraries connecting Madurai, Kanyakumari, Trichy, Thanjavur, and beyond.',
    image: multiCityImg,
    alt: 'Winding coastal highway connecting historic South Indian towns and temple towers',
  },
  {
    id: 'multiple-stop-trip',
    name: 'Multiple Stop Trip',
    group: 'Point-to-Point',
    shortDescription: 'Flexible route planning with scheduled sightseeing, family visits, or temple halts along your journey.',
    image: multipleStopImg,
    alt: 'Family stepping out of a white touring MPV at a coastal viewpoint stopover',
  },
  {
    id: 'local-trip',
    name: 'Local Trip',
    group: 'Rentals & Time-Based',
    shortDescription: 'Quick, reliable rides within Thangachimadam, Rameswaram, Pamban, and Dhanushkodi for daily errands and local visits.',
    image: localTripImg,
    alt: 'Modern white hatchback driving through a peaceful coastal South Indian town',
  },
  {
    id: 'outstation-trip',
    name: 'Outstation Trip',
    group: 'Point-to-Point',
    shortDescription: 'Long-distance highway and hill-station travel across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.',
    image: outstationImg,
    alt: 'Touring vehicle traveling through misty mountain tea plantations on an outstation trip',
  },
  {
    id: 'airport-pickup',
    name: 'Airport Pickup',
    group: 'Point-to-Point',
    shortDescription: 'Punctual meet-and-greet transfers from Madurai, Tuticorin, Trichy, or Chennai airports straight to your destination.',
    image: airportPickupImg,
    alt: 'Courteous driver waiting beside a white mid-range sedan taxi outside an Indian airport arrivals gate',
  },
  {
    id: 'airport-drop',
    name: 'Airport Drop',
    group: 'Point-to-Point',
    shortDescription: 'Timely departure transfers with generous luggage space so you reach your flight terminal stress-free.',
    image: airportDropImg,
    alt: 'Traveller loading luggage into a white sedan at an airport departure lane',
  },
  {
    id: 'hourly-rental',
    name: 'Hourly Rental',
    group: 'Rentals & Time-Based',
    shortDescription: 'Convenient short-duration car rentals billed transparently by the hour for temple darshan or local meetings.',
    image: hourlyRentalImg,
    alt: 'Compact rental car parked beside a heritage stone colonnade in Tamil Nadu',
  },
  {
    id: 'full-day-rental',
    name: 'Full Day Rental',
    group: 'Rentals & Time-Based',
    shortDescription: 'Dedicated vehicle and chauffeur at your disposal for a full day of local sightseeing and island exploration.',
    image: fullDayImg,
    alt: 'White MUV parked near lush botanical gardens for a full-day charter',
  },
  {
    id: 'night-trip',
    name: 'Night Trip',
    group: 'Point-to-Point',
    shortDescription: 'Safe, well-rested drivers for late-night railway pickups, early morning temple departures, and overnight drives.',
    image: nightTripImg,
    alt: 'Modern touring sedan driving safely on a lit Indian highway at twilight',
  },
  {
    id: 'package-tour',
    name: 'Package Tour',
    group: 'Tours & Occasions',
    shortDescription: 'Curated multi-day sightseeing tours across South India’s coastal heritage towns, temples, and hill stations.',
    image: packageTourImg,
    alt: 'South Indian carved temple tower and tranquil tank at sunrise',
  },
  {
    id: 'pilgrimage-trip',
    name: 'Pilgrimage Trip',
    group: 'Tours & Occasions',
    shortDescription: 'Respectful, well-paced temple circuit travel covering Rameswaram, Madurai, Tiruchendur, Kanyakumari, and Navagraha shrines.',
    image: pilgrimageImg,
    alt: 'Ancient Dravidian stone temple architecture illuminated by early morning sunlight',
  },
  {
    id: 'corporate-trip',
    name: 'Corporate Trip',
    group: 'Tours & Occasions',
    shortDescription: 'Executive travel for client visits, business delegations, site inspections, and scheduled team transfers.',
    image: corporateImg,
    alt: 'Silver mid-range business sedan parked outside a modern corporate office building in South India',
  },
  {
    id: 'wedding-trip',
    name: 'Wedding Trip',
    group: 'Tours & Occasions',
    shortDescription: 'Well-presented bridal cars and coordinated guest shuttles for traditional South Indian wedding ceremonies.',
    image: weddingImg,
    alt: 'White mid-range family sedan decorated with fresh marigold and jasmine wedding garlands',
  },
  {
    id: 'group-trip',
    name: 'Group Trip',
    group: 'Tours & Occasions',
    shortDescription: 'Spacious vans, Tempo Travellers, and coaches tailored for extended families, friends, and community outings.',
    image: groupTripImg,
    alt: 'White passenger van parked along a scenic South Indian coastal road overlook',
  },
];
