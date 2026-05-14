import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import ParallaxImage from '../components/ParallaxImage'

// ── Work items data ──
// type: 'small' | 'wide'
// side: 'left' | 'right' (small images — which side the image is on)
// text numbers are 01–07, wide items have no number

const workItems = [
  { type: 'small', side: 'right', num: '01' },
  { type: 'small', side: 'left',  num: '02' },
  { type: 'small', side: 'right', num: '03' },
  { type: 'wide' },
  { type: 'small', side: 'left',  num: '04' },
  { type: 'small', side: 'right', num: '05' },
  { type: 'small', side: 'left',  num: '06' },
  { type: 'wide' },
  { type: 'small', side: 'right', num: '07' },
  { type: 'small', side: 'left',  num: '08' },
]

/* ── helpers ── */
function smallSrc(num) {
  return '/images/design-12-hover.jpg'
}
function wideSrc(i) {
  return '/images/design-12-hover.jpg'
}

/* ── Small image + text row (image LEFT) ── */
function WorkSmall({ num }) {
  return (
    <div className="flex flex-col lg:flex-row w-full mb-[90px]">
      {/* Image — aspect-square on mobile, 595×543 on desktop */}
      <div className="shrink-0 bg-gray-100 overflow-hidden w-full aspect-square lg:w-[595px] lg:h-[543px] lg:aspect-auto">
        <img src={smallSrc(num)} alt={`Work ${num}`} className="w-full h-full object-cover" />
      </div>

      {/* Text — min height on mobile, 543px on desktop */}
      <div className="flex-1 relative bg-white min-h-[100px] lg:h-[543px]">
        <p className="absolute left-6 bottom-6 text-[#2D993A] text-sm tracking-widest">
          {num}
        </p>
      </div>
    </div>
  )
}
// Image RIGHT — text on left, image on right
function WorkSmallRight({ num }) {
  return (
    <div className="flex flex-col lg:flex-row w-full mb-[90px]">
      {/* Text — min height on mobile, 543px on desktop. Order: after image on mobile, before on desktop */}
      <div className="flex-1 relative bg-white min-h-[100px] lg:h-[543px] order-2 lg:order-1">
        <p className="absolute left-6 bottom-6 text-[#2D993A] text-sm tracking-widest">
          {num}
        </p>
      </div>

      {/* Image — aspect-square on mobile, 595×543 on desktop. Order: first on mobile, second on desktop */}
      <div className="shrink-0 bg-gray-100 overflow-hidden w-full aspect-square lg:w-[595px] lg:h-[543px] lg:aspect-auto order-1 lg:order-2">
        <img src={smallSrc(num)} alt={`Work ${num}`} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

/* ── Wide image + text bar ── */
let wideCount = 0
function WorkWide() {
  wideCount++
  const idx = wideCount
  return (
    <div className="w-full mb-[90px]">
      <div className="w-full bg-gray-100 overflow-hidden aspect-video lg:h-[543px]">
        <img
          src={wideSrc(idx)}
          alt={`Work wide ${idx}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full bg-white flex items-center min-h-[60px]">
        <p className="text-[#2D993A] text-sm tracking-widest ml-6">
          {/* wide text placeholder */}
        </p>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function WorkPage() {
  wideCount = 0 // reset on each render

  return (
    <div className="min-h-screen bg-white">
      <Header active="work" />

      <div className="px-4 md:px-10 mt-[50px]">

      {/* Hero image 1240×571 */}
      <div className="w-full overflow-hidden aspect-[1240/571] lg:h-[571px]">
        <ParallaxImage
          src="/images/goodnews.jpg"
          alt="GOOD NEWS"
        />
      </div>

      {/* Work gallery */}
      <div className="mt-[20px]">
      {workItems.map((item, i) => {
        let content
        let dir = 'up'
        if (item.type === 'wide') {
          content = <WorkWide key={i} />
        } else if (item.side === 'right') {
          content = <WorkSmallRight key={i} num={item.num} />
          dir = 'right'
        } else {
          content = <WorkSmall key={i} num={item.num} />
          dir = 'left'
        }
        return <FadeIn key={i} dir={dir}>{content}</FadeIn>
      })}
      </div>

      <Footer />
      </div>
    </div>
  )
}
