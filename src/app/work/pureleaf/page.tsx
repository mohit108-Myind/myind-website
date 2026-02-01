"use client";

// src/app/work/pureleaf/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PrintPdfButton } from "@/components/print-pdf-button";

const printPdf = () => {
  if (typeof window !== "undefined") {
    window.print();
  }
};



const heroStats = [
  { label: "ROAS", value: "3.9×" },
  { label: "CPA", value: "↓18%" },
  { label: "Subscriptions", value: "+42%" },
  { label: "Email CTR", value: "7.8%" },
];

export default function PureLeafCaseStudy() {
  // ✅ Trigger browser print dialog → user chooses “Save as PDF”
  const handlePrint = () => window.print();

  return (
    // ✅ This whole page becomes the printable area
    <main id="case-study" className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/portfolio/pureleaf.jpg" // 1600×900, edited 2-bottle image
            alt="PureLeaf Nutrition — plant-based supplements"
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
                  PureLeaf Nutrition
                </h1>
                <p className="text-zinc-600 mt-1">
                  Building a plant-powered performance funnel (Wellness · D2C)
                </p>
              </div>

              {/* ✅ Buttons hidden in the PDF (print:hidden) */}
              <div className="flex gap-3 print:hidden">
               <PrintPdfButton />
                <Button asChild className="rounded-2xl">
                  <a href="/#contact">Book a Discovery Call</a>
                </Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {heroStats.map((s) => (
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

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 space-y-12">
        {/* Challenge */}
        <div className="grid gap-6 md:grid-cols-3 avoid-break">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#101828]">
              The Challenge
            </h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              PureLeaf had strong organic traction but struggled to scale paid
              media efficiently. Meta ads underperformed, audiences overlapped
              and drove up CPC, UGC variety was limited, and remarketing
              retention weakened after 7 days. Email automation also showed low
              engagement.
            </p>
          </div>
          <aside className="rounded-xl border border-zinc-200 p-4 bg-[#F9FAFB]">
            <h3 className="text-sm font-semibold text-zinc-700">Project Scope</h3>
            <ul className="mt-2 text-sm text-zinc-600 space-y-1">
              <li>• 60-day sprint</li>
              <li>• Meta + Google + YouTube</li>
              <li>• UGC creative testing</li>
              <li>• Klaviyo automations</li>
            </ul>
          </aside>
        </div>

        {/* Strategy */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">Strategy</h2>
          <p className="mt-3 text-zinc-700">
            Build a scalable evergreen funnel with MYIND’s{" "}
            <span className="font-medium">
              Creative + Performance + Analytics
            </span>{" "}
            framework.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-4">
            {/* TOFU */}
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-green-700 bg-green-50 inline-block px-2 py-1 rounded">
                TOFU
              </div>
              <h3 className="mt-3 font-semibold">Awareness</h3>
              <p className="mt-2 text-sm text-zinc-700">
                UGC-style reels showing morning smoothie routines and lifestyle
                usage.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: Reach, CPM, CTR
              </div>
            </div>
            {/* MOFU */}
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-cyan-700 bg-cyan-50 inline-block px-2 py-1 rounded">
                MOFU
              </div>
              <h3 className="mt-3 font-semibold">Consideration</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Benefit + science carousels retargeting product-page viewers and
                ATC users.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: Eng%, ATC%, Leads
              </div>
            </div>
            {/* BOFU */}
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-fuchsia-700 bg-fuchsia-50 inline-block px-2 py-1 rounded">
                BOFU
              </div>
              <h3 className="mt-3 font-semibold">Conversion</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Google Shopping + branded search; DPA to cart and checkout
                abandoners.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: ROAS, CVR, CPA
              </div>
            </div>
            {/* Retention */}
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-amber-700 bg-amber-50 inline-block px-2 py-1 rounded">
                RETENTION
              </div>
              <h3 className="mt-3 font-semibold">Loyalty</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Klaviyo flows: Welcome, Abandoned Cart, Reorder Reminder,
                “Subscribe & Save”.
              </p>
              <div className="mt-3 text-xs text-zinc-500">
                KPIs: LTV, Repeat Orders
              </div>
            </div>
          </div>
        </div>

        {/* Execution */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">Execution</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl ring-1 ring-zinc-200 p-5">
              <h3 className="font-semibold">Funnel Setup</h3>
              <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                <li>• MYIND BM + GA4 + Meta Pixel integration</li>
                <li>• Campaign structure: Awareness → Consideration → Conversion</li>
                <li>• Clean audience exclusions to reduce CPC overlap</li>
              </ul>
            </div>
            <div className="rounded-xl ring-1 ring-zinc-200 p-5">
              <h3 className="font-semibold">Creative Testing</h3>
              <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                <li>• 10 short-form video variants</li>
                <li>• Dynamic copy + Advantage+ placements</li>
                <li>• Cross-sell carousels (Ashwagandha → Omega-3)</li>
              </ul>
            </div>
            <div className="rounded-xl ring-1 ring-zinc-200 p-5">
              <h3 className="font-semibold">Remarketing & CRM</h3>
              <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                <li>• ATC, PDP viewers, checkout abandoners</li>
                <li>• Email/SMS automations; single-CTA landing page</li>
                <li>• “Subscribe & Save” to lift retention</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ad Creative Samples */}
        <div className="avoid-break">
          <h2 className="text-2xl font-semibold text-[#101828]">
            Ad Creative Samples
          </h2>
          <p className="mt-2 text-zinc-600 text-sm">
            Creative concepts used in the campaign.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {/* 🎥 PureLeaf UGC Reel — Instagram format */}
            <div className="relative rounded-xl ring-1 ring-zinc-200 bg-white p-3">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[2rem] border border-zinc-300 bg-black overflow-hidden">
                {/* notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-24 rounded-b-2xl bg-black z-20" />

                <video
                  id="pureleafReel"
                  src="/portfolio/pureleaf-ugc-reel.mp4"
                  playsInline
                  preload="metadata"
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                {/* caption */}
                <div className="pointer-events-none absolute left-3 bottom-3 z-10 text-white">
                  <div className="text-xs opacity-80">@pureleaf</div>
                  <div className="text-sm font-medium">
                    Narrated UGC Reel — Morning Ritual
                  </div>
                </div>
              </div>
            </div>

            {/* 📊 Carousel Creative — Omega-3 & Bacopa benefits */}
            <div className="relative rounded-xl ring-1 ring-zinc-200 bg-white p-3">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[2rem] border border-zinc-300 bg-black overflow-hidden">
                {/* notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-24 rounded-b-2xl bg-black z-20" />

                {/* horizontal carousel */}
                <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                  {[
                    "/portfolio/pureleaf-carousel-1.jpg",
                    "/portfolio/pureleaf-carousel-2.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-full h-full snap-center"
                    >
                      <img
                        src={src}
                        alt={
                          i === 0
                            ? "PureLeaf Omega-3 benefits"
                            : "PureLeaf Bacopa benefits"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* caption */}
                <div className="pointer-events-none absolute left-3 bottom-3 z-10 text-white">
                  <div className="text-xs opacity-80">@pureleaf</div>
                  <div className="text-sm font-medium">
                    Benefits Carousel — Omega-3 &amp; Bacopa
                  </div>
                </div>

                {/* gradient for text legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* 🛒 DPA Retargeting — Cart Recovery */}
            <div className="relative rounded-xl ring-1 ring-zinc-200 bg-white p-3">
              <div className="relative mx-auto w-full aspect-[9/16] rounded-[2rem] border border-zinc-300 bg-black overflow-hidden">
                {/* notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-4 w-24 rounded-b-2xl bg-black z-20" />

                {/* image */}
                <img
                  src="/portfolio/pureleaf-retargeting.jpg"
                  alt="PureLeaf Retargeting Ad Creative"
                  className="w-full h-full object-cover rounded-[2rem]"
                  loading="lazy"
                />

                {/* gradient for legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                {/* caption */}
                <div className="absolute left-3 bottom-3 text-white z-10">
                  <div className="text-xs opacity-80">@pureleaf</div>
                  <div className="text-sm font-medium">
                    DPA Retargeting — Cart Recovery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 avoid-break">
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">
              Results (60 days)
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F9FAFB] text-zinc-600">
                  <tr>
                    <th className="px-4 py-3">KPI</th>
                    <th className="px-4 py-3">Before</th>
                    <th className="px-4 py-3">After</th>
                    <th className="px-4 py-3">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3">ROAS</td>
                    <td className="px-4 py-3">2.1×</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">
                      3.9×
                    </td>
                    <td className="px-4 py-3">+85%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">CPA</td>
                    <td className="px-4 py-3">₹422</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">
                      ₹346
                    </td>
                    <td className="px-4 py-3">↓18%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Conversion Rate</td>
                    <td className="px-4 py-3">1.9%</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">
                      3.2%
                    </td>
                    <td className="px-4 py-3">+68%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Email CTR</td>
                    <td className="px-4 py-3">4.3%</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">
                      7.8%
                    </td>
                    <td className="px-4 py-3">+81%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Subscription Signups</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">
                      +42%
                    </td>
                    <td className="px-4 py-3">Lift</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Simple bars */}
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">
              Performance Snapshot
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "CTR Lift (Video vs Static)", pct: 270 },
                { label: "Checkout Conversion Lift", pct: 23 },
                { label: "Repeat Orders (Subscribe & Save)", pct: 42 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm text-zinc-600 mb-1">
                    <span>{m.label}</span>
                    <span>{m.pct}%</span>
                  </div>
                  <div className="h-2 rounded bg-zinc-100">
                    <div
                      className="h-2 rounded bg-[#8DC63F]"
                      style={{ width: `${Math.min(m.pct, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs text-zinc-500">
                *Results may vary based on brand, channel, and audience.
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
            <li>• Video-first creatives outperformed static by 2.7× CTR.</li>
            <li>
              • Meta + Google synergy captured multi-touch conversions
              efficiently.
            </li>
            <li>• “Subscribe & Save” increased retention and LTV.</li>
            <li>
              • A single-CTA landing page improved checkout completion by 23%.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-[#F9FAFB] p-6 ring-1 ring-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 avoid-break">
          <div>
            <h3 className="text-xl font-semibold text-[#101828]">
              Want results like this for your wellness brand?
            </h3>
            <p className="text-zinc-600 mt-1">
              Let’s map a full-funnel plan in a 30-minute discovery call.
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
