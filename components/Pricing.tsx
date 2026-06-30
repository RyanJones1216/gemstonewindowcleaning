"use client";

import { useState } from "react";

const DISCOUNT = 0.10; // 4th of July — remove this line (and all disc() calls) when promo ends
const disc = (price: number) => Math.round(price * (1 - DISCOUNT));

type TierId = "sm" | "md" | "lg";

const PANE_TIERS: { label: string; id: TierId }[] = [
  { label: "0 – 25 panes", id: "sm" },
  { label: "26 – 40 panes", id: "md" },
  { label: "41 – 60 panes", id: "lg" },
];

// Base prices — exterior glass only
const PLANS = [
  {
    id: "onetime",
    name: "One-Time Clean",
    badge: null,
    highlight: false,
    description: "A thorough one-time exterior clean — no commitment required.",
    prices: { sm: 250, md: 400, lg: 600 },
    cadence: "one-time service",
  },
  {
    id: "semi",
    name: "Semiannual Plan",
    badge: "Popular",
    highlight: true,
    description: "Two exterior cleans per year — every season change covered.",
    prices: { sm: 225, md: 360, lg: 540 },
    cadence: "per visit · 2× per year",
  },
  {
    id: "quarterly",
    name: "Quarterly Plan",
    badge: "Best Value",
    highlight: false,
    description: "Four exterior cleans per year — always spotless, no matter what.",
    prices: { sm: 200, md: 320, lg: 480 },
    cadence: "per visit · 4× per year",
  },
];

// Interior add-on — price varies by pane tier
const INTERIOR_ADDON: Record<TierId, number> = { sm: 100, md: 125, lg: 150 };

// Screen add-on — flat price, no discount applied
const SCREEN_TIERS = [
  { label: "No screens", price: 0 },
  { label: "0 – 15 screens  (+$35)", price: 35 },
  { label: "16 – 30 screens  (+$75)", price: 75 },
];

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill={highlighted ? "rgba(255,255,255,0.2)" : "#E0F2FE"} />
      <path d="M5.5 10.5 L8.5 13.5 L14.5 7" stroke={highlighted ? "white" : "#5B2D8E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const [tier, setTier] = useState<TierId>("sm");
  const [addInterior, setAddInterior] = useState(false);
  const [screenAddon, setScreenAddon] = useState(0);

  const interiorPrice = INTERIOR_ADDON[tier];

  return (
    <section id="pricing" style={{ backgroundColor: "#E0F2FE" }} className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#8B5CF6" }}>
            Transparent Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
          >
            Simple, Honest Plans
          </h2>
          <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "#1E293B", opacity: 0.7 }}>
            Base prices cover exterior glass. Select your window count, then add interior cleaning or screens below.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.7 }} />
            <svg width="13" height="13" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#5B2D8E" opacity="0.45" />
            </svg>
            <div className="h-px w-12" style={{ backgroundColor: "#7DD3FC", opacity: 0.7 }} />
          </div>
        </div>

        {/* Pane-count toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 shadow-inner" style={{ backgroundColor: "white" }}>
            {PANE_TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                className="px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  tier === t.id
                    ? { backgroundColor: "#5B2D8E", color: "white", boxShadow: "0 2px 8px rgba(91,45,142,0.35)" }
                    : { backgroundColor: "transparent", color: "#5B2D8E" }
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {PLANS.map((plan) => {
            const exteriorPrice = plan.prices[tier];
            // Only exterior glass is discounted; interior and screens are full price
            const originalTotal = exteriorPrice + (addInterior ? interiorPrice : 0) + screenAddon;
            const total = disc(exteriorPrice) + (addInterior ? interiorPrice : 0) + screenAddon;

            // Build price breakdown string
            const parts: string[] = [`$${disc(exteriorPrice)} exterior`];
            if (addInterior) parts.push(`$${interiorPrice} interior`);
            if (screenAddon > 0) parts.push(`$${screenAddon} screens`);
            const breakdown = parts.length > 1 ? parts.join(" + ") : null;

            return (
              <div
                key={plan.id}
                className="relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:shadow-xl"
                style={
                  plan.highlight
                    ? {
                        background: "linear-gradient(150deg, #5B2D8E 0%, #8B5CF6 100%)",
                        boxShadow: "0 8px 40px rgba(91,45,142,0.3)",
                      }
                    : {
                        backgroundColor: "white",
                        border: "1px solid rgba(125,211,252,0.4)",
                      }
                }
              >
                {plan.badge && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                    style={
                      plan.highlight
                        ? { backgroundColor: "#7DD3FC", color: "#1E293B" }
                        : { backgroundColor: "#5B2D8E", color: "white" }
                    }
                  >
                    {plan.badge}
                  </span>
                )}

                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif", color: plan.highlight ? "white" : "#5B2D8E" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm mb-5" style={{ color: plan.highlight ? "rgba(224,242,254,0.8)" : "#64748B" }}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-3 mb-1">
                  {/* Original price — struck through */}
                  <span
                    className="text-2xl font-semibold line-through"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.35)" : "#CBD5E1" }}
                  >
                    ${originalTotal}
                  </span>
                  {/* Discounted price */}
                  <span className="text-5xl font-bold" style={{ color: plan.highlight ? "white" : "#5B2D8E" }}>
                    ${total}
                  </span>
                  {/* Discount badge */}
                  <span
                    className="mb-1 px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#7DD3FC", color: "#1E293B" }}
                  >
                    -10%
                  </span>
                </div>
                {breakdown && (
                  <p className="text-xs mb-1" style={{ color: plan.highlight ? "rgba(224,242,254,0.6)" : "#94A3B8" }}>
                    {breakdown}
                  </p>
                )}
                <p className="text-xs mb-6" style={{ color: plan.highlight ? "rgba(224,242,254,0.65)" : "#94A3B8" }}>
                  {plan.cadence}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {[
                    `Up to ${tier === "sm" ? "25" : tier === "md" ? "40" : "60"} window panes`,
                    "Exterior glass cleaning included",
                    addInterior ? "Interior glass cleaning included" : "Interior available as add-on",
                    "Hand-washed, streak-free finish",
                    "Satisfaction guarantee — free re-clean if not happy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckIcon highlighted={plan.highlight} />
                      <span style={{ color: plan.highlight ? "rgba(224,242,254,0.9)" : "#1E293B" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  style={
                    plan.highlight
                      ? { backgroundColor: "white", color: "#5B2D8E" }
                      : { backgroundColor: "#5B2D8E", color: "white" }
                  }
                >
                  Get a Quote
                </a>
              </div>
            );
          })}
        </div>

        {/* Add-on panels */}
        <div className="flex flex-col gap-4 mb-6">

          {/* Interior add-on */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "white", border: "1px solid rgba(139,92,246,0.2)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* House/interior icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 10.5 L12 3 L21 10.5" stroke="#5B2D8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 8.8 V20 H19 V8.8" stroke="#5B2D8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="9" y="13" width="6" height="7" rx="0.5" stroke="#5B2D8E" strokeWidth="1.5" />
                  <rect x="8" y="11" width="3.5" height="3.5" rx="0.5" stroke="#5B2D8E" strokeWidth="1.3" />
                  <rect x="12.5" y="11" width="3.5" height="3.5" rx="0.5" stroke="#5B2D8E" strokeWidth="1.3" />
                </svg>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
                  >
                    Add-On: Interior Window Cleaning
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Eliminates dust, fingerprints, grease film, and condensation from inside every pane.
                  </p>
                </div>
              </div>
              {/* Pricing callout */}
              <div className="flex-shrink-0 text-right">
                <span className="text-2xl font-bold" style={{ color: "#5B2D8E" }}>
                  +${interiorPrice}
                </span>
                <p className="text-xs" style={{ color: "#94A3B8" }}>
                  for {tier === "sm" ? "0–25" : tier === "md" ? "26–40" : "41–60"} panes
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button
                onClick={() => setAddInterior(false)}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border-2"
                style={
                  !addInterior
                    ? { backgroundColor: "#5B2D8E", color: "white", borderColor: "#5B2D8E" }
                    : { backgroundColor: "white", color: "#5B2D8E", borderColor: "rgba(91,45,142,0.25)" }
                }
              >
                Exterior only
              </button>
              <button
                onClick={() => setAddInterior(true)}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border-2"
                style={
                  addInterior
                    ? { backgroundColor: "#5B2D8E", color: "white", borderColor: "#5B2D8E" }
                    : { backgroundColor: "white", color: "#5B2D8E", borderColor: "rgba(91,45,142,0.25)" }
                }
              >
                Add interior (+${interiorPrice})
              </button>
            </div>

            {addInterior && (
              <p className="mt-4 text-xs" style={{ color: "#8B5CF6" }}>
                ✦ Interior add-on price is reflected in the plan totals above.
              </p>
            )}
          </div>

          {/* Screen add-on */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "white", border: "1px solid rgba(139,92,246,0.2)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="20" height="18" rx="2" stroke="#5B2D8E" strokeWidth="1.8" />
                <line x1="7" y1="3" x2="7" y2="21" stroke="#5B2D8E" strokeWidth="1.4" />
                <line x1="12" y1="3" x2="12" y2="21" stroke="#5B2D8E" strokeWidth="1.4" />
                <line x1="17" y1="3" x2="17" y2="21" stroke="#5B2D8E" strokeWidth="1.4" />
                <line x1="2" y1="8" x2="22" y2="8" stroke="#5B2D8E" strokeWidth="1.4" />
                <line x1="2" y1="13" x2="22" y2="13" stroke="#5B2D8E" strokeWidth="1.4" />
                <line x1="2" y1="18" x2="22" y2="18" stroke="#5B2D8E" strokeWidth="1.4" />
              </svg>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif", color: "#5B2D8E" }}
              >
                Add-On: Window Screen Cleaning
              </h3>
            </div>
            <p className="text-sm mb-5" style={{ color: "#64748B" }}>
              Available on any plan. Screens are removed, hand-washed, dried, and reinstalled.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {SCREEN_TIERS.map((s) => (
                <button
                  key={s.price}
                  onClick={() => setScreenAddon(s.price)}
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 border-2"
                  style={
                    screenAddon === s.price
                      ? { backgroundColor: "#5B2D8E", color: "white", borderColor: "#5B2D8E" }
                      : { backgroundColor: "white", color: "#5B2D8E", borderColor: "rgba(91,45,142,0.25)" }
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>

            {screenAddon > 0 && (
              <p className="mt-4 text-xs" style={{ color: "#8B5CF6" }}>
                ✦ Screen add-on price is reflected in the plan totals above.
              </p>
            )}
          </div>
        </div>

        <p className="text-center text-xs mt-2" style={{ color: "#94A3B8" }}>
          Pane count refers to individual glass panels, not window units. Final pricing confirmed before any service begins.
        </p>

      </div>
    </section>
  );
}
