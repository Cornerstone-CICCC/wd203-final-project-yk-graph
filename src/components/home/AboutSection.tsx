import aboutImage from '../../assets/about.webp'

export default function AboutSection() {
  return (
    <section className="grid items-center gap-10 px-6 py-16 sp:grid-cols-2 sp:gap-16 sp:px-12 sp:py-24">
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        We care for quality and consistency, which is why we use only the finest of green coffee beans from micro lots.
      </p>

      <img src={aboutImage} alt="" className="h-64 w-full object-cover sp:h-96" />
    </section>
  )
}
