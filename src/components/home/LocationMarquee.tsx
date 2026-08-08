import { Link } from 'react-router-dom'

import { LOCATIONS } from '../../data/locations'
import { PATHS } from '../../routes/paths'

export default function LocationMarquee() {
  const items = [...LOCATIONS, ...LOCATIONS]

  return (
    <section className="w-full overflow-hidden" aria-label="Our locations">
      <div className="marquee-track flex w-max" style={{ animation: 'marquee 30s linear infinite' }}>
        {items.map((location, index) => (
          <Link
            key={index}
            to={`${PATHS.locations}#${location.id}`}
            className="whitespace-nowrap px-10 text-sm tracking-[0.2em] transition-opacity hover:opacity-60 sp:px-16 sp:text-base"
            aria-hidden={index >= LOCATIONS.length}
            tabIndex={index >= LOCATIONS.length ? -1 : undefined}
          >
            {location.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </section>
  )
}
