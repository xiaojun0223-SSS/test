import ParallaxImage from './ParallaxImage'

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] overflow-hidden">
      <ParallaxImage
        src="/images/Hero.jpg"
        alt="Hero"
        className="min-h-[90vh]"
        amplitude={0.15}
      />
    </section>
  )
}
