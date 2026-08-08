import AboutSection from '../components/home/AboutSection'
import Hero from '../components/home/Hero'
import LocationMarquee from '../components/home/LocationMarquee'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <LocationMarquee />
      <AboutSection />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-ink to-transparent sp:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-ink to-transparent sp:w-40" />
    </div>
  )
}
