import { Container } from "@/src/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description:
    "PC Quanti professional services disclaimer — limitations of liability, scope of information, and professional advice notice for our engineering and construction consultancy services.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | PC Quanti",
    description:
      "Professional services disclaimer for PC Quanti engineering and construction management consultancy.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
            Disclaimer
          </h1>
          <p className="text-sm text-pc-neutral-500 mb-12">
            Effective date: 11 March 2025 &middot; Last updated: 11 March 2025
          </p>

          <div className="prose prose-neutral max-w-none text-pc-neutral-700 space-y-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                1. Introduction
              </h2>
              <p>
                This Disclaimer governs your use of the website operated by PC Quanti
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), an engineering and
                construction management consultancy. By accessing or using our website at{" "}
                <Link href="/" className="text-pc-gold-600 underline hover:text-pc-gold-700">
                  pcquanti.co.za
                </Link>
                , you acknowledge that you have read, understood, and agree to be bound by this
                Disclaimer.
              </p>
            </section>

            {/* 2. General Information Only */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                2. General Information Only
              </h2>
              <p>
                The content published on this website is provided for general informational purposes
                only. It is intended to give an overview of PC Quanti&apos;s services, capabilities,
                and areas of expertise. Nothing on this website constitutes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Professional engineering, construction, quantity surveying, or project management
                  advice.
                </li>
                <li>
                  A formal proposal, quotation, or offer to provide services.
                </li>
                <li>
                  Legal, financial, tax, or regulatory advice of any kind.
                </li>
                <li>
                  A guarantee or warranty regarding the outcome of any project or engagement.
                </li>
              </ul>
              <p>
                You should not act or refrain from acting on the basis of any information on this
                website without first seeking appropriate professional advice tailored to your
                specific circumstances.
              </p>
            </section>

            {/* 3. Professional Advice */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                3. Professional Advice
              </h2>
              <p>
                Our website describes the types of engineering and construction management services
                we offer. However, every project, contract, and client engagement is unique.
                The information provided on this website is not a substitute for professional advice
                specific to your project requirements, contractual obligations, or regulatory
                environment.
              </p>
              <p>
                Before making decisions that may affect your project, business, or legal position,
                we strongly recommend consulting with appropriately qualified professionals,
                including registered engineers, quantity surveyors, legal advisors, and financial
                specialists as applicable to your situation.
              </p>
            </section>

            {/* 4. No Warranties */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                4. No Warranties
              </h2>
              <p>
                While we endeavour to ensure that the information on this website is accurate,
                complete, and up to date, we make no representations, warranties, or guarantees,
                whether express or implied, regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The accuracy, reliability, completeness, or currency of any content on this
                  website.
                </li>
                <li>
                  The suitability of our services for any particular purpose or project.
                </li>
                <li>
                  The availability, security, or uninterrupted operation of this website.
                </li>
                <li>
                  The absence of errors, viruses, or other harmful components.
                </li>
              </ul>
              <p>
                All information is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                without warranty of any kind, to the fullest extent permitted by South African law.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, including the Consumer Protection
                Act 68 of 2008 and the Electronic Communications and Transactions Act 25 of 2002
                (ECTA), PC Quanti, its directors, employees, consultants, and affiliates shall not
                be liable for any:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Direct, indirect, incidental, special, consequential, or punitive damages arising
                  from your use of or inability to use this website.
                </li>
                <li>
                  Loss of profits, revenue, data, business opportunities, or goodwill, whether
                  arising in contract, tort (including negligence), strict liability, or otherwise.
                </li>
                <li>
                  Damages arising from reliance on any information provided on this website.
                </li>
                <li>
                  Damages resulting from unauthorised access to or alteration of your data or
                  transmissions.
                </li>
              </ul>
              <p>
                This limitation of liability applies regardless of whether we have been advised of
                the possibility of such damages.
              </p>
            </section>

            {/* 6. Project Descriptions & Case Studies */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                6. Project Descriptions &amp; Case Studies
              </h2>
              <p>
                Any project descriptions, case studies, or references to past work on this website
                are provided for illustrative purposes only. They are intended to demonstrate our
                capabilities and experience, and should not be interpreted as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  A guarantee that similar results will be achieved for your project.
                </li>
                <li>
                  An endorsement by or affiliation with any client, contractor, or project owner
                  mentioned, unless expressly stated.
                </li>
                <li>
                  A comprehensive or exhaustive account of the work performed. Project details may
                  be generalised or anonymised for confidentiality.
                </li>
              </ul>
            </section>

            {/* 7. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                7. Third-Party Links
              </h2>
              <p>
                This website may contain links to external websites, including but not limited to
                LinkedIn, WhatsApp, and other third-party platforms. These links are provided for
                your convenience and informational purposes only. We do not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party website.</li>
                <li>Guarantee the accuracy, relevance, or availability of linked external content.</li>
                <li>Accept liability for any loss or damage arising from your use of third-party websites.</li>
              </ul>
              <p>
                We encourage you to review the terms of use and privacy policies of any external
                websites you visit.
              </p>
            </section>

            {/* 8. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                8. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos,
                images, photographs, and design elements, is the property of PC Quanti or its
                licensors and is protected by South African and international intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works from
                any content on this website without our prior written consent.
              </p>
              <p>
                The PC Quanti name, logo, and all related trademarks are the property of PC Quanti.
                Unauthorised use of any of our intellectual property is strictly prohibited.
              </p>
            </section>

            {/* 9. Professional Registration */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                9. Professional Registration &amp; Standards
              </h2>
              <p>
                PC Quanti operates in accordance with applicable South African professional
                standards and regulatory requirements for engineering and construction management
                services. Where our team members hold professional registrations (such as with the
                South African Council for the Quantity Surveying Profession, the Engineering Council
                of South Africa, or equivalent bodies), those registrations apply to the individuals
                in their professional capacity.
              </p>
              <p>
                References to professional qualifications, memberships, or registrations on this
                website are provided for informational purposes and should be verified independently
                where necessary for your specific requirements.
              </p>
            </section>

            {/* 10. Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                10. Indemnification
              </h2>
              <p>
                By using this website, you agree to indemnify, defend, and hold harmless PC Quanti,
                its directors, employees, consultants, and affiliates from and against any and all
                claims, liabilities, damages, losses, and expenses (including reasonable legal fees)
                arising from or in connection with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or access to this website.</li>
                <li>Your violation of this Disclaimer or any applicable law.</li>
                <li>
                  Your reliance on any information provided on this website without obtaining
                  independent professional advice.
                </li>
              </ul>
            </section>

            {/* 11. Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                11. Governing Law
              </h2>
              <p>
                This Disclaimer shall be governed by and construed in accordance with the laws of
                the Republic of South Africa. Any disputes arising out of or in connection with this
                Disclaimer or your use of this website shall be subject to the exclusive
                jurisdiction of the courts of the Republic of South Africa.
              </p>
              <p>
                Where our services extend to the United Kingdom or other jurisdictions, the
                applicable local laws may also apply to the extent required by those jurisdictions.
              </p>
            </section>

            {/* 12. Electronic Communications (ECTA) */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                12. Electronic Communications
              </h2>
              <p>
                In compliance with the Electronic Communications and Transactions Act 25 of 2002
                (ECTA), we provide the following information:
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
                    href="tel:+27828632154"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    +27 82 863 2154
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <Link href="/" className="text-pc-gold-600 underline hover:text-pc-gold-700">
                    pcquanti.co.za
                  </Link>
                </p>
              </div>
            </section>

            {/* 13. Changes to This Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                13. Changes to This Disclaimer
              </h2>
              <p>
                We reserve the right to update or modify this Disclaimer at any time without prior
                notice. Any changes will be effective immediately upon posting on this page with an
                updated effective date. Your continued use of this website after any changes
                constitutes your acceptance of the revised Disclaimer.
              </p>
              <p>
                We encourage you to review this page periodically to stay informed of any updates.
              </p>
            </section>

            {/* 14. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Disclaimer, please contact us:
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
                    href="tel:+27828632154"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    +27 82 863 2154
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
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center rounded-lg border border-pc-neutral-300 px-6 py-3 text-sm font-semibold text-pc-neutral-700 hover:bg-pc-neutral-50 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="inline-flex items-center justify-center rounded-lg border border-pc-neutral-300 px-6 py-3 text-sm font-semibold text-pc-neutral-700 hover:bg-pc-neutral-50 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
