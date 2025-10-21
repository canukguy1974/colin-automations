// app/team/page.tsx
// Next.js 13+ (App Router). TailwindCSS + shadcn/ui friendly.
// Drop this file at: app/team/page.tsx
// If you use the Pages Router, rename to pages/team.tsx and tweak the metadata export.

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Meet the Team — Digital Creations Windsor",
  description:
    "Get to know the people behind Digital Creations Windsor — developers, project managers, and automation specialists.",
  openGraph: {
    title: "Meet the Team — Digital Creations Windsor",
    description:
      "Get to know the people behind Digital Creations Windsor — developers, project managers, and automation specialists.",
    url: "/team",
    type: "profile",
  },
};

// 🔧 Quick edit zone — update team here (add as many members as you like)
const team = [
  {
    name: "Colin Cartwright",
    role: "Founder & CTO",
    tagline: "Automation architect • Indie dev • Coffee-powered",
    email: "colin@digitalcreationswindsor.xyz",
    headshot: "/images/me.png", // place in /public/images
    links: [
      { label: "Website", href: "https://digitalcreationswindsor.xyz" },
      { label: "GitHub", href: "https://github.com/canukguy1974" },
      { label: "Book a Call", href: "https://calendly.com/colincartwright1974/10min" },
    ],
    blurb:
      "I build enterprise-grade automation and fullstack MVPs. If it saves hours and makes money, I’m in.",
  },
  {
    name: "Jessica Palmer", // ← replace
    role: "Chief Operating Officer (COO)",
    tagline: "Operations Manager • Project Management • Gets deals done",
    email: "coo@digitalcreationswindsor.xyz", // or alias you create in Zoho
    headshot: "/images/coo.jpg", // placeholder path — add your photo to /public/images
    links: [
      { label: "Email", href: "mailto:coo@digitalcreationswindsor.xyz" },
      { label: "LinkedIn", href: "#" }, // replace with real profile
    ],
    blurb:
      "Runs the show so the builders can build. Books, ops, partnerships, and pipelines — handled.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/70 backdrop-blur supports-[backdrop-filter]:bg-black/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            <span className="font-semibold tracking-tight">Digital Creations (windsor)</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:opacity-80">
              Home
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden>
          <div className="mx-auto h-[40rem] w-[40rem] rounded-full bg-emerald-500/20 translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Meet the <span className="text-emerald-400">DCW</span> Team
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Builders, operators, and automation specialists. We keep it lean, ship fast, and
            measure by impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <li
              key={m.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                  <Image
                    src={m.headshot}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 80px, 120px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-emerald-400 text-sm font-medium">{m.role}</p>
                  <p className="mt-1 text-xs text-zinc-400">{m.tagline}</p>
                </div>
              </div>

              <p className="mt-5 text-sm text-zinc-300 leading-relaxed">{m.blurb}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={`mailto:${m.email}`}
                  className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1 text-sm hover:bg-zinc-800"
                >
                  {m.email}
                </Link>
                {m.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center rounded-xl border border-zinc-700 px-3 py-1 text-sm hover:bg-zinc-800"
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-zinc-800 p-6">
          <h2 className="text-lg font-semibold">We’re hiring ambitous individuals that can produce results</h2> 
          <p className="mt-2 text-sm text-zinc-300">
            Contract designers, ops, and automation engineers. Send a note to
            <Link href="mailto:colin@digitalcreationswindsor.xyz" className="ml-1 text-emerald-400 underline">
              colin@digitalcreationswindsor.xyz
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
