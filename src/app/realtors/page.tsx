import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, CreditCard, Calendar, ChevronRight, Star, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// DCW Neon Green brand variables
const BRAND = {
  primary: "#39FF14", // neon green
  primaryMuted: "#1aff00",
  dark: "#0a0a0a",
};
const AGENT_IMG = "/images/realtor-agent.png";

export default function RealtorContentPackPage() {
  return (
    <div className="min-h-screen w-full text-white" style={{ background: `radial-gradient(1200px 600px at 10% -10%, rgba(57,255,20,0.12), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(57,255,20,0.08), transparent 60%), ${BRAND.dark}` }}>
      {/* Top bar */}
      <header className="w-full sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            <div className="h-8 w-8 rounded-xl" style={{ background: BRAND.primary }} />
            <span className="font-semibold tracking-wide">Digital Creations Windsor</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:opacity-80">
              Home
            </Link>
            <a href="#pricing" className="inline-flex items-center gap-2 text-sm hover:opacity-80">
              Pricing <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
         <Image
  src={AGENT_IMG}
  alt="Realtor mascot"
  width={600}
  height={600}
  priority
  className="
    pointer-events-none select-none
    absolute -top-6 right-4 md:-top-4 md:right-8 lg:-top-6 lg:right-12
    w-[340px] md:w-[480px] lg:w-[600px]
    z-10
    drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]
    hidden sm:block
  "
/>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs mb-4">
              <Sparkles size={14} style={{ color: BRAND.primary }} />
              72-hour turnaround · Windsor–Essex Realtors™
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              30 Days of Realtor Content.
              <span className="block" style={{ color: BRAND.primary }}>Delivered in 72 Hours.</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Scripts. Captions. Thumbnails. Canva templates. You post or we schedule.
              Built for agents who are done staring at a blank caption.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-2xl px-6 text-black font-semibold
                bg-[#39FF14] hover:bg-[#2EEA0F]
                transition-all duration-200
                shadow-[0_8px_20px_rgba(57,255,20,0.25)]
                hover:shadow-[0_10px_28px_rgba(57,255,20,0.35)]
                hover:-translate-y-0.5"
>
  <a href="https://calendly.com/colincartwright1974/10min" target="_blank" rel="noreferrer">
    Book 10-min Fit Call
  </a>
</Button>
              <Button asChild size="lg"  className="rounded-2xl px-6 text-black font-semibold
                bg-[#39FF14] hover:bg-[#2EEA0F]
                transition-all duration-200
                shadow-[0_8px_20px_rgba(57,255,20,0.25)]
                hover:shadow-[0_10px_28px_rgba(57,255,20,0.35)]
                hover:-translate-y-0.5"
>
                <a href="#details">See what you get</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-white/60 text-sm">
              <ShieldCheck size={16} style={{ color: BRAND.primary }} />
              <span>Guarantee: If you don't post 6+ assets this month, we add 6 more free.</span>
            </div>
          </div>

          {/* Right side with layered cards */}
          <div className="relative">
            {/* Top Card with Agent Image - positioned in top right, semi-transparent */}
            

            {/* Hero Card - 30 Day Content Pack with transparency */}
            <Card className="relative z-20 rounded-3xl border border-white/10
  bg-black/40 backdrop-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-xl">Your 30‑Day Content Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {[
                    "12 short video scripts (hooks that convert scroll into showings)",
                    "12 SEO‑tuned captions (Windsor neighborhoods & keywords)",
                    "12 thumbnails/covers ready for Reels/TikTok/Shorts",
                    "4 reusable Canva templates (reel cover, stat card, carousel, testimonial)",
                    "Posting calendar + 60‑sec Loom walkthrough",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} style={{ color: BRAND.primary }} className="mt-0.5" />
                      <span className="text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/60">
                  <div className="flex items-center gap-2"><TimerReset size={16} /> 72‑hour turnaround</div>
                  <div className="flex items-center gap-2"><Calendar size={16} /> 30‑day plan included</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-10 md:py-16 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Neighborhoods",
              desc: "Hooks tailored to {Walkerville, Riverside, South Windsor, Tecumseh, LaSalle}—swap your farm areas in the brief.",
            },
            {
              title: "Listings & Buyers",
              desc: "Seller prep, pricing myths, offer strategy, booking private tours—scripts that move DM → showing.",
            },
            {
              title: "Templates that Scale",
              desc: "4 Canva bases you can reuse forever. Font/contrast tuned to pop on Reels/Shorts.",
            },
          ].map((f) => (
            <Card key={f.title} className="bg-black/40 border-white/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75 text-sm">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Simple pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic */}
            <Card className="bg-black/40 border-white/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard size={18} style={{ color: BRAND.primary }} /> $349 • DIY Posting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> Full 30‑day content pack</li>
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> Posting calendar + Loom</li>
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> 72‑hour delivery</li>
                </ul>
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full text-black font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] hover:scale-105"
                    style={{ backgroundColor: BRAND.primary }}
                  >
                    <a href="https://buy.stripe.com/6oU7sLdpKf667Jr7735AQ00" target="_blank" rel="noreferrer">Pay $349</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scheduled */}
            <Card className="bg-black/60 border-white/10 rounded-2xl ring-1 ring-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star size={18} style={{ color: BRAND.primary }} /> $599 • We Schedule It
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/85">
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> Everything in DIY</li>
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> We prep in Buffer/Meta Suite</li>
                  <li className="flex gap-2"><Check size={16} style={{ color: BRAND.primary }} /> Priority tweaks (24h)</li>
                </ul>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <Button
                    asChild
                    className="w-full text-black font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] hover:scale-105"
                    style={{ backgroundColor: BRAND.primary }}
                  >
                    <a href="https://buy.stripe.com/9B628radyaPQ5Bjbnj5AQ01" target="_blank" rel="noreferrer">Pay $599</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:scale-105"
                    style={{
                      borderColor: BRAND.primary,
                      color: BRAND.primary,
                      backgroundColor: 'rgba(57,255,20,0.1)'
                    }}
                  >
                    <a href="https://calendly.com/colincartwright1974" target="_blank" rel="noreferrer">Book 10‑min Call</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof / FAQ */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">What happens after I pay?</CardTitle>
            </CardHeader>
            <CardContent className="text-white/75 text-sm">
              You’ll get an intake form (5 minutes). We confirm your farm areas, tone, and any active listings. Your content pack is delivered in 72 hours via Google Drive with a short Loom showing how to deploy it.
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">Guarantee</CardTitle>
            </CardHeader>
            <CardContent className="text-white/75 text-sm">
              If you don’t post at least 6 assets from the pack in 30 days, we’ll build 6 more assets free. No drama.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-t border-white/10  bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Agents getting it done</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "R. Singh",
              line: "Had content queued for the month in 2 days. Booked 3 tours from the scripts.",
              area: "Windsor • Riverside"
            },{
              name: "M. Taylor",
              line: "The thumbnails alone bumped my Reel reach 4x.",
              area: "LaSalle"
            },{
              name: "K. Chen",
              line: "I finally stopped staring at the caption box. Posting calendar = sanity.",
              area: "Tecumseh"
            }].map(t => (
              <Card key={t.name} className="bg-black/40 border-white/10 rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-white/75 text-sm">
                  <p className="mb-2">“{t.line}”</p>
                  <p className="text-white/50">{t.area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Digital Creations Windsor • Made for Windsor–Essex Realtors
      </footer>
    </div>
  );
}
