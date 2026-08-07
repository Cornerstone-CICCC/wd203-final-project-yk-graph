import heroImage from '../../assets/hero.png'

export default function Hero() {
  return (
    <section className="aspect-16/10 w-full sp:aspect-3/2">
      <img src={heroImage} alt="" className="h-full w-full object-contain" />
    </section>
  )
}
