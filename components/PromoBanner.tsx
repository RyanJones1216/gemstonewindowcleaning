export default function PromoBanner() {
  return (
    <div
      className="relative overflow-hidden py-10 px-4 sm:px-6 text-center"
      style={{
        background: "linear-gradient(135deg, #1E293B 0%, #3B1A5E 50%, #1E293B 100%)",
      }}
    >
      {/* Subtle star / sparkle decorations */}
      <span className="absolute top-3 left-6 text-2xl select-none" aria-hidden="true">✦</span>
      <span className="absolute top-4 right-8 text-xl select-none" aria-hidden="true">✦</span>
      <span className="absolute bottom-3 left-1/4 text-lg select-none" aria-hidden="true">✦</span>
      <span className="absolute bottom-4 right-1/4 text-xl select-none" aria-hidden="true">✦</span>

      {/* Tag line */}
      <p
        className="text-xs font-bold uppercase tracking-widest mb-2"
        style={{ color: "#7DD3FC" }}
      >
        🎆 Limited Time — 4th of July Special 🎆
      </p>

      {/* Big discount headline */}
      <p
        className="text-5xl sm:text-7xl font-black leading-none mb-2"
        style={{
          fontFamily: "var(--font-playfair), serif",
          background: "linear-gradient(135deg, #ffffff 0%, #7DD3FC 60%, #8B5CF6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        10% OFF
      </p>

      <p className="text-base sm:text-lg font-semibold mt-1" style={{ color: "rgba(224,242,254,0.85)" }}>
        All exterior window cleaning service plans.
      </p>

      <p className="text-xs mt-3" style={{ color: "rgba(224,242,254,0.5)" }}>
        Discounted prices shown in the Pricing section below. Text us to book before the holiday!
      </p>
    </div>
  );
}
