function SunIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="9" fill="#7DD3FC" />
      <line x1="24" y1="4" x2="24" y2="11" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="37" x2="24" y2="44" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="24" x2="11" y2="24" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="37" y1="24" x2="44" y2="24" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9.2" y1="9.2" x2="14.1" y2="14.1" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33.9" y1="33.9" x2="38.8" y2="38.8" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38.8" y1="9.2" x2="33.9" y2="14.1" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14.1" y1="33.9" x2="9.2" y2="38.8" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 22 L24 6 L42 22" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19 L10 42 L38 42 L38 19" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="28" width="12" height="14" rx="1" stroke="#8B5CF6" strokeWidth="2.5" />
      <rect x="14" y="22" width="8" height="8" rx="1" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="26" y="22" width="8" height="8" rx="1" stroke="#8B5CF6" strokeWidth="2" />
    </svg>
  );
}

function GemDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "#7DD3FC", opacity: 0.5 }} />
      <svg width="14" height="14" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#7DD3FC" opacity="0.6" />
      </svg>
      <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "#7DD3FC", opacity: 0.5 }} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#E0F2FE" }} className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B5CF6" }}>
            What We Do
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
          >
            Our Services
          </h2>
          <GemDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Exterior Card */}
          <div
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            style={{ border: "1px solid rgba(125,211,252,0.3)" }}
          >
            <div className="mb-5">
              <SunIcon />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
            >
              Exterior Window Cleaning
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              Over time, the outside of your windows collects a stubborn layer of built-up dirt, road grime, hard water stains, oxidation, pollen, and pollution film that ordinary rain simply can&apos;t wash away. Our exterior window cleaning service cuts through all of it, restoring your glass to sparkling clarity.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              The results go beyond looks. Clean exterior windows dramatically improve your home&apos;s curb appeal, maximize the natural light that floods into your rooms, and protect your glass from the long-term etching damage caused by mineral deposits — damage that, left unchecked, can permanently pit the surface and require full glass replacement. Clean windows even contribute to energy efficiency by allowing more sunlight to warm your home naturally.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              Exterior cleaning is especially important after storms, allergy season, or any seasonal change when pollen, moisture, and debris accumulate rapidly. Regular cleaning is the best protection your windows have.
            </p>
            <div
              className="mt-auto pt-4 border-t text-sm font-semibold italic"
              style={{ borderColor: "rgba(125,211,252,0.4)", color: "#8B5CF6" }}
            >
              Every window hand-washed — never squeegee-rushed.
            </div>
          </div>

          {/* Interior Card */}
          <div
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            style={{ border: "1px solid rgba(139,92,246,0.2)" }}
          >
            <div className="mb-5">
              <HomeIcon />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
            >
              Interior Window Cleaning
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              The inside of your windows quietly collects a film of dust, fingerprints, pet nose prints, cooking grease, and condensation residue — a haze that dims your rooms without you even noticing until it&apos;s gone. Our interior window cleaning removes every trace of it.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              Beyond clarity, clean interior windows make a real difference in your home&apos;s air quality. That built-up film traps allergens, dust mites, and airborne particles that circulate every time someone opens a window or turns on the HVAC. Removing it noticeably reduces indoor allergens and makes your space feel fresher and more inviting.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "#1E293B" }}>
              The change is striking: rooms feel brighter, more open, and more cared-for. Guests notice. You notice. Whether you&apos;re prepping for a special occasion or simply want to enjoy your home at its best, clean interior windows make one of the most visible improvements you can make to the feel of any room.
            </p>
            <div
              className="mt-auto pt-4 border-t text-sm font-semibold italic"
              style={{ borderColor: "rgba(139,92,246,0.3)", color: "#8B5CF6" }}
            >
              Every window hand-washed — never squeegee-rushed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
