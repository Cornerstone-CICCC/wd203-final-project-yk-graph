import { Link } from 'react-router-dom'

import { PATHS } from '../../routes/paths'
import type { Location } from '../../data/locations'

export default function LocationSection({ location }: { location: Location }) {
  return (
    <section className="py-4 sp:py-8">
      <div className="grid grid-cols-3 gap-4 sp:gap-6">
        {location.photos.map((photo, index) => (
          <div key={index} className="aspect-3/4 overflow-hidden bg-line">
            <img
              src={photo}
              alt=""
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.jpg'
              }}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-xl">
        <p className="text-xs text-muted">{location.year}</p>
        <h2 className="mt-2 text-xl">{location.name}</h2>

        <p className="mt-4 text-sm text-muted">{location.description}</p>

        <ul className="mt-4 space-y-1 text-sm text-muted">
          <li>Address: {location.address}</li>
          <li>Phone: {location.phone}</li>
          <li>Hours: {location.hours}</li>
        </ul>

        <Link
          to={PATHS.items}
          className="mt-8 inline-block border border-paper px-10 py-3 text-xs tracking-widest transition-colors hover:bg-paper hover:text-ink"
        >
          MENU
        </Link>
      </div>
    </section>
  )
}
