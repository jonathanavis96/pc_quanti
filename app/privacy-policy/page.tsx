import { Container } from "@/src/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "PC Quanti privacy policy — how we collect, use, store, and protect your personal information in compliance with the Protection of Personal Information Act (POPIA) of South Africa.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PC Quanti",
    description:
      "PC Quanti privacy policy — POPIA-compliant data protection practices for our engineering and construction consultancy services.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-pc-neutral-500 mb-12">
            Effective date: 11 March 2026 &middot; Last updated: 11 March 2026
          </p>

          <div className="prose prose-neutral max-w-none text-pc-neutral-700 space-y-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                1. Introduction
              </h2>
              <p>
                PC Quanti (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an
                engineering and construction management consultancy. We are committed to
                protecting your personal information and respecting your right to privacy in
                accordance with the{" "}
                <strong>
                  Protection of Personal Information Act, 2013 (POPIA)
                </strong>{" "}
                of South Africa, the UK General Data Protection Regulation (UK GDPR), and all
                other applicable data protection legislation.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, share, and protect
                personal information when you interact with our website{" "}
                <Link href="/" className="text-pc-gold-600 underline hover:text-pc-gold-700">
                  pcquanti.co.za
                </Link>{" "}
                and our services.
              </p>
            </section>

            {/* 2. Responsible Party */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                2. Responsible Party
              </h2>
              <p>
                In terms of POPIA, the responsible party for the processing of your personal
                information is:
              </p>
              <div className="bg-pc-neutral-50 rounded-xl p-6 my-4">
                <p className="font-semibold text-pc-neutral-900">PC Quanti</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@pcquanti.co.za"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    info@pcquanti.co.za
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+27662094919"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    +27 66 209 4919
                  </a>
                </p>
              </div>
            </section>

            {/* 3. Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                3. Information We Collect
              </h2>
              <p>We may collect the following categories of personal information:</p>

              <h3 className="text-lg font-semibold text-pc-neutral-900 mt-6 mb-2">
                3.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact details</strong> — name, email address, phone number, and
                  company name when you submit our contact form or correspond with us.
                </li>
                <li>
                  <strong>Service enquiry details</strong> — the nature of your enquiry and
                  the service area you are interested in.
                </li>
                <li>
                  <strong>Professional information</strong> — job title, organisation, and
                  project-related details shared in the course of engagement discussions.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-pc-neutral-900 mt-6 mb-2">
                3.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Usage data</strong> — pages visited, time spent on our website,
                  referring URLs, and browser type.
                </li>
                <li>
                  <strong>Device information</strong> — IP address, operating system, screen
                  resolution, and device type.
                </li>
                <li>
                  <strong>Cookies and analytics</strong> — we use analytics tools to
                  understand how visitors use our website. See Section 9 for details.
                </li>
              </ul>
            </section>

            {/* 4. Purpose of Processing */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                4. Purpose of Processing
              </h2>
              <p>
                We process personal information only for lawful purposes as permitted under
                POPIA Section 9&ndash;12. These purposes include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to your enquiries and providing requested information.</li>
                <li>
                  Communicating with you about our services, proposals, and project
                  engagements.
                </li>
                <li>
                  Fulfilling our contractual obligations and managing our professional
                  relationship with you.
                </li>
                <li>
                  Improving our website, services, and user experience through aggregated
                  analytics.
                </li>
                <li>
                  Complying with legal obligations, including tax, regulatory, and
                  professional requirements.
                </li>
                <li>
                  Protecting our legitimate interests, including the security of our systems
                  and the prevention of fraud.
                </li>
              </ul>
            </section>

            {/* 5. Legal Basis for Processing */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                5. Legal Basis for Processing
              </h2>
              <p>We rely on the following legal grounds under POPIA:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consent</strong> — where you voluntarily provide your personal
                  information via our contact form or direct communication.
                </li>
                <li>
                  <strong>Contractual necessity</strong> — where processing is necessary to
                  perform a contract with you or to take pre-contractual steps at your
                  request.
                </li>
                <li>
                  <strong>Legitimate interest</strong> — where processing is necessary for
                  our legitimate business interests, provided your rights are not overridden.
                </li>
                <li>
                  <strong>Legal obligation</strong> — where we are required by law to process
                  your information.
                </li>
              </ul>
            </section>

            {/* 6. Sharing of Personal Information */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                6. Sharing of Personal Information
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We may share your
                information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service providers</strong> — trusted third-party providers who
                  assist us with website hosting, email delivery, form processing, and
                  analytics, bound by appropriate data processing agreements.
                </li>
                <li>
                  <strong>Professional advisors</strong> — accountants, auditors, or legal
                  advisors where necessary for the conduct of our business.
                </li>
                <li>
                  <strong>Legal requirements</strong> — where disclosure is required by law,
                  regulation, court order, or governmental authority.
                </li>
              </ul>
            </section>

            {/* 7. Cross-Border Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                7. Cross-Border Transfers
              </h2>
              <p>
                As an international consultancy operating in South Africa and the United
                Kingdom, your personal information may be transferred to and processed in
                countries outside of South Africa. Where such transfers occur, we ensure that
                adequate safeguards are in place in compliance with POPIA Section 72,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Transfers to countries with adequate levels of data protection as recognised
                  by the Information Regulator.
                </li>
                <li>
                  Binding agreements with recipients that ensure an equivalent level of
                  protection for your personal information.
                </li>
                <li>Your prior consent where applicable.</li>
              </ul>
            </section>

            {/* 8. Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as is necessary to fulfil the
                purposes for which it was collected, or as required by applicable law. Our
                general retention practices are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact form submissions</strong> — retained for up to 24 months
                  after your last interaction, unless an ongoing engagement requires longer
                  retention.
                </li>
                <li>
                  <strong>Contractual records</strong> — retained for the duration of the
                  engagement and for a period of 5 years thereafter, or as required by
                  professional and regulatory obligations.
                </li>
                <li>
                  <strong>Analytics data</strong> — aggregated and anonymised data may be
                  retained indefinitely for statistical purposes.
                </li>
              </ul>
              <p>
                When personal information is no longer required, it will be securely deleted
                or de-identified.
              </p>
            </section>

            {/* 9. Cookies and Analytics */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                9. Cookies and Analytics
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience and gather usage statistics. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential cookies</strong> — necessary for the website to function
                  correctly.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — used to understand how visitors
                  interact with our website, helping us to improve content and performance.
                </li>
              </ul>
              <p>
                You can manage your cookie preferences through your browser settings. Disabling
                cookies may affect the functionality of certain parts of our website.
              </p>
            </section>

            {/* 10. Security */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                10. Security
              </h2>
              <p>
                We take reasonable technical and organisational measures to protect your
                personal information against unauthorised access, loss, destruction, or
                alteration, in accordance with POPIA Section 19. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure HTTPS encryption for all website communications.</li>
                <li>
                  Access controls to limit personal information access to authorised personnel
                  only.
                </li>
                <li>
                  Regular review of our data processing practices and security measures.
                </li>
              </ul>
              <p>
                While we strive to protect your personal information, no method of
                transmission or storage is completely secure. We cannot guarantee absolute
                security.
              </p>
            </section>

            {/* 11. Your Rights Under POPIA */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                11. Your Rights Under POPIA
              </h2>
              <p>
                As a data subject, you have the following rights under POPIA and, where
                applicable, the UK GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right of access</strong> — request confirmation of whether we hold
                  your personal information and obtain a copy of it.
                </li>
                <li>
                  <strong>Right to correction</strong> — request that inaccurate or incomplete
                  personal information be corrected or updated.
                </li>
                <li>
                  <strong>Right to deletion</strong> — request the deletion or destruction of
                  personal information that is no longer necessary for the purpose for which
                  it was collected.
                </li>
                <li>
                  <strong>Right to object</strong> — object to the processing of your personal
                  information on reasonable grounds.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong> — withdraw previously given
                  consent at any time, without affecting the lawfulness of processing carried
                  out before withdrawal.
                </li>
                <li>
                  <strong>Right to lodge a complaint</strong> — submit a complaint to the
                  Information Regulator of South Africa if you believe your personal
                  information has been unlawfully processed.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@pcquanti.co.za"
                  className="text-pc-gold-600 underline hover:text-pc-gold-700"
                >
                  info@pcquanti.co.za
                </a>
                . We will respond to your request within a reasonable time, and in any event
                within 30 days as required by POPIA.
              </p>
            </section>

            {/* 12. Information Regulator */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                12. Information Regulator
              </h2>
              <p>
                If you are not satisfied with our response to your privacy concern, you have
                the right to lodge a complaint with the Information Regulator of South Africa:
              </p>
              <div className="bg-pc-neutral-50 rounded-xl p-6 my-4">
                <p className="font-semibold text-pc-neutral-900">
                  The Information Regulator (South Africa)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:enquiries@inforegulator.org.za"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    enquiries@inforegulator.org.za
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://inforegulator.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    inforegulator.org.za
                  </a>
                </p>
              </div>
            </section>

            {/* 13. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                13. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites, including LinkedIn and
                WhatsApp. We are not responsible for the privacy practices or content of those
                external sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </section>

            {/* 14. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                14. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are directed at businesses and professionals. We do
                not knowingly collect personal information from children under the age of 18.
                If we become aware that we have inadvertently collected such information, we
                will take steps to delete it promptly.
              </p>
            </section>

            {/* 15. Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                15. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, legal requirements, or business operations. Any material changes
                will be posted on this page with an updated effective date. We encourage you to
                review this page periodically.
              </p>
            </section>

            {/* 16. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                16. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy
                or how we handle your personal information, please contact us:
              </p>
              <div className="bg-pc-neutral-50 rounded-xl p-6 my-4">
                <p className="font-semibold text-pc-neutral-900">PC Quanti</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@pcquanti.co.za"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    info@pcquanti.co.za
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+27662094919"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    +27 66 209 4919
                  </a>
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-pc-gold-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pc-gold-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/terms-conditions"
                  className="inline-flex items-center justify-center rounded-lg border border-pc-neutral-300 px-6 py-3 text-sm font-semibold text-pc-neutral-700 hover:bg-pc-neutral-50 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/disclaimer"
                  className="inline-flex items-center justify-center rounded-lg border border-pc-neutral-300 px-6 py-3 text-sm font-semibold text-pc-neutral-700 hover:bg-pc-neutral-50 transition-colors"
                >
                  Disclaimer
                </Link>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
