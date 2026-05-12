import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

const placeholderImg = '/images/design-12-hover.jpg'

/* ── Image + text block (461×461 each, 118px gap) ── */
function AboutIntro() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      {/* Image left — animated */}
      <FadeIn dir="left">
        <div className="shrink-0 bg-gray-100 overflow-hidden" style={{ width: 461, height: 461 }}>
          <img
            src={placeholderImg}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>

      {/* Text right, 118px gap — no animation */}
      <div
        className="relative bg-white flex items-center"
        style={{ width: 461, height: 461, marginLeft: 118 }}
      >
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
    <div className="w-full bg-gray-100 overflow-hidden" style={{ height: 461 }}>
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

      {/* Hero image 1240×571 */}
      <div className="w-full bg-gray-100 overflow-hidden" style={{ height: 571 }}>
        <img
          src="/images/goodnews.jpg"
          alt="GOOD NEWS"
          className="w-full h-full object-cover"
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
  )
}
