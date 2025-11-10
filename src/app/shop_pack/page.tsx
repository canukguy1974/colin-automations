// src/app/shop_pack/page.tsx
"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import React from "react";

const BRAND_VAR = "var(--brand-green)";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <Check className="h-4 w-4" style={{ color: "var(--brand-green)" }} />
      <span className="text-neutral-300">{children}</span>
    </li>
  );
}

function PriceCard({
  name,
  price,
  note,
  children,
  highlight = false,
}: {
  name: string;
  price: string;
  note: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-2xl border shadow transition ${
        highlight
          ? "bg-[rgba(57,255,20,0.06)] border-[rgba(57,255,20,0.65)] shadow-[0_0_24px_var(--brand-green)]"
          : "bg-neutral-900/60 border-neutral-800"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h4 className="text-xl font-semibold text-white">{name}</h4>
        <div className="text-2xl font-bold text-white">{price}</div>
      </div>
      <p className="mt-1 text-sm text-neutral-400">{note}</p>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <div className="text-base font-semibold text-white">{q}</div>
      <div className="mt-2 text-neutral-300">{a}</div>
    </div>
  );
}

export default function ShopPackPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:opacity-80"
            style={{ color: "var(--brand-green)" }}
          >
            ← Back to Home
          </Link>
          <div className="text-neutral-500 text-sm">Digital Creations Windsor</div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p
          className="font-semibold tracking-wide"
          style={{ color: "var(--brand-green)" }}
        >
          Shop AI Pack
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
          Cut up to 4 hours a day of paperwork 
          <span className="block" style={{ color: BRAND_VAR }}>
            from your shop with one AI pack.
          </span>
        </h1>
        <p className="mt-6 text-lg text-neutral-300 max-w-2xl">
          We automate RFQs, setup sheets, NC audits, and inspection reports. Runs
          locally, privacy-first. Start with one module or bundle the pack.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#pricing"
            className="px-5 py-3 rounded-2xl font-semibold text-black shadow transition hover:brightness-110"
            style={{ backgroundColor: "var(--brand-green)" }}
          >
            View Pricing
          </a>
          <a
            href="#modules"
            className="px-5 py-3 rounded-2xl font-semibold border transition"
            style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)", backgroundColor: "rgba(57,255,20,0.1)" }}
          >
            See Modules
          </a>
        </div>
        <div className="mt-3 text-sm text-neutral-500">
          On-prem or hosted • PowerMill-friendly • Windsor built
        </div>
      </section>

      {/* MODULES */}
      <section
        id="modules"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2"
      >
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-semibold text-white">🧠 SmartQuote AI</h3>
          <p className="mt-2 text-neutral-300">
            RFQ → Excel. Reads RFQs/drawings, extracts material, qty, tolerances &
            due date, and fills your quote template. Optional STEP complexity.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-semibold text-white">📋 SetupSheet AI</h3>
          <p className="mt-2 text-neutral-300">
            Watches your PowerMill folder; compiles tool list, ops summary, and
            cycle estimate. Customer-ready PDF.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-semibold text-white">🪛 Toolpath Advisor</h3>
          <p className="mt-2 text-neutral-300">
            NC sanity checks: flags redundant tool changes, wrong coolant, missing
            comments.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-semibold text-white">📄 CMM Formatter</h3>
          <p className="mt-2 text-neutral-300">
            Turns CMM/hand-measure CSVs into branded pass/fail PDFs with
            tolerances checked and notes.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-neutral-800/70 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
          <p className="mt-2 text-neutral-400">
            Start with one module or bundle the pack. On-prem or hosted.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PriceCard
              name="Start with One"
              price="$199/module"
              note="One-time setup (per module)"
            >
              <Feature>Install &amp; config</Feature>
              <Feature>Excel or PDF output</Feature>
              <Feature>Email/phone support (7 days)</Feature>
            </PriceCard>

            <PriceCard
              highlight
              name="Shop AI Pack"
              price="$499 setup + $99/mo"
              note="All four modules"
            >
              <Feature>All modules installed</Feature>
              <Feature>Monthly updates</Feature>
              <Feature>Priority support</Feature>
            </PriceCard>

            <PriceCard
              name="On-Prem Lifetime"
              price="$299/module"
              note="One-time, local only"
            >
              <Feature>Offline execution</Feature>
              <Feature>Local data only</Feature>
              <Feature>Owner training (1 hr)</Feature>
            </PriceCard>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:colin.cartwright@digitalcreationswindsor.xyz?subject=Demo%20request%20-%20Shop%20AI%20Pack"
              className="px-5 py-3 rounded-2xl font-semibold text-black shadow transition hover:brightness-110"
              style={{ backgroundColor: "var(--brand-green)" }}
            >
              Request a 10-minute demo
            </a>
            <a
              href="/smartquote-demo"
              className="px-5 py-3 rounded-2xl font-semibold border transition"
              style={{ borderColor: "var(--brand-green)", color: "var(--brand-green)", backgroundColor: "rgba(57,255,20,0.1)" }}
            >
              See SmartQuote in action
            </a>
          </div>

          <p className="mt-3 text-xs text-neutral-500">
            *Demo: Send us one RFQ; we’ll return a real quote sheet in minutes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h3 className="text-2xl font-bold">FAQ</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FAQ q="Does data leave my shop?" a="On-prem option keeps everything local. Hosted uses encrypted transit & storage; we can sign an NDA." />
          <FAQ q="Do you support PowerMill?" a="Yes — our setup module is built around PowerMill exports and common report formats." />
          <FAQ q="Can we start with just RFQs?" a="Absolutely. Most shops start with SmartQuote AI, then add modules as ROI shows up." />
          <FAQ q="What’s the typical time savings?" a="1–4 hours per day depending on RFQ volume, setup complexity, and inspection load." />
        </div>
      </section>
    </main>
  );
}
