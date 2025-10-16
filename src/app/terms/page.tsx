// app/terms/page.tsx
// Next.js App Router page for Digital Creations Windsor — Terms of Service
import type { Metadata as _Metadata } from "next";

export const metadata: _Metadata = {
  title: "Terms of Service • Digital Creations Windsor",
  description:
    "The terms governing your use of Digital Creations Windsor’s websites and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const year = new Date().getFullYear();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-invert prose-headings:font-semibold">
      <h1>Terms of Service</h1>
      <p>
        <strong>Effective date:</strong> 15 August 2025
      </p>

      <h2>1) Eligibility &amp; Accounts</h2>
      <p>
        You must be able to form a binding contract and comply with these Terms.
        If you create an account, you are responsible for maintaining its
        security and for all activities under it.
      </p>

      <h2>2) Orders, Pricing, and Payments</h2>
      <ul>
        <li>Prices are listed in checkout and may be shown in CAD unless noted.</li>
        <li>Payments are processed by third‑party providers (e.g., Stripe).</li>
        <li>Taxes may apply based on your location.</li>
        <li>
          Unless otherwise specified, fees are non‑refundable once work has
          begun. For fixed‑scope offerings (e.g., content packs), delivery
          timelines are estimates; we aim to meet the stated 72‑hour target.
        </li>
      </ul>
      <p>
        <strong>Refunds:</strong> If we materially fail to deliver the defined
        deliverables for a fixed‑scope product and cannot cure within a
        reasonable period (normally 7 days), we may refund fees paid for the
        undelivered portion.
      </p>

      <h2>3) Scope of Services &amp; Client Responsibilities</h2>
      <ul>
        <li>
          You will provide timely information, approvals, and content needed to
          deliver the Services.
        </li>
        <li>
          For content services, you are responsible for ensuring any materials
          (photos, logos, brand assets) you supply are licensed for our use.
        </li>
        <li>
          We may showcase non‑confidential outcomes (e.g., anonymized
          thumbnails) as portfolio items unless you request otherwise in writing.
        </li>
      </ul>

      <h2>4) Intellectual Property</h2>
      <ul>
        <li>
          <strong>Your Materials:</strong> You retain ownership of content you
          provide. You grant us a limited license to use it solely to deliver the
          Services.
        </li>
        <li>
          <strong>Deliverables:</strong> Upon full payment, you receive a
          worldwide, non‑exclusive, perpetual license to use delivered assets for
          your business marketing. Templates may include third‑party elements
          governed by their licenses.
        </li>
        <li>
          <strong>Our Tools:</strong> We retain all rights to our processes,
          prompts, code, and templates used to create deliverables.
        </li>
      </ul>

      <h2>5) Acceptable Use</h2>
      <p>
        You agree not to misuse the Services, including by violating laws,
        infringing rights, uploading malicious code, interfering with network
        integrity, attempting to circumvent security, or using deliverables for
        deceptive or unlawful advertising.
      </p>

      <h2>6) Confidentiality</h2>
      <p>
        Each party may receive non‑public information from the other. The
        receiving party will protect such information with reasonable care and
        use it only to provide or receive the Services. Exceptions apply for
        information that is public, independently developed, or lawfully
        obtained.
      </p>

      <h2>7) Third‑Party Services</h2>
      <p>
        The Services may integrate with third‑party platforms (e.g., Stripe,
        Calendly, social networks, analytics). Your use of those platforms is
        governed by their terms and policies. We are not responsible for
        third‑party acts or omissions.
      </p>

      <h2>8) Disclaimers</h2>
      <p>
        The Services and deliverables are provided "AS IS" and "AS AVAILABLE".
        To the maximum extent permitted by law, we disclaim all warranties,
        express or implied, including merchantability, fitness for a particular
        purpose, and non‑infringement. We do not warrant specific marketing or
        sales outcomes.
      </p>

      <h2>9) Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, DCW and its suppliers will not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of profits, revenue, data, or
        goodwill. Our aggregate liability for all claims will not exceed the
        amounts you paid to us for the Services giving rise to the claim in the
        3 months preceding the event.
      </p>

      <h2>10) Indemnification</h2>
      <p>
        You will indemnify and hold DCW harmless from claims, damages,
        liabilities, costs, and expenses (including reasonable legal fees)
        arising out of your misuse of the Services, violation of these Terms, or
        infringement of any rights of a third party.
      </p>

      <h2>11) Termination</h2>
      <p>
        Either party may terminate for convenience upon notice for ongoing
        services, or for cause if the other party materially breaches and fails
        to cure within a reasonable period. Upon termination, accrued rights and
        obligations survive, including payment obligations.
      </p>

      <h2>12) Governing Law &amp; Disputes</h2>
      <p>
        These Terms are governed by the laws of the Province of Ontario and
        applicable laws of Canada. The parties submit to the exclusive
        jurisdiction of the provincial and federal courts located in Ontario,
        Canada. You agree to first attempt informal resolution by contacting
        <a href="mailto:support@digitalcreationswindsor.xyz"> support@digitalcreationswindsor.xyz</a>.
      </p>

      <h2>13) Changes to the Terms</h2>
      <p>
        We may modify these Terms from time to time. Changes are effective upon
        posting. Your continued use after changes constitutes acceptance.
      </p>

      <h2>14) Contact</h2>
      <p>
        Questions about these Terms: {" "}
        <a href="mailto:support@digitalcreationswindsor.xyz">support@digitalcreationswindsor.xyz</a>
      </p>

      <hr className="my-12 border-white/10" />
      <p className="text-sm text-white/50">© {year} Digital Creations Windsor — All rights reserved.</p>
    </main>
  );
}
