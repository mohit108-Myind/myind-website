"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PrintPdfButton } from "@/components/print-pdf-button";

const printPdf = () => {
  if (typeof window !== "undefined") {
    window.print();
  }
};

export const metadata = {
  title: "ELARA Studio — Case Study | MYIND Media",
  description:
    "Minimalist apparel brand case study: full-funnel strategy, creative testing, and measurable growth driven by MYIND Media.",
};

const stats = [
  { label: "ROAS", value: "4.8×" },
  { label: "CPA Reduction", value: "−25%" },
  { label: "Remarketing Pool", value: "50k" },
];

const budget = [
  {
    channel: "Meta Ads (IG + FB)",
    objective: "Awareness & Conversion",
    budget: "₹1,00,000",
  },
  {
    channel: "Google Search + Shopping",
    objective: "High-intent traffic",
    budget: "₹60,000",
  },
  {
    channel: "YouTube Shorts",
    objective: "Awareness",
    budget: "₹40,000",
  },
];

const highlights = [
  "Lifestyle UGC video ads drove 2.5× higher CTR vs. static.",
  "Google Shopping accounted for ~20% conversions at lowest CPA.",
  "BOFU dynamic product ads (DPA) maintained 5.5× ROAS on returning users.",
];

export default function ElaraStudioCaseStudy() {
  // ✅ Trigger browser print dialog (user then “Save as PDF”)
  const handlePrint = () => window.print();

  return (
    // ✅ Mark this whole page as the printable area
    <main id="case-study" className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/portfolio/elara-studio.jpg" // 1600×900 image you created
            alt="ELARA Studio — minimalist urban apparel"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-6 -mt-14 relative z-10">
          <div className="rounded-2xl bg-white/95 backdrop-blur p-6 shadow-lg ring-1 ring-zinc-100">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#101828]">
                  ELARA Studio
                </h1>
                <p className="text-zinc-600 mt-1">
                  Minimalist, high-quality everyday wear (Fashion · D2C)
                </p>
              </div>
              {/* ✅ Actions – hidden in PDF via print:hidden */}
              <div className="flex gap-3 print:hidden">
                <PrintPdfButton />

                <Button asChild className="rounded-2xl">
                  <a href="/#contact">Book a Discovery Call</a>
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-[#F9FAFB] p-4 ring-1 ring-zinc-100 avoid-break"
                >
                  <div className="text-sm text-zinc-500">{s.label}</div>
                  <div className="text-2xl font-semibold text-[#101828]">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 space-y-12">
        {/* Challenge */}
        <div className="grid gap-6 md:grid-cols-3 avoid-break">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#101828]">
              The Challenge
            </h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              ELARA Studio had strong visual identity and influencer buzz—but
              sales lagged. Conversion rate was under 1.2%, remarketing was
              fragmented, and awareness relied too heavily on collaborations.
              The brand needed a repeatable, measurable growth engine.
            </p>
          </div>
          <aside className="rounded-xl border border-zinc-200 p-4 bg-[#F9FAFB]">
            <h3 className="text-sm font-semibold text-zinc-700">
              Project Scope
            </h3>
            <ul className="mt-2 text-sm text-zinc-600 space-y-1">
              <li>• 45-day growth sprint</li>
              <li>• Performance creative testing</li>
              <li>• Meta + Google + YouTube</li>
              <li>• Remarketing infrastructure</li>
            </ul>
          </aside>
        </div>

        {/* Strategy / Funnel */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">
            Strategy & Funnel
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded">
                TOFU
              </div>
              <h3 className="mt-3 font-semibold">Awareness</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Lifestyle UGC Reels: “Luxury that works as hard as you do.”
                10-sec office-to-evening transitions showcasing fit & movement.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: Reach, CPM, CTR
              </div>
            </div>
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-cyan-700 bg-cyan-50 inline-block px-2 py-1 rounded">
                MOFU
              </div>
              <h3 className="mt-3 font-semibold">Consideration</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Carousel “From desk to dinner” looks + product pages optimized;
                email signup for size guides and styling tips.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: Eng%, ATC%, Leads
              </div>
            </div>
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-fuchsia-700 bg-fuchsia-50 inline-block px-2 py-1 rounded">
                BOFU
              </div>
              <h3 className="mt-3 font-semibold">Conversion</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Dynamic Product Ads to viewers and cart abandoners; limited-time
                incentives, and warm-audience lookalikes.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: ROAS, CVR, CPA
              </div>
            </div>
          </div>
        </div>

        {/* Creatives placeholders */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">
            Ad Creative Samples
          </h2>
          <p className="mt-2 text-zinc-600 text-sm">
            Creative concepts used in the campaign.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {/* 🎥 UGC Reel — “Desk to Dinner” */}
            <div className="relative rounded-xl ring-1 ring-zinc-200 bg-white p-3">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[2rem] border border-zinc-300 bg-black overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-24 rounded-b-2xl bg-black z-20" />
                <video
                  id="elaraReel"
                  src="/portfolio/elara-ugc-reel.mp4"
                  poster="/portfolio/elara-ugc-poster.jpg"
                  playsInline
                  preload="metadata"
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="pointer-events-none absolute left-3 bottom-3 z-10 text-white">
                  <div className="text-xs opacity-80">@elarastudio</div>
                  <div className="text-sm font-medium">
                    “Desk to Dinner” — Elara. For you!
                  </div>
                </div>
              </div>
            </div>

            {/* 📊 Carousel Creative — “3 Looks, 1 Blazer” */}
            <div className="relative rounded-xl ring-1 ring-zinc-200 bg-white p-3">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[2rem] border border-zinc-300 bg-black overflow-hidden">
                {/* notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-24 rounded-b-2xl bg-black z-20" />

                {/* horizontal scroll carousel */}
                <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full">
                  {[
                    "/portfolio/elara-carousel-1.jpg",
                    "/portfolio/elara-carousel-2.jpg",
                    "/portfolio/elara-carousel-3.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-full h-full snap-center relative"
                    >
                      <img
                        src={src}
                        alt={`Elara carousel ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

                {/* caption */}
                <div className="pointer-events-none absolute left-3 bottom-3 z-10 text-white">
                  <div className="text-xs opacity-80">@elarastudio</div>
                  <div className="text-sm font-medium">
                    “3 Looks, 1 Blazer” — Carousel Ad
                  </div>
                </div>
              </div>
            </div>

            {/* 🛒 DPA Retargeting — “Your Cart Misses You” */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl ring-1 ring-zinc-200 bg-black">
              <img
                src="/portfolio/elara-dpa-retargeting.jpg"
                alt="Elara Studio DPA Retargeting Ad"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

              {/* caption */}
              <div className="absolute bottom-3 left-3 z-10 text-white">
                <p className="text-xs opacity-80">@elarastudio</p>
                <p className="text-sm font-medium">
                  “Your Cart Misses You” — DPA Retargeting Ad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget table */}
        <div className="grid gap-6 md:grid-cols-2 avoid-break">
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">
              Budget & Channel Split
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F9FAFB] text-zinc-600">
                  <tr>
                    <th className="px-4 py-3">Channel</th>
                    <th className="px-4 py-3">Objective</th>
                    <th className="px-4 py-3">Budget</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {budget.map((row) => (
                    <tr key={row.channel}>
                      <td className="px-4 py-3">{row.channel}</td>
                      <td className="px-4 py-3">{row.objective}</td>
                      <td className="px-4 py-3">{row.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results mini chart (CSS bars) */}
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">
              Performance Snapshot (45 days)
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "CTR Trend", pct: 80 },
                { label: "CPC Reduction", pct: 40 },
                { label: "ROAS Growth", pct: 90 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm text-zinc-600 mb-1">
                    <span>{m.label}</span>
                    <span>{m.pct}%</span>
                  </div>
                  <div className="h-2 rounded bg-zinc-100">
                    <div
                      className="h-2 rounded bg-[#00AEEF]"
                      style={{ width: `${m.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs text-zinc-500">
                *Results may vary by brand, channel and audience.
              </p>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">
            Key Insights
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-700">
            {highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-[#F9FAFB] p-6 ring-1 ring-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 avoid-break">
          <div>
            <h3 className="text-xl font-semibold text-[#101828]">
              Want results like this for your brand?
            </h3>
            <p className="text-zinc-600 mt-1">
              Let’s map a full-funnel plan for your product line in 30 minutes.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/#contact">Talk to MYIND</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
