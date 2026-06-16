export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{
        background: "linear-gradient(135deg, #5B2D8E 0%, #8B5CF6 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Gem icon accent */}
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="white" opacity="0.3" />
            <polygon points="20,2 38,14 20,18" fill="white" opacity="0.5" />
            <polygon points="2,14 20,18 20,38" fill="white" opacity="0.2" />
          </svg>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Ready for Spotless Windows?
        </h2>

        <p className="text-lg mb-2" style={{ color: "rgba(224,242,254,0.9)" }}>
          The easiest way to get a quote — just send us a text.
        </p>
        <p className="text-sm mb-10" style={{ color: "rgba(224,242,254,0.7)" }}>
          We typically respond within a few hours during business hours.
        </p>

        {/* Primary CTA — replace 9258199605 with the owner's actual phone number (digits only, no dashes) */}
        <a
          href="sms:+19258199605"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          style={{ backgroundColor: "white", color: "#5B2D8E" }}
        >
          <span>💬</span> Text Us Now
        </a>

        {/* Display phone number — replace (925) 819-9605 with the owner's formatted phone number */}
        <p className="mt-6 text-2xl font-bold tracking-wide" style={{ color: "rgba(224,242,254,0.95)" }}>
          (925) 819-9605
        </p>

        {/* Tip box */}
        <div
          className="mt-12 rounded-2xl p-6 text-left"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#7DD3FC" }}>
            What to include in your text
          </p>
          <ul className="space-y-2 text-sm" style={{ color: "rgba(224,242,254,0.85)" }}>
            <li className="flex items-start gap-2">
              <span style={{ color: "#7DD3FC" }}>✦</span>
              Your home address
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#7DD3FC" }}>✦</span>
              Approximate number of windows
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: "#7DD3FC" }}>✦</span>
              Interior, exterior, or both
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
