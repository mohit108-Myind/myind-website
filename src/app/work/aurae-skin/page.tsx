// src/app/work/aurae-skin/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "AURAĒ SKIN — Case Study | MYIND Media",
  description:
    "European clean beauty brand: full-funnel strategy with UGC, localization, and retention by MYIND Media.",
};

const heroStats = [
  { label: "ROAS (M3)", value: "4.8×" },
  { label: "CAC", value: "↓42%" },
  { label: "Leads", value: "10k+" },
  { label: "Email Rev.", value: "18%" },
];

export default function AuraeSkinCaseStudy() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/portfolio/aurae-skin.jpg"
            alt="AURAĒ SKIN — clean beauty products"
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
                  AURAĒ SKIN
                </h1>
                <p className="text-zinc-600 mt-1">
                  Clean Beauty · EU Markets (FR · DE · NL)
                </p>
              </div>
              <div className="flex gap-3">
                <a
                 
                  className="inline-flex items-center rounded-lg bg-[#101828] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
                  download
                >
                  Download PDF Case Study
                </a>
                <Button asChild className="rounded-2xl">
  <a href="/#contact">Book a Discovery Call</a>
</Button>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {heroStats.map((s) => (
                <div key={s.label} className="rounded-xl bg-[#F9FAFB] p-4 ring-1 ring-zinc-100">
                  <div className="text-sm text-zinc-500">{s.label}</div>
                  <div className="text-2xl font-semibold text-[#101828]">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 space-y-12">
        {/* Challenge */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#101828]">The Challenge</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              Strong early adoption yet unprofitable scaling across Europe. ROAS
              ~1.8×, cart abandonment 72%, limited funnel segmentation, and
              underused email automation. Needed a full-funnel system with clear
              attribution and localized creative.
            </p>
          </div>
          <aside className="rounded-xl border border-zinc-200 p-4 bg-[#F9FAFB]">
            <h3 className="text-sm font-semibold text-zinc-700">Project Scope</h3>
            <ul className="mt-2 text-sm text-zinc-600 space-y-1">
              <li>• 90-day EU growth program</li>
              <li>• Meta + Google + TikTok</li>
              <li>• Influencer UGC</li>
              <li>• Klaviyo automations</li>
            </ul>
          </aside>
        </div>

        {/* Strategy */}
        <div>
          <h2 className="text-2xl font-semibold text-[#101828]">Strategy & Funnel</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-4">
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-emerald-700 bg-emerald-50 inline-block px-2 py-1 rounded">TOFU</div>
              <h3 className="mt-3 font-semibold">Awareness</h3>
              <p className="mt-2 text-sm text-zinc-700">
                UGC Reels + TikTok showing “clean, Parisian routine”. Influencer seeding with micro-creators.
              </p>
              <div className="mt-3 text-xs text-zinc-500">KPIs: Reach, CPM, CTR</div>
            </div>
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-cyan-700 bg-cyan-50 inline-block px-2 py-1 rounded">MOFU</div>
              <h3 className="mt-3 font-semibold">Consideration</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Carousel “5 dermatologist-approved reasons” + localized copy (FR/DE/NL).
              </p>
              <div className="mt-3 text-xs text-zinc-500">KPIs: Eng%, ATC%, Leads</div>
            </div>
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-fuchsia-700 bg-fuchsia-50 inline-block px-2 py-1 rounded">BOFU</div>
              <h3 className="mt-3 font-semibold">Conversion</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Dynamic Product Ads + Google Search for high-intent terms; pop-up 10% first-order incentive.
              </p>
              <div className="mt-3 text-xs text-zinc-500">KPIs: ROAS, CVR, CAC</div>
            </div>
            <div className="rounded-xl p-5 ring-1 ring-zinc-200">
              <div className="text-xs font-medium text-amber-700 bg-amber-50 inline-block px-2 py-1 rounded">RETENTION</div>
              <h3 className="mt-3 font-semibold">Loyalty</h3>
              <p className="mt-2 text-sm text-zinc-700">
                “AURAĒ Insider” program; 3-email drip (Ingredients → Stories → Offer); NPS in post-purchase.
              </p>
              <div className="mt-3 text-xs text-zinc-500">KPIs: LTV, Repeat Orders</div>
            </div>
          </div>
        </div>

        {/* Creatives placeholders */}
        {/* Ad Creative Samples */}
<div>
  <h2 className="text-2xl font-semibold text-[#101828]">Ad Creative Samples</h2>
  <p className="mt-2 text-zinc-600 text-sm">
    Creative concepts used in the campaign.
  </p>

  <div className="mt-5 grid gap-4 md:grid-cols-3">
    
    {/* 🎥 AURAĒ UGC Reel – 16:9 cinematic format */}
    <div className="aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-zinc-200 bg-black relative group">
      <video
        id="auraeReel"
        src="/portfolio/aurae-ugc-reel.mp4"
        poster="/portfolio/aurae-ugc-poster.jpg"
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover rounded-xl"
      />
      {/* Caption overlay */}
      <div className="absolute left-4 bottom-3 z-10 text-white">
        <div className="text-xs opacity-80">@auraeskin</div>
        <div className="text-sm font-medium">UGC Reel — “Glow Quietly”</div>
      </div>
      {/* Gradient fade for better readability */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>

    {/* 📊 Carousel Creative Placeholder */}
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-zinc-200 bg-[#F4F4F4]">
      <img
        src="/portfolio/aurae-2nd-card.jpg"
        alt="AURAĒ Skin — Instant Hydration You Can Feel. Get 2 samples free on first buy!"
        className="w-full h-full object-cover"
      />
      <div className="pointer-events-none absolute left-4 bottom-3 z-10 text-white drop-shadow">
        <div className="text-xs opacity-80">@auraeskin</div>
        <div className="text-sm font-medium">Instant Hydration Offer Creative</div>
      </div>
    </div>

    {/* 🛒 DPA Retargeting Placeholder */}
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-zinc-200 bg-[#F4F4F4]">
      <img
        src="/portfolio/aurae-3rd-card.jpg"
        alt="AURAĒ Skin — Still thinking about glowing skin? Shop Now."
        className="w-full h-full object-cover"
      />
      <div className="pointer-events-none absolute left-4 bottom-3 z-10 text-white drop-shadow">
        <div className="text-xs opacity-80">@auraeskin</div>
        <div className="text-sm font-medium">Retargeting — “Still thinking about glowing skin?”</div>
      </div>
    </div>
  </div>
  </div>



        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">Results (90 days)</h2>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F9FAFB] text-zinc-600">
                  <tr>
                    <th className="px-4 py-3">KPI</th>
                    <th className="px-4 py-3">Month 1</th>
                    <th className="px-4 py-3">Month 3</th>
                    <th className="px-4 py-3">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-4 py-3">ROAS</td>
                    <td className="px-4 py-3">2.1×</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">4.8×</td>
                    <td className="px-4 py-3">+129%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">CAC</td>
                    <td className="px-4 py-3">Baseline</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">↓42%</td>
                    <td className="px-4 py-3">Efficiency</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Leads</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">10k+</td>
                    <td className="px-4 py-3">Email growth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Email Revenue</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 font-medium text-[#101828]">18%</td>
                    <td className="px-4 py-3">Retention</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mini bars */}
          <div>
            <h2 className="text-2xl font-semibold text-[#101828]">Performance Snapshot</h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "CTR (UGC vs Static)", pct: 180 },
                { label: "Cart Recovery via Email", pct: 22 },
                { label: "Repeat Orders (Insider)", pct: 17 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm text-zinc-600 mb-1">
                    <span>{m.label}</span>
                    <span>{m.pct}%</span>
                  </div>
                  <div className="h-2 rounded bg-zinc-100">
                    <div className="h-2 rounded bg-[#F37021]" style={{ width: `${Math.min(m.pct, 100)}%` }} />
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
        <div>
          <h2 className="text-2xl font-semibold text-[#101828]">Key Insights</h2>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• Before/After carousels delivered 2.8× higher CTR than product-only visuals.</li>
            <li>• UGC + localization produced the lowest CPC and strongest engagement.</li>
            <li>• Email automations contributed 18% of revenue in the period.</li>
            <li>• TikTok scaled TOFU reach but converted best via Meta + Search retargeting.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-[#F9FAFB] p-6 ring-1 ring-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#101828]">
              Want a clean-beauty growth plan tailored to your market?
            </h3>
            <p className="text-zinc-600 mt-1">Book a 30-minute session with MYIND.</p>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
  <Link href="/#contact">Talk to MYIND</Link>
</Button>
        </div>
      </section>
    </main>
  );
}
