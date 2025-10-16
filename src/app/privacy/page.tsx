// app/privacy/page.tsx
// Next.js App Router page for Digital Creations Windsor — Privacy Policy
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy • Digital Creations Windsor",
  description:
    "How Digital Creations Windsor collects, uses, and safeguards your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const year = new Date().getFullYear();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-invert prose-headings:font-semibold">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> 15 October 2025
        <br />
        <strong>Legal entity:</strong> Digital Creations Windsor ("DCW", "we",
        "us", or "our")
        <br />
        <strong>Website:</strong> https://digitalcreationswindsor.xyz
        <br />
        <strong>Contact:</strong> <a href="mailto:support@digitalcreationswindsor.xyz">support@digitalcreationswindsor.xyz</a>
        <br />
        <strong>Registered location:</strong> Windsor, Ontario, Canada
      </p>

      <p>
        This Privacy Policy explains how we collect, use, disclose, and safeguard
        personal information when you use our websites, products, and services
        (collectively, the "Services"). By using the Services, you agree to this
        Policy.
      </p>

      <h2>1) Information We Collect</h2>
      <ul>
        <li>
          <strong>Account &amp; Contact Data:</strong> name, email address, social
          handles, and any information you provide via forms, Calendly bookings,
          or chat/contact widgets.
        </li>
        <li>
          <strong>Transaction Data:</strong> purchase details (product, price,
          currency), payment status, and limited billing details. Payment card
          data is processed by Stripe; we do not store full card numbers.
        </li>
        <li>
          <strong>Content You Provide:</strong> messages, files, or other content
          you upload for service delivery (e.g., assets for your content pack).
        </li>
        <li>
          <strong>Usage &amp; Device Data:</strong> IP address, browser
          type/version, device identifiers, pages visited, referring/exit pages,
          and timestamps.
        </li>
        <li>
          <strong>Cookies &amp; Similar Technologies:</strong> used for core
          functionality and performance/analytics.
        </li>
      </ul>

      <p>
        If you connect third‑party accounts (e.g., Google, Meta, Buffer) to
        enable features, we may receive information that those services share
        with us per your settings.
      </p>

      <h2>2) How We Use Information</h2>
      <ul>
        <li>Provide, operate, and improve the Services.</li>
        <li>Process payments and fulfill orders (via Stripe or similar).</li>
        <li>Communicate with you (support, transactional emails, updates, marketing where permitted).</li>
        <li>Personalize content and measure performance.</li>
        <li>Detect, prevent, and address technical or security issues; comply with legal obligations.</li>
      </ul>
      <p>
        <strong>Legal bases (EU/UK):</strong> performance of a contract;
        legitimate interests; consent (where required); compliance with legal
        obligations.
      </p>

      <h2>3) Sharing &amp; Disclosures</h2>
      <ul>
        <li>
          <strong>Service Providers/Processors:</strong> e.g., Stripe (payments),
          Vercel/Railway/RunPod (hosting), Google (analytics, calendaring),
          Cloudinary (media), Buffer/Meta/Google (social scheduling), email and
          communication providers.
        </li>
        <li>
          <strong>Business Transfers:</strong> during mergers, acquisitions, or
          asset sales.
        </li>
        <li>
          <strong>Legal:</strong> to comply with law, enforce agreements, or
          protect rights, property, or safety.
        </li>
      </ul>
      <p>We do <strong>not</strong> sell personal information.</p>

      <h2>4) International Transfers</h2>
      <p>
        We operate from Canada and may transfer information to the United States
        or other countries where our processors are located. We use appropriate
        safeguards where required.
      </p>

      <h2>5) Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to provide the
        Services, meet legal obligations, resolve disputes, and enforce
        agreements. Retention periods vary by data type and context.
      </p>

      <h2>6) Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct,
        delete, restrict, or object to processing, and to data portability. You
        may also withdraw consent where processing is based on consent. To
        exercise rights, contact
        {" "}
        <a href="mailto:support@digitalcreationswindsor.xyz">support@digitalcreationswindsor.xyz</a>.
      </p>

      <h2>7) Cookies &amp; Analytics</h2>
      <p>
        You can control cookies via your browser settings. Disabling certain
        cookies may impact functionality. Where required by law, we will request
        consent for non‑essential cookies.
      </p>

      <h2>8) Security</h2>
      <p>
        We use administrative, technical, and physical safeguards appropriate to
        the nature of the data. No method of transmission or storage is 100%
        secure.
      </p>

      <h2>9) Children’s Privacy</h2>
      <p>
        Our Services are not directed to children under the age of 13 (or the
        minimum age in your jurisdiction). We do not knowingly collect personal
        information from children.
      </p>

      <h2>10) Third‑Party Links</h2>
      <p>
        Our Services may contain links to third‑party sites. We are not
        responsible for their privacy practices.
      </p>

      <h2>11) Changes to This Policy</h2>
      <p>
        We may update this Policy periodically. We will post the updated version
        with a new Effective date and, where required, notify you.
      </p>

      <h2>12) Contact Us</h2>
      <p>
        Questions or requests: {" "}
        <a href="mailto:support@digitalcreationswindsor.xyz">support@digitalcreationswindsor.xyz</a>
      </p>

      <hr className="my-12 border-white/10" />
      <p className="text-sm text-white/50">© {year} Digital Creations Windsor — All rights reserved.</p>
    </main>
  );
}