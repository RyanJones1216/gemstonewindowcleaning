function GemShape({
  size,
  opacity,
  className,
}: {
  size: number;
  opacity: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="white" />
      <polygon points="20,2 38,14 20,18" fill="white" opacity="0.6" />
      <polygon points="2,14 20,18 20,38" fill="white" opacity="0.3" />
    </svg>
  );
}

function GemDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.6 }} />
      <svg width="16" height="16" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#7DD3FC" />
      </svg>
      <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.6 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(135deg, #5B2D8E 0%, #7B3FC0 50%, #7DD3FC 100%)",
      }}
    >
      {/* Decorative floating gem shapes */}
      <GemShape
        size={80}
        opacity={0.08}
        className="absolute top-20 left-10 animate-float"
      />
      <GemShape
        size={120}
        opacity={0.06}
        className="absolute top-40 right-16 animate-float-slow"
      />
      <GemShape
        size={50}
        opacity={0.1}
        className="absolute bottom-32 left-1/4 animate-float"
      />
      <GemShape
        size={90}
        opacity={0.07}
        className="absolute bottom-20 right-10 animate-float-slow"
      />
      <GemShape
        size={40}
        opacity={0.12}
        className="absolute top-1/3 left-1/3 animate-float"
      />
      <GemShape
        size={60}
        opacity={0.09}
        className="absolute top-24 right-1/3 animate-float-slow"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <GemDivider />

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-2"
          style={{
            fontFamily: "var(--font-playfair), serif",
            background: "linear-gradient(135deg, #ffffff 0%, #E0F2FE 60%, #7DD3FC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Crystal Clear Windows.
          <br />
          Every Time.
        </h1>

        <GemDivider />

        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(224,242,254,0.9)" }}>
          Hand-washed interior &amp; exterior window cleaning for homes that deserve to shine.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "white",
              color: "#5B2D8E",
            }}
          >
            View Services
          </a>
          {/* Replace XXXXXXXXXX with the owner's real phone number */}
          <a
            href="sms:+19258199605"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold border-2 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{
              borderColor: "rgba(255,255,255,0.7)",
              color: "white",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            💬 Text Us Now
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#E0F2FE" />
        </svg>
      </div>
    </section>
  );
}
