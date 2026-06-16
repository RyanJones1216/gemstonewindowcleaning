const benefits = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="17" stroke="#5B2D8E" strokeWidth="2" />
        <path d="M12 20 L17 25 L28 14" stroke="#5B2D8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Hand-Washed Quality",
    description:
      "Each window is cleaned by hand using professional-grade solutions. No shortcuts, no spray-and-wipe. The result is a streak-free, spotless finish that lasts.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 4 L34 10 L34 22 C34 30 27 36 20 38 C13 36 6 30 6 22 L6 10 Z" stroke="#5B2D8E" strokeWidth="2" fill="none" />
        <path d="M14 20 L18 24 L26 16" stroke="#5B2D8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Locally Owned",
    description:
      "We're a local business rooted in this community. When we show up at your home, we treat it with the same care and respect we'd give our own.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="8" width="12" height="16" rx="1.5" stroke="#5B2D8E" strokeWidth="2" />
        <rect x="22" y="8" width="12" height="16" rx="1.5" stroke="#5B2D8E" strokeWidth="2" />
        <path d="M10 30 L30 30" stroke="#5B2D8E" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8 L20 36" stroke="#5B2D8E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
    title: "Interior & Exterior",
    description:
      "Full-service cleaning inside and out, scheduled at your convenience. One visit, every surface handled — so you can enjoy your home at its absolute best.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ backgroundColor: "#FAFEFF" }} className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B5CF6" }}>
            The Gemstone Difference
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
          >
            Why Choose Gemstone?
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.6 }} />
            <svg width="14" height="14" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#5B2D8E" opacity="0.5" />
            </svg>
            <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.6 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#E0F2FE" }}
              >
                {b.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
              >
                {b.title}
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: "#1E293B" }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
