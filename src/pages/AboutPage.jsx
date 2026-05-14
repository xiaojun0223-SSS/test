import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import ParallaxImage from '../components/ParallaxImage'

const placeholderImg = '/images/design-12-hover.jpg'

/* ── Image + text block (461×461 each, 118px gap) ── */
function AboutIntro() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center py-8 lg:py-16 gap-8 lg:gap-0">
      {/* Image left — animated */}
      <FadeIn dir="left">
        <div className="shrink-0 bg-gray-100 overflow-hidden w-full aspect-square lg:w-[461px] lg:h-[461px] lg:aspect-auto">
          <img src={placeholderImg} alt="About" className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      {/* Text right, 118px gap on desktop */}
      <div className="bg-white flex items-center w-full lg:w-[461px] lg:ml-[118px] min-h-[200px] lg:h-[461px]">
        <p className="text-sm text-black leading-relaxed px-4">
          {/* ✏️ 替换为你的简介文字 */}
          这里是关于我 / 工作室的介绍文字。<br />
          可以在这里编辑你的简介内容。<br />
          支持多行文字排版。
        </p>
      </div>
    </div>
  )
}

/* ── Full-width image block (1240×461) ── */
function AboutWide() {
  return (
    <div className="w-full bg-gray-100 overflow-hidden aspect-[1240/461] lg:h-[461px]">
      <img
        src={placeholderImg}
        alt="About wide"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

/* ── Page ── */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="about" />

      <div className="px-4 md:px-10 mt-[50px]">

      {/* Hero image 1240×571 */}
      <div className="w-full overflow-hidden aspect-[1240/571] lg:h-[571px]">
        <ParallaxImage
          src="/images/goodnews.jpg"
          alt="GOOD NEWS"
        />
      </div>

      {/* Section 1: image left + text right */}
      <AboutIntro />

      {/* Section 2: full-width image */}
      <FadeIn>
        <div className="mb-[90px]">
          <AboutWide />
        </div>
      </FadeIn>

      <Footer />
      </div>
    </div>
  )
}
