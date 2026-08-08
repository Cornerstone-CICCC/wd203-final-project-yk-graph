import LocationSection from '../components/location/LocationSection'
import { LOCATIONS } from '../data/locations'
import { useHashScroll } from '../hooks/useHashScroll'

export default function Locations() {
  useHashScroll()

  return (
    <div className="px-6 py-12 sp:px-12">
      <h1 className="text-2xl tracking-wide">LOCATIONS</h1>

      <div className="divide-y divide-line">
        {LOCATIONS.map((location) => (
          <LocationSection key={location.id} location={location} />
        ))}
      </div>
    </div>
  )
}
