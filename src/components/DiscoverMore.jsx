export default function DiscoverMore() {
  return (
    <section className="flex flex-col items-center py-24">
      {/* Thin line */}
      <div className="w-16 border-t border-[#4CAF50] mb-6" />

      {/* Text */}
      <p className="text-xs tracking-[0.3em] text-[#4CAF50] uppercase mb-4">
        DISCOVER MORE BRAND
      </p>

      {/* Arrow */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#4CAF50]"
      >
        <path
          d="M8 3v10M8 13l4-4M8 13l-4-4"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  )
}
