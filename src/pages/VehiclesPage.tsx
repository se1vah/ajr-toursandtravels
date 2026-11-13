import { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { SafeImage } from '../components/SafeImage';
import { LanguageSupportStrip } from '../components/LanguageSupportStrip';
import { VEHICLE_CATEGORIES, VehicleGroup } from '../data/vehicles';

interface VehiclesPageProps {
  onOpenBooking: (initialService?: string) => void;
}

const VEHICLE_GROUPS: VehicleGroup[] = [
  'All',
  'Cars',
  'Family & SUV/MUV',
  'Vans & Coaches',
];

export function VehiclesPage({ onOpenBooking }: VehiclesPageProps) {
  const [activeGroup, setActiveGroup] = useState<VehicleGroup>('All');

  const visibleVehicles =
    activeGroup === 'All'
      ? VEHICLE_CATEGORIES
      : VEHICLE_CATEGORIES.filter((v) => v.group === activeGroup);

  return (
    <>
      <SeoHead
        title="Our Vehicles – Hatchbacks, Sedans, SUVs, MUVs, Tempo Travellers & Buses | AJR Tours and Travels"
        description="Explore AJR Tours and Travels affordable vehicle rental categories in Thangachimadam & Rameswaram: Hatchbacks, Mid-Range Sedans, SUVs, MUVs, Tempo Travellers, Mini Buses, and Buses."
      />

      <section className="bg-navy-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
            Configurable Travel Fleet
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-balance">
            Our Vehicles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Choose the vehicle category that suits your group size and travel route. Exact vehicle availability and seating configuration are confirmed directly upon enquiry.
          </p>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
              {VEHICLE_GROUPS.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setActiveGroup(group)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeGroup === group
                      ? 'bg-white text-navy-900 shadow-xs'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-600 tabular-nums">
              {visibleVehicles.length} vehicle {visibleVehicles.length === 1 ? 'category' : 'categories'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleVehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-300 transition-colors"
              >
                <div className="aspect-4/3 overflow-hidden bg-slate-100">
                  <SafeImage
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fallbackLabel={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-500">{vehicle.group}</p>
                    <h2 className="font-display text-lg font-bold text-navy-900 mt-1">
                      {vehicle.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {vehicle.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                      <p>
                        <strong className="text-navy-900">Best for:</strong> {vehicle.bestFor}
                      </p>
                      <p>
                        <strong className="text-navy-900">Capacity:</strong>{' '}
                        {vehicle.confirmedCapacity ?? 'Confirmed on enquiry based on group size'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(`${vehicle.name} Rental`)}
                      className="w-full rounded-xl bg-orange-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors whitespace-nowrap"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LanguageSupportStrip />
    </>
  );
}
