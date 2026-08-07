const LOCATIONS = ['PORT COQUITLAM', 'PITT MEADOWS', 'MAIN ST', 'COQUITLAM']

export default function LocationMarquee() {
  const items = [...LOCATIONS, ...LOCATIONS]

  return (
    <section className="w-full overflow-hidden" aria-label="Our locations">
      <div className="marquee-track flex w-max" style={{ animation: 'marquee 30s linear infinite' }}>
        {items.map((location, index) => (
          <span
            key={index}
            className="whitespace-nowrap px-10 text-sm tracking-[0.2em] sp:px-16 sp:text-base"
            aria-hidden={index >= LOCATIONS.length}
          >
            {location}
          </span>
        ))}
      </div>
    </section>
  )
}
