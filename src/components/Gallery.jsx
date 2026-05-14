import FadeIn from './FadeIn'

const baseImages = [
  'design-12.png',
  'design-13.png',
  'design-15.png',
  'design-16.png',
  'design-17.png',
  'design-18.png',
  'design-19.png',
]

const hoverImage = 'design-12-hover.jpg'

// 7 cols × 3 rows = 21 items, fill with baseImages then shuffle
const images = [...Array(21)].map((_, i) => baseImages[i % baseImages.length])
  .sort(() => Math.random() - 0.5)

function GridItem({ img, i }) {
  return (
    <div
      className="group aspect-square overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 relative"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Default image */}
      <img
        src={`/images/${img}`}
        alt={`Gallery ${i + 1}`}
        className="w-full h-full object-cover absolute inset-0"
      />
      {/* Hover image — slides down from top */}
      <img
        src={`/images/${hoverImage}`}
        alt={`Gallery alt ${i + 1}`}
        className="w-full h-full object-cover absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out"
      />
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="work" className="w-full px-2 -mt-[30px] pb-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
        {images.map((img, i) => (
          <FadeIn key={i} dir="left">
            <GridItem img={img} i={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
