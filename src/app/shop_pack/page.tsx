// app/shop-pack/page.tsx
export default function Page() {
  return (
	<main>
	  <section>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<PriceCard name="Start with One" price="$199/module" note="One‑time setup (per module)">
<li>Install & config</li>
<li>Excel or PDF output</li>
<li>Email/phone support (7 days)</li>
</PriceCard>
<PriceCard highlight name="Shop AI Pack" price="$499 setup + $99/mo" note="All four modules">
<li>All modules installed</li>
<li>Monthly updates</li>
<li>Priority support</li>
</PriceCard>
<PriceCard name="On‑Prem Lifetime" price="$299/module" note="One‑time, local only">
<li>Offline execution</li>
<li>Local data only</li>
<li>Owner training (1 hr)</li>
</PriceCard>
</div>
<div className="mt-8 flex gap-3">
<a href="mailto:colin.cartwright@digitalcreationswindsor.xyz?subject=Demo%20request%20-%20Shop%20AI%20Pack" className="px-5 py-3 rounded-2xl bg-emerald-500 text-black font-semibold shadow">Request a 10‑minute demo</a>
<a href="/smartquote-demo" className="px-5 py-3 rounded-2xl border border-neutral-700 font-semibold">See SmartQuote in action</a>
</div>
<p className="mt-3 text-xs text-neutral-500">*Demo: Send us one RFQ; we’ll return a real quote sheet in minutes.</p>
</section>


{/* FAQ */}
<section className="max-w-6xl mx-auto px-6 pb-24">
<h3 className="text-2xl font-bold">FAQ</h3>
<div className="mt-6 grid md:grid-cols-2 gap-6 text-neutral-300">
<FAQ q="Does data leave my shop?" a="On‑prem option keeps everything local. Hosted uses encrypted transit & storage; we can sign an NDA." />
<FAQ q="Do you support PowerMill?" a="Yes — our setup module is built around PowerMill exports and common report formats." />
<FAQ q="Can we start with just RFQs?" a="Absolutely. Most shops start with SmartQuote AI, then add modules as ROI shows up." />
<FAQ q="What’s the typical time savings?" a="1–4 hours per day depending on RFQ volume, setup complexity, and inspection load." />
</div>
</section>
</main>
)
}


function Card({ title, subtitle, children }: any) {
return (
<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="text-sm text-neutral-400 mt-1">{subtitle}</p>
<p className="mt-4 text-neutral-300">{children}</p>
</div>
)
}


function PriceCard({ name, price, note, children, highlight }: any) {
return (
<div className={`p-6 rounded-2xl border shadow ${highlight ? 'bg-emerald-500/10 border-emerald-500' : 'bg-neutral-900 border-neutral-800'}`}>
<div className="flex items-baseline justify-between">
<h4 className="text-xl font-semibold">{name}</h4>
<div className="text-2xl font-bold">{price}</div>
</div>
<p className="text-sm text-neutral-400 mt-1">{note}</p>
<ul className="mt-4 space-y-2 list-disc list-inside text-neutral-300">{children}</ul>
</div>
)
}


function FAQ({ q, a }: any) {
return (
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
<div className="font-semibold">{q}</div>
<div className="text-neutral-400 mt-2 text-sm">{a}</div>
</div>
)
}