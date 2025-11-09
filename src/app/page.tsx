"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // if you're using <Link>
import clsx from "clsx";

import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Search,
  LineChart,
  Target,
  Rocket,
  Megaphone,
  BarChart3,
  Users2,
  PieChart,
  PhoneCall,
  Mail,
  Globe2,
  CheckCircle2,
  MapPin,
  Clock,
  ExternalLink,
  Building2,
  PenTool,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";



/**
 * MYIND Website — Visual‑first, Creative + Performance + Analytics
 * Stack: Next.js App Router, Tailwind, shadcn/ui, lucide-react, framer-motion
 * Paste this file into: /src/app/page.tsx
 */

// Brand Palette
const palette = {
  coal: "#101828",
  cyan: "#00AEEF",
  green: "#8DC63F",
  yellow: "#FFC20E",
  orange: "#F37021",
  magenta: "#EC008C",
  gray: "#F4F4F4",
};

const Section = ({ id, children, className = "" }: any) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }: any) => (
  <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight"
      style={{ color: palette.cyan }}
    >
      {value}
    </motion.div>
    <p className="mt-2 text-sm md:text-base text-muted-foreground">{label}</p>
  </div>
);

const Pill = ({ children, color = palette.cyan }: any) => (
  <span
    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
    style={{ backgroundColor: `${color}1A`, color }}
  >
    {children}
  </span>
);

const VisualPlaceholder = ({
  label = "Visual Placeholder",
  aspect = "aspect-[16/9]",
}: {
  label?: string;
  aspect?: string;
}) => (
  <div className={`w-full ${aspect} rounded-2xl border bg-[rgba(0,0,0,0.03)] grid place-items-center`}
       style={{ borderColor: `${palette.cyan}40` }}>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <ImageIcon className="h-4 w-4"/>
      {label}
    </div>
  </div>
);

function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);

  const onPlayClick = async () => {
    if (!videoRef.current) return;
    try {
      // user gesture allows audio
      videoRef.current.muted = false;
      setMuted(false);
      await videoRef.current.play();
      setPlaying(true);
    } catch {
      // fallback if browser still blocks: play muted
      videoRef.current.muted = true;
      setMuted(true);
      await videoRef.current.play();
      setPlaying(true);
    }
  };

  const onPauseClick = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setPlaying(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full md:min-h-[520px] bg-black">
      {/* Video (no autoplay; we start it with user click) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        poster="/images/hero-placeholder.jpg"
        onCanPlay={() => setReady(true)}
        onError={() => setError('Video failed to load')}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Center Play button (only before playback) */}
      {!playing && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={onPlayClick}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/90 hover:bg-white text-[#101828] shadow-lg backdrop-blur"
            aria-label="Play hero video"
          >
            <Play className="h-5 w-5" />
            <span>Play</span>
          </button>
        </div>
      )}

      {/* Bottom-right controls when playing */}
      {playing && !error && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            onClick={onPauseClick}
            className="rounded-full bg-white/90 hover:bg-white text-[#101828] p-2 shadow"
            aria-label="Pause"
          >
            <Pause className="h-5 w-5" />
          </button>
          <button
            onClick={toggleMute}
            className="rounded-full bg-white/90 hover:bg-white text-[#101828] p-2 shadow"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      )}

      {/* Loading / Error states (replaces the always-on “Hero Video Unavailable”) */}
      {!ready && !error && (
        <div className="absolute inset-0 grid place-items-center text-white/70 text-sm">
          Loading video…
        </div>
      )}
      {error && (
        <div className="absolute inset-0 grid place-items-center text-white/80 text-sm">
          Hero video unavailable
        </div>
      )}
    </div>
  );
}


// ✅ Navbar Component (Inline)
// ✅ Navbar Component (Inline)
// ✅ Navbar (dark, wider, bigger logo, readable links)
const Navbar = () => {
  const navColor = "#191C25"; // MYIND dark

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-sm backdrop-blur-md"
      style={{ backgroundColor: navColor }}
    >
      <div className="mx-auto flex items-center justify-between max-w-[110rem] px-10 py-3">
        {/* ---- Left: Logo (bigger) ---- */}
        {/* ---- Left: Logo (larger but navbar height unchanged) ---- */}
<Link href="/" className="flex items-center gap-3">
  <div className="relative w-24 h-24 flex items-center">
    <Image
      src="/logo.png"
      alt="MYIND Logo"
      fill
      className="object-contain select-none scale-125" // makes logo visually bigger
      priority
    />
  </div>
  <span className="text-xl font-bold tracking-tight text-white">MYIND MEDIA MARKETING</span>
</Link>


        {/* ---- Right: Links (force light text on dark bg) ---- */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Work
          </a>
          <a href="#process" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Process
          </a>
          <a href="#about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* ---- CTA ---- */}
        <Button
          asChild
          size="sm"
          className="rounded-xl bg-[#00AEEF] hover:bg-[#0096CF] text-white px-6 py-2"
        >
          <a href="#contact">Let’s Talk</a>
        </Button>
      </div>
    </nav>
  );
};




// ===================== HERO (replace entire block) =====================
// -------------------- HERO (replace your entire Hero) --------------------
const Hero = () => {
  // Helper: animated number (green)
  const AnimatedNumber = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const [count, setCount] = React.useState(0);
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
      let current = 0;
      const fps = 60;
      const total = Math.max(1, Math.round(duration * fps));
      const step = value / total;
      const id = setInterval(() => {
        current += step;
        if (current >= value) {
          current = value;
          clearInterval(id);
          setDone(true);
        }
        setCount(current);
      }, 1000 / fps);
      return () => clearInterval(id);
    }, [value, duration]);
    return (
      <motion.span
        animate={{ color: done ? "#8DC63F" : "#9CA3AF" }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {Math.floor(count)}
      </motion.span>
    );
  };

  // Glitch-proof Typewriter with highlights (no innerHTML)
  const Typewriter = ({
    text,
    highlights = [],
    speed = 22,
    pauseBetween = 900,
  }: {
    text: string;
    highlights?: string[];
    speed?: number;
    pauseBetween?: number;
  }) => {
    const buildSegments = React.useCallback((para: string) => {
      if (!highlights.length) return [{ text: para, highlight: false }];
      const ranges: { start: number; end: number }[] = [];
      highlights.forEach((h) => {
        if (!h) return;
        const re = new RegExp(h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        let m;
        while ((m = re.exec(para))) ranges.push({ start: m.index, end: m.index + m[0].length });
      });
      if (!ranges.length) return [{ text: para, highlight: false }];
      ranges.sort((a, b) => a.start - b.start);
      const merged: typeof ranges = [];
      for (const r of ranges) {
        const last = merged[merged.length - 1];
        if (!last || r.start > last.end) merged.push({ ...r });
        else last.end = Math.max(last.end, r.end);
      }
      const segs: { text: string; highlight: boolean }[] = [];
      let cursor = 0;
      merged.forEach((r) => {
        if (cursor < r.start) segs.push({ text: para.slice(cursor, r.start), highlight: false });
        segs.push({ text: para.slice(r.start, r.end), highlight: true });
        cursor = r.end;
      });
      if (cursor < para.length) segs.push({ text: para.slice(cursor), highlight: false });
      return segs;
    }, [highlights]);

    const paragraphs = React.useMemo(() => {
      const parts = text.split(/\n\s*\n/);
      return parts.map((p) => buildSegments(p));
    }, [text, buildSegments]);

    const [progress, setProgress] = React.useState({ p: 0, s: 0, c: 0, done: false });
    const [started, setStarted] = React.useState(false);
    const alive = React.useRef(true);
    React.useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);

    React.useEffect(() => {
      if (!started) return;
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      (async () => {
        for (let p = 0; p < paragraphs.length; p++) {
          const segs = paragraphs[p];
          for (let s = 0; s < segs.length; s++) {
            const seg = segs[s].text;
            for (let c = 1; c <= seg.length; c++) {
              if (!alive.current) return;
              setProgress({ p, s, c, done: false });
              await sleep(speed);
            }
          }
          if (p < paragraphs.length - 1) await sleep(pauseBetween);
        }
        setProgress((prev) => ({ ...prev, done: true }));
      })();
    }, [started, paragraphs, speed, pauseBetween]);

    const renderParagraph = (idx: number) => {
      const segs = paragraphs[idx];
      return (
        <span key={idx} className="block">
          {segs.map((seg, sIdx) => {
            let show = "";
            if (idx < progress.p) show = seg.text;
            else if (idx > progress.p) show = "";
            else {
              if (sIdx < progress.s) show = seg.text;
              else if (sIdx === progress.s) show = seg.text.slice(0, progress.c);
              else show = "";
            }
            if (!show) return null;
            return seg.highlight ? (
              <span key={sIdx} className="font-bold italic">{show}</span>
            ) : (
              <span key={sIdx}>{show}</span>
            );
          })}
        </span>
      );
    };

    return (
      <motion.p
        onViewportEnter={() => setStarted((v) => (v ? v : true))}
        className="mt-5 text-base md:text-lg text-muted-foreground max-w-prose leading-8"
      >
        {paragraphs.map((_, idx) => (
          <React.Fragment key={idx}>
            {renderParagraph(idx)}
            {idx < paragraphs.length - 1 && <><br /><br /></>}
          </React.Fragment>
        ))}
        {!progress.done && (
          <span className="ml-1 inline-block align-[-2px] w-[1px] h-[1.25em] bg-current animate-pulse" />
        )}
      </motion.p>
    );
  };

  return (
    <Section
      className="
        pt-[120px] md:pt-[140px]   /* ensures navbar doesn't overlap */
      "
    >
      <Container className="grid gap-8 md:gap-14 lg:gap-16 md:grid-cols-2 md:items-stretch">
        {/* Left column */}
        <div className="md:self-stretch flex flex-col">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: palette.coal }}
          >
            We help brands get noticed, sell more,
            and stay unforgettable!
          </h1>

          <div className="leading-snug text-gray-500 text-base md:text-lg">
  <Typewriter
    text={`A full-stack social media marketing agency for ambitious D2C brands.
We bring together performance marketing, creative storytelling, and analytics to deliver growth that looks good and performs even better.`}
    highlights={["performance marketing", "creative storytelling", "analytics"]}
    speed={22}
    pauseBetween={1000}
  />
</div>


          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-6"
              style={{ backgroundColor: palette.cyan, color: "#001018" }}
            >
              <a href="#contact">Let’s build your next campaign</a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-2xl px-6">
              <a href="#work" className="flex items-center gap-2">
                See our work <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Metrics block — spaced from CTAs, with divider + left shift */}
          <div className="mt-6 lg:mt-14 xl:mt-16 max-w-3xl">
            <div className="pt-6 md:pt-8 border-t border-slate-200/70">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 text-left sm:ml-4">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#8DC63F]">
                    <AnimatedNumber value={3} />
                    <span>x+</span>
                  </div>
                  <p className="mt-1 text-sm md:text-base text-[#8DC63F] whitespace-nowrap">
                    Avg. ROAS Uplift
                  </p>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#8DC63F]">
                    <AnimatedNumber value={23} />
                    <span>%+</span>
                  </div>
                  <p className="mt-1 text-sm md:text-base text-[#8DC63F] whitespace-nowrap">
                    Avg. CTR Uplift
                  </p>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#8DC63F]">
                    <span>$</span>
                    <AnimatedNumber value={30} />
                    <span>K+</span>
                  </div>
                  <p className="mt-1 text-sm md:text-base text-[#8DC63F] whitespace-nowrap">
                    Monthly Ad Spends Managed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right visual (video placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:h-full md:ml-2 lg:ml-4 xl:ml-6"
        >
          <Card className="rounded-3xl shadow-xl overflow-hidden border-none h-full">
            <CardContent className="p-0 h-full">
             <HeroVideo />

            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};

// =================== END HERO ===================



const Services = () => {
  // Stagger container + child card variants (typed)
  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const services = [
    {
      icon: Target,
      title: "Performance Marketing",
      points: [
        "Meta, Google, TikTok, LinkedIn & Snapchat Ads",
        "Full-funnel campaign strategy",
        "ROAS, CAC & LTV optimization",
      ],
      color: palette.cyan,
    },
    {
      icon: Megaphone,
      title: "Creative Content Studio",
      points: ["Ad concepts & scripting", "Production & editing", "Copywriting & storytelling"],
      color: palette.magenta,
    },
    {
      icon: PieChart,
      title: "Marketing Analytics & Insights",
      points: ["Dashboards (GA4, Looker, platform)", "Attribution & tracking fixes", "Data-led growth decisions"],
      color: palette.green,
    },
    {
      icon: LineChart,
      title: "CRO & Landing Pages",
      points: ["Offer strategy", "A/B testing", "Speed & UX"],
      color: palette.yellow,
    },
    {
      icon: Users2,
      title: "Creative + Media Alignment",
      points: [
        "Data-driven creative testing",
        "Insights loop: media ↔ design",
        "Weekly performance syncs",
      ],
      color: palette.orange,
    },
    {
      icon: Rocket,
      title: "Global Growth Enablement",
      points: ["International targeting & scaling", "Multi-language localization", "Cross-platform buying"],
      color: palette.coal,
    },
  ];

  return (
    <Section id="services" className="bg-[#F9FAFB]">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div>
            <Pill>Services</Pill>
            <h2
              className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: palette.coal }}
            >
              Performance. Creativity. Insights. All under one roof.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Whether it’s performance, creative, or analytics — we plan, create, and optimize
              everything that moves the needle
            </p>
          </div>
          <Button
            asChild
            className="hidden md:inline-flex rounded-2xl"
            style={{ backgroundColor: palette.coal }}
          >
            <a href="#contact" className="flex items-center gap-2">
              Get a proposal <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Staggered grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, points, color }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <Card className="rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-3">
                  {/* Bigger icon + larger padding */}
                  <div
                    className="rounded-xl p-3"
                    style={{ backgroundColor: `${color}14` as React.CSSProperties["backgroundColor"] }}
                  >
                    <Icon className="h-8 w-8" style={{ color }} />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-[2px] h-4 w-4" style={{ color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

const CaseStudyCard = ({ tag, title, stats, platform, summary, cta = "View case study", thumbnailSrc }: any) => (
  <Card className="rounded-2xl overflow-hidden group">
    <div className="relative aspect-[16/9] overflow-hidden">
  {thumbnailSrc ? (
    <img
      src={thumbnailSrc}
      alt={`${title} thumbnail`}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <VisualPlaceholder label={`${platform} creative thumbnail`} />
  )}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
    style={{ background: `linear-gradient(180deg, transparent, ${palette.coal}CC)` }}
  />
</div>
    <CardHeader>
      <div className="flex items-center justify-between gap-3">
        <Badge variant="secondary">{tag}</Badge>
        <span className="text-xs text-muted-foreground flex items-center gap-1"><Building2 className="h-3 w-3"/> {platform}</span>
      </div>
      <CardTitle className="text-xl mt-1">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s: any) => (
          <div key={s.label} className="text-center">
            <div className="text-xl font-bold" style={{ color: palette.cyan }}>{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full rounded-xl">
        {cta} <ExternalLink className="ml-2 h-4 w-4"/>
      </Button>
    </CardContent>
  </Card>
);

const Work = () => (
  <Section id="work">
    <Container>
      <Pill>Featured Work</Pill>
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: palette.coal }}>
        Performance marketing that looks good and performs better
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        A sample of campaigns where we owned both the media strategy and the ad creatives
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* ELARA: link the whole card */}
  {/* ELARA card */}
  <Link href="/work/elara-studio" className="block">
    <CaseStudyCard
      thumbnailSrc="/portfolio/elara-studio.jpg" //        // ✅ thumbnail
      imageAlt="ELARA Studio minimalist apparel"
      tag="D2C Apparel"
      platform="Meta + Google + YouTube"
      title="4.8× ROAS in 45 days with lifestyle UGC"
      summary="Full-funnel strategy (TOFU/MOFU/BOFU), creative + audience testing, and Shopping hygiene."
      stats={[
        { value: "4.8×", label: "ROAS" },
        { value: "−25%", label: "CPA" },
        { value: "50k", label: "Remarketing Pool" },
      ]}
      className="cursor-pointer"
    />
  </Link>

  {/* pureleaf card */}
   <Link href="/work/pureleaf" className="block">
    <CaseStudyCard
      thumbnailSrc="/portfolio/pureleaf.jpg"          // ✅ PureLeaf thumbnail
      tag="Supplements"
      platform="Meta + Google + Email"
      title="3.9× ROAS in 60 days with plant-powered performance funnel"
      summary="UGC reels + Shopping + Klaviyo automations increased subscriptions and reduced CPA."
      stats={[
        { value: "3.9×", label: "ROAS" },
        { value: "↓18%", label: "CPA" },
        { value: "+42%", label: "Subscriptions" },
      ]}
      className="cursor-pointer"
    />
  </Link>
  <Link href="/work/aurae-skin" className="block">
  <CaseStudyCard
    thumbnailSrc="/portfolio/aurae-skin.jpg"
    tag="Beauty & Personal Care"
    platform="Meta + Google + TikTok"
    title="Localization + UGC drove profitable EU scaling"
    summary="UGC reels, localized copy (FR/DE/NL), and retention flows lifted ROAS and reduced CAC."
    stats={[
      { value: "4.8×", label: "ROAS (M3)" },
      { value: "↓42%", label: "CAC" },
      { value: "10k+", label: "Leads" },
    ]}
    className="cursor-pointer"
  />
</Link>
</div>
    </Container>
  </Section>
);

const Process = () => (
  <Section
    id="process"
    className="bg-[#F9FAFB] min-h-[calc(100vh-96px)] flex flex-col justify-center !py-6 md:!py-8"
  >
    <Container>
      <Pill>How we work</Pill>

      <h2
        className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight"
        style={{ color: palette.coal }}
      >
        A clear four-step path from brief to scale
      </h2>

      <p className="mt-2 text-muted-foreground max-w-2xl">
        From understanding your brand to producing scroll-stopping creatives, running high-performance ads,
        and optimizing every move
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* 1 — Discovery & Brand Fit */}
        <Card className="rounded-2xl">
          <CardHeader className="py-4 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white">
                <span className="text-sm font-semibold" style={{ color: palette.coal }}>1</span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-18 h-18" style={{ color: palette.cyan }} />
                <h3 className="font-bold text-lg" style={{ color: palette.coal }}>
                  Discovery & Brand Fit
                </h3>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-4 md:pb-5">
            <ul className="text-[13px] md:text-sm text-muted-foreground space-y-1.5 list-disc ml-3">
              <li>Understand your audience, goals, and brand identity</li>
              <li>Analyze your key products, offers, and competitors</li>
              <li>Define performance benchmarks and success metrics</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2 — Concept & Ideation */}
        <Card className="rounded-2xl">
          <CardHeader className="py-4 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white">
                <span className="text-sm font-semibold" style={{ color: palette.coal }}>2</span>
              </div>

              <div className="flex items-center gap-3">
                <PenTool className="w-18 h-18" style={{ color: palette.magenta }} />
                <h3 className="font-bold text-lg" style={{ color: palette.coal }}>
                  Concept & Ideation
                </h3>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-4 md:pb-5">
            <ul className="text-[13px] md:text-sm text-muted-foreground space-y-1.5 list-disc ml-3">
              <li>Develop ad angles that connect with your audience</li>
              <li>Create storyboards, hooks, and creative frameworks</li>
              <li>Plan testing structure for creative variations</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3 — Produce & Launch */}
        <Card className="rounded-2xl">
          <CardHeader className="py-4 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white">
                <span className="text-sm font-semibold" style={{ color: palette.coal }}>3</span>
              </div>

              <div className="flex items-center gap-3">
                <Rocket className="w-18 h-18" style={{ color: palette.orange }} />
                <h3 className="font-bold text-lg" style={{ color: palette.coal }}>
                  Produce & Launch
                </h3>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-4 md:pb-5">
            <ul className="text-[13px] md:text-sm text-muted-foreground space-y-1.5 list-disc ml-3">
              <li>Produce high-quality, platform-optimized ad creatives</li>
              <li>Set up tracking, pixels, and analytics tools</li>
              <li>Launch structured campaigns with clear objectives</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4 — Analyze & Scale */}
        <Card className="rounded-2xl">
          <CardHeader className="py-4 md:py-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white">
                <span className="text-sm font-semibold" style={{ color: palette.coal }}>4</span>
              </div>

              <div className="flex items-center gap-3">
                <TrendingUp className="w-18 h-18" style={{ color: palette.green }} />
                <h3 className="font-bold text-lg" style={{ color: palette.coal }}>
                  Analyze & Scale
                </h3>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0 pb-4 md:pb-5">
            <ul className="text-[13px] md:text-sm text-muted-foreground space-y-1.5 list-disc ml-3">
              <li>Review performance and identify winning creatives</li>
              <li>Optimize ad budgets and audience targeting</li>
              <li>Scale successful campaigns for higher ROAS</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  </Section>
);



const Testimonials = () => (
  <Section id="about">
    <Container>
      <Pill>Why MYIND</Pill>
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: palette.coal }}>
        Where creative storytelling meets measurable results
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        We’re strategists, creators, and analysts helping D2C brands grow across India, the US, the Middle East, and Europe.
        Growth happens where storytelling meets numbers — and that’s our craft
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            quote:
              "MYIND nailed the tone and the numbers. We finally scaled with creative that actually converted.",
            name: "Founder, Apparel D2C",
          },
          {
            quote:
              "Clear thinking and clean execution. Their dashboards made decisions faster every week.",
            name: "Head of Growth, Beauty",
          },
          {
            quote: "A creative partner that understands CAC and payback — rare and valuable.",
            name: "CMO, Wellness",
          },
        ].map((t) => (
          <Card key={t.name} className="rounded-2xl">
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-xs text-muted-foreground">— {t.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </Section>
);



const Contact = () => {
  const [sending, setSending] = React.useState(false);

  return (
    <Section id="contact" className="bg-[#F9FAFB]">
      <Container>
        <Pill>Get in touch</Pill>
        <h2
          className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight"
          style={{ color: palette.coal }}
        >
          Tell us about your goals
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Share a few details and we’ll come back with next steps and a tailored plan.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Project brief</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (sending) return;

                  const form = e.currentTarget as HTMLFormElement;
                  const data = new FormData(form);

                  // Build payload for API
                  const payload = {
                    name: data.get("name"),
                    email: data.get("email"),
                    company: data.get("company"),
                    website: data.get("website"),
                    budget: data.get("budget"),
                    goals: data.get("goals"),
                    // Honeypot (anti-bot). Keep the same name the API expects if you added it there.
                    company_website: data.get("company_website"),
                  };

                  try {
                    setSending(true);
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    const json = await res.json();
                    if (json.ok) {
                      alert("Thanks! Your brief has been sent. We’ll get back within 24–48 hours.");
                      form.reset();
                    } else {
                      alert("Sorry, something went wrong. Please try again or email mohit108@myindmarketing.com.");
                      console.error(json.error || json);
                    }
                  } catch (err) {
                    alert("Network error. Please try again or email mohit108@myindmarketing.com.");
                    console.error(err);
                  } finally {
                    setSending(false);
                  }
                }}
              >
                {/* Honeypot (hidden) — if a bot fills this, API can ignore the submission */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Your name</label>
                  <Input name="name" required placeholder="Jane Founder" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input name="email" type="email" required placeholder="jane@brand.com" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input name="company" placeholder="Brand Pvt Ltd" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Website</label>
                  <Input name="website" placeholder="https://" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Monthly ad budget</label>
                  <Input name="budget" placeholder="₹3,00,000" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Primary goals</label>
                  <Textarea
                    name="goals"
                    placeholder="e.g., Improve ROAS, scale PMAX, fix tracking"
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="rounded-2xl"
                  style={{ backgroundColor: palette.cyan, color: "#001018" }}
                >
                  {sending ? "Sending..." : "Send brief"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-6 self-start">
            <Card className="rounded-2xl">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:mohit108@myindmarketing.com"
                    className="text-sm underline"
                  >
                    mohit108@myindmarketing.com
                  </a>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <PhoneCall className="h-5 w-5" />
                  {/* make phone clickable if you like */}
                  <a href="tel:+919953181438" className="text-sm">
                    +91-9953-181-438
                  </a>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">India, Global</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-dashed" style={{ borderColor: `${palette.cyan}66` }}>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">
                  Prefer WhatsApp? Click the button below to connect!
                </div>
                <Button asChild variant="outline" className="mt-4 rounded-2xl">
                  <a
  href="https://wa.me/919953181438?HelloIWouldLikeToConnect=Hi%20MYIND!%20I%20am%20interested%20in%20your%20marketing%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  Chat on WhatsApp
</a>

                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
    <Container className="py-12 md:py-16">
      {/* Top grid */}
      <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="MYIND Media Logo"
    width={40}
    height={40}
    className="rounded-full"
  />
</div>

            <div className="font-semibold tracking-tight" style={{ color: palette.coal }}>
              MYIND MEDIA MARKETING
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted-foreground max-w-md">
            Where creativity meets performance. We help D2C brands grow with ads, content, and analytics.
          </p>
        </div>

        {/* Company links */}
        <div className="md:col-span-3">
          <div className="font-semibold" style={{ color: palette.coal }}>
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ['Services', '#services'],
              ['Work', '#work'],
              ['Process', '#process'],
              ['About', '#about'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] rounded-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4">
          <div className="font-semibold" style={{ color: palette.coal }}>
            Stay in the loop
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Monthly insights on profitable growth.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Hook up to your ESP later (Mailchimp, Brevo, etc.)
            }}
          >
            <Input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="rounded-2xl px-4"
              style={{ backgroundColor: palette.coal }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t" />

      {/* Bottom row */}
      <div className="mt-6 flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MYIND Media. All rights reserved.
        </div>

        {/* Quick links or badges (optional) */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href="#contact"
            className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] rounded-sm"
          >
            Start a project
          </a>
          <span className="hidden sm:inline select-none">•</span>
          <a
            href="#work"
            className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00AEEF] rounded-sm"
          >
            Case studies
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function MYINDWebsite() {
  React.useEffect(() => {
    // Smooth scroll for in-page anchors
    const handler = (e: any) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      const el = id && document.querySelector(id);
      if (el) {
        e.preventDefault();
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
