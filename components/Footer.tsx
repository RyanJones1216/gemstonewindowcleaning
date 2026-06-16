function GemIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#5B2D8E" />
      <polygon points="20,2 38,14 20,18" fill="#8B5CF6" opacity="0.8" />
      <polygon points="2,14 20,18 20,38" fill="#7DD3FC" opacity="0.7" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-4 sm:px-6 border-t"
      style={{ backgroundColor: "#FAFEFF", borderColor: "rgba(125,211,252,0.3)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <GemIcon />
          <span
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
          >
            Gemstone Window Cleaning
          </span>
        </div>

        <p className="text-sm italic" style={{ color: "#8B5CF6" }}>
          Hand-washed windows. Gemstone clean.
        </p>

        <p className="text-xs mt-2" style={{ color: "#94A3B8" }}>
          &copy; {year} Gemstone Window Cleaning. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
