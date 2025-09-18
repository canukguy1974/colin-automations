import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Banknote, FileText, Cpu, Building2, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Simple, single-file landing page. TailwindCSS + shadcn/ui components.
// Replace placeholders (CALENDLY_LINK, CONTACT_EMAIL) before deploying.

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span className="font-semibold tracking-tight">Digital Creations (windsor)</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-emerald-400">Services</a>
            <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
            <a href="#faq" className="hover:text-emerald-400">FAQ</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="default" className="bg-emerald-500 text-black hover:bg-emerald-400">
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_top,rgba(16,185,129,.15),transparent)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              We build AI that does your busywork.
            </h1>
            <p className="mt-4 max-w-prose text-neutral-300">
              Stop wasting hours on invoicing, filing, and posting. We connect your tools to an AI that
              <span className="text-emerald-400"> pulls, files, writes, and ships</span>—so you can work on the work that pays.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
                <a href="#contact">Book a Setup Call</a>
              </Button>
              <Button asChild variant="outline" className="border-neutral-700 bg-neutral-900 hover:bg-neutral-800">
                <a href="#services">See What We Automate</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>Secure by design</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4"/>Deployed in days</div>
            </div>
          </div>
          <div className="">
            <DemoCard />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">What we do</h2>
          <p className="mt-2 max-w-prose text-neutral-300">Two offers, zero fluff. Pick your lane—or we’ll pick it with you.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Offer 1: Bookkeeping Automation */}
            <Card className="border-neutral-800 bg-neutral-900/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-white">
                  <FileText className="h-5 w-5 text-emerald-400" /> AI Bookkeeping Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-neutral-300">
                <Feature line="Pulls Stripe/PayPal transactions automatically" />
                <Feature line="Files invoices + receipts to Google Drive" />
                <Feature line="Emails you weekly/monthly reports" />
                <Feature line="No new dashboards—just done for you" />
              </CardContent>
            </Card>

            {/* Offer 2: Real Estate Content Machine */}
            <Card className="border-neutral-800 bg-neutral-900/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-white">
                  <Building2 className="h-5 w-5 text-neutral-400" /> Real Estate Content Machine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-neutral-300">
                <Feature line="Weekly market updates auto‑generated + posted" />
                <Feature line="Listing spotlights from your MLS data" />
                <Feature line="Email newsletter: ‘Market in 60 Seconds’" />
                <Feature line="Built for lead gen, not vanity metrics" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Simple pricing</h2>
          <p className="mt-2 max-w-prose text-neutral-300">Transparent rates. If it doesn’t save you hours, we don’t take your money.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-neutral-800 bg-neutral-900/60">
              <CardHeader>
                <CardTitle className="text-xl text-white">Bookkeeping Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold"><span className="text-emerald-400">$99</span><span className="text-base font-semibold text-neutral-400">/mo</span></div>
                <div className="mt-1 text-neutral-400">+$199 one‑time setup</div>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>Stripe/PayPal connectors</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>Drive filing + naming rules</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>Weekly email reports</li>
                </ul>
                <Button asChild className="mt-6 w-full bg-emerald-500 text-black hover:bg-emerald-400">
                  <a href="#contact">Start Setup</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/60">
              <CardHeader>
                <CardTitle className="text-xl text-white">RE Content Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold"><span className="text-emerald-400">$399</span><span className="text-base font-semibold text-neutral-400">/mo</span></div>
                <div className="mt-1 text-neutral-400">+$299 one‑time setup</div>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>Auto posts to IG/FB/LinkedIn</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>MLS‑powered market updates</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400"/>Newsletter drafts reviewed by you</li>
                </ul>
                <Button asChild className="mt-6 w-full bg-emerald-500 text-black hover:bg-emerald-400">
                  <a href="#contact">Reserve a Spot</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-neutral-400"><Cpu className="mr-2 inline h-4 w-4"/>Custom automations available on request.</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Built by indie devs, for busy operators</h2>
          <p className="mt-2 max-w-prose text-neutral-300">We ship fast, we document, and we answer texts. No enterprise theater.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {title: "Hours saved", stat: "20+/mo", blurb: "Typical for bookkeeping clients after week 2."},
              {title: "Platforms", stat: "Stripe • PayPal • GDrive • Gmail • Slack", blurb: "Add others as needed."},
              {title: "Turnaround", stat: "2–7 days", blurb: "From call to production for standard setups."}
            ].map((k, i) => (
              <Card key={i} className="border-neutral-800 bg-neutral-900/40">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{k.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-extrabold text-emerald-400">{k.stat}</div>
                  <p className="mt-2 text-neutral-300">{k.blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Faq q="Will this mess with my existing tools?" a="No. We plug into Stripe/PayPal/GDrive/Gmail using your permissions. We read/write only what’s needed." />
            <Faq q="Is my data safe?" a="Yes. Access is scoped, logged, and revoked on request. We avoid storing sensitive data where possible." />
            <Faq q="How fast can you set this up?" a="Most are live in 2–7 days depending on complexity." />
            <Faq q="Do you support other platforms?" a="Yep. Quick add-ons include Slack, Notion, Trello, Jira, Sheets, HubSpot, etc." />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold md:text-3xl">Let’s get your busywork off your plate</h2>
          <p className="mt-2 max-w-prose text-neutral-300">Two ways to start: book a quick call or email us your stack and we’ll reply with a plan.</p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-neutral-800 bg-neutral-900/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Book a call</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300">15‑minute fit check. No pressure. Bring your tools list.</p>
                <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400">
                  <a href="https://calendly.com/colincartwright1974" target="_blank" rel="noreferrer">Open calendar</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Email us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300">Prefer email? Send your stack + goal and we’ll respond same day.</p>
                <div className="flex flex-col gap-3 text-neutral-300">
                  <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400"/>sales@digitalcreationswindsor.xyz</span>
                  
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-emerald-400"/>
                    <a href="https://business.facebook.com/latest/inbox/messenger?asset_id=642373175632942&business_id=1224393922738685&selected_item_id=819080267&thread_type=FB_MESSAGE&mailbox_id=642373175632942" target="_blank" rel="noopener noreferrer" className="hover:underline">Messenger: @digitalcreationswindsor</a>
                  </span>
                </div>
                <Button asChild variant="outline" className="border-neutral-700 bg-neutral-900 hover:bg-neutral-800">
                  <a href="mailto:info@digitalcreationswindsor.xyz?subject=Setup%20my%20automation&body=Here%20are%20the%20tools%20I%20use:%20Stripe/PayPal/Drive/Gmail/Slack%20...">Write an email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>© {new Date().getFullYear()} Digital Creations Windsor. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-emerald-400" href="#privacy">Privacy</a>
              <a className="hover:text-emerald-400" href="#tos">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DemoCard(){
  return (
    <Card className="border-neutral-800 bg-neutral-900/60">
      <CardHeader>
        <CardTitle className="text-lg text-emerald-400">Automation flow (example)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-neutral-300">
        <Step n={1} text="Fetch Stripe/PayPal transactions nightly" />
        <Step n={2} text="Save invoices + receipts to Google Drive" />
        <Step n={3} text="Email weekly report to your inbox" />
        <Step n={4} text="Optional: Post RE market update to socials" />
      </CardContent>
    </Card>
  )
}

function Step({n, text}:{n:number, text:string}){
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 font-bold text-emerald-400">{n}</div>
      <div className="pt-1">{text}</div>
    </div>
  )
}

function Feature({line}:{line:string}){
  return (
    <div className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4 text-emerald-400"/>
      <span>{line}</span>
    </div>
  )
}

function Faq({q,a}:{q:string,a:string}){
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <div className="text-base font-semibold">{q}</div>
      <div className="mt-2 text-neutral-300">{a}</div>
    </div>
  )
}
