import { Container } from "@/src/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "PC Quanti terms and conditions — governing the use of our website and the provision of engineering and construction management consultancy services in South Africa and internationally.",
  alternates: {
    canonical: "/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | PC Quanti",
    description:
      "Terms and conditions governing the use of PC Quanti's website and professional engineering consultancy services.",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
            Terms &amp; Conditions
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
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the
                website operated by PC Quanti (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) at{" "}
                <Link href="/" className="text-pc-gold-600 underline hover:text-pc-gold-700">
                  pcquanti.co.za
                </Link>{" "}
                and any professional services we provide. By accessing this website or
                engaging our services, you agree to be bound by these Terms. If you do not
                agree, please do not use our website or services.
              </p>
              <p>
                These Terms are governed by the laws of the Republic of South Africa,
                including the Consumer Protection Act, 2008 (CPA), the Electronic
                Communications and Transactions Act, 2002 (ECTA), and the Protection of
                Personal Information Act, 2013 (POPIA).
              </p>
            </section>

            {/* 2. About PC Quanti */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                2. About PC Quanti
              </h2>
              <p>
                PC Quanti is an engineering and construction management consultancy
                providing professional advisory services including project management,
                quantity surveying, contract administration, claims management, commercial
                management, project controls, planning, risk management, dispute resolution,
                and construction management. We operate in South Africa, the United Kingdom,
                and internationally.
              </p>
            </section>

            {/* 3. Use of Website */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                3. Use of Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in a manner that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Does not infringe the rights of, or restrict or inhibit the use and
                  enjoyment of, this website by any third party.
                </li>
                <li>
                  Does not involve any unlawful, fraudulent, or harmful activity, or the
                  transmission of any material that is defamatory, offensive, or otherwise
                  objectionable.
                </li>
                <li>
                  Does not involve the introduction of viruses, malware, or other
                  technologically harmful material.
                </li>
                <li>
                  Does not attempt to gain unauthorised access to our website, server, or any
                  connected database.
                </li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to our website at any
                time, without notice, for any reason.
              </p>
            </section>

            {/* 4. Professional Services */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                4. Professional Services
              </h2>
              <p>
                The provision of our professional consulting services is subject to a
                separate written engagement agreement between PC Quanti and the client. These
                Terms do not constitute an offer to provide services, and no
                client&ndash;consultant relationship is established by your use of this
                website or submission of a contact form enquiry.
              </p>
              <p>
                All service engagements will be governed by the specific terms, scope, fees,
                and conditions set out in the applicable engagement letter or contract. In the
                event of any conflict between these Terms and a signed engagement agreement,
                the engagement agreement shall prevail.
              </p>
            </section>

            {/* 5. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website — including but not limited to text, graphics,
                logos, images, photographs, icons, and software — is the property of
                PC Quanti or its licensors and is protected by South African and international
                copyright, trademark, and intellectual property laws.
              </p>
              <p>You may not, without our prior written consent:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Reproduce, distribute, modify, or create derivative works from any content
                  on this website.
                </li>
                <li>
                  Use our name, logo, or trademarks for any commercial purpose.
                </li>
                <li>
                  Frame, mirror, or otherwise incorporate any part of this website into
                  another website or application.
                </li>
              </ul>
              <p>
                You may view, download, and print pages from this website for your personal,
                non-commercial use, provided you do not remove any copyright or proprietary
                notices.
              </p>
            </section>

            {/* 6. Website Content and Accuracy */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                6. Website Content and Accuracy
              </h2>
              <p>
                The information on this website is provided for general informational purposes
                only. While we endeavour to keep the content accurate and up to date, we make
                no representations or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or availability of the
                information, services, or related graphics contained on the website.
              </p>
              <p>
                The content on this website does not constitute professional advice. You
                should not rely on it as a substitute for professional engineering,
                commercial, contractual, or legal advice tailored to your specific
                circumstances.
              </p>
            </section>

            {/* 7. Contact Form and Communications */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                7. Contact Form and Communications
              </h2>
              <p>
                When you submit an enquiry through our contact form, you consent to us
                processing the information you provide for the purpose of responding to your
                enquiry. Your personal information will be handled in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-pc-gold-600 underline hover:text-pc-gold-700"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                We will endeavour to respond to all enquiries within a reasonable time.
                However, submitting a contact form does not guarantee the availability of our
                services or create any obligation on our part to provide services.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by South African law, PC Quanti, its
                directors, employees, and agents shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages arising from or
                related to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your use of, or inability to use, this website.
                </li>
                <li>
                  Any errors, omissions, or inaccuracies in the content of this website.
                </li>
                <li>
                  Any unauthorised access to or use of our servers or personal information
                  stored therein.
                </li>
                <li>
                  Any interruption or cessation of transmission to or from our website.
                </li>
                <li>
                  Any reliance you place on information provided on this website.
                </li>
              </ul>
              <p>
                Nothing in these Terms excludes or limits liability that cannot be excluded
                or limited under applicable South African law, including liability for fraud
                or gross negligence.
              </p>
            </section>

            {/* 9. Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                9. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless PC Quanti, its directors,
                officers, employees, and agents from and against any claims, damages, losses,
                liabilities, costs, and expenses (including reasonable legal fees) arising out
                of or in connection with your breach of these Terms or your use of this
                website in a manner not authorised by these Terms.
              </p>
            </section>

            {/* 10. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                10. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites, including LinkedIn,
                WhatsApp, and other external platforms. These links are provided for your
                convenience only. We do not control, endorse, or accept responsibility for
                the content, privacy policies, or practices of any third-party website. Your
                use of third-party websites is at your own risk.
              </p>
            </section>

            {/* 11. Availability and Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                11. Availability and Modifications
              </h2>
              <p>
                We do not guarantee that this website will be available at all times or
                without interruption. We may suspend, withdraw, or restrict the availability
                of all or any part of the website for business, operational, or technical
                reasons.
              </p>
              <p>
                We reserve the right to modify, update, or remove any content on this website
                at any time without prior notice. We may also revise these Terms from time to
                time. The revised Terms will apply from the date of publication on this page.
                Your continued use of the website after any changes constitutes acceptance of
                the updated Terms.
              </p>
            </section>

            {/* 12. ECTA Compliance */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                12. ECTA Compliance
              </h2>
              <p>
                In accordance with the Electronic Communications and Transactions Act, 2002
                (ECTA), Section 43, the following information is provided:
              </p>
              <div className="bg-pc-neutral-50 rounded-xl p-6 my-4 space-y-1">
                <p>
                  <strong className="text-pc-neutral-900">Full name:</strong> PC Quanti
                </p>
                <p>
                  <strong className="text-pc-neutral-900">Email:</strong>{" "}
                  <a
                    href="mailto:info@pcquanti.co.za"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    info@pcquanti.co.za
                  </a>
                </p>
                <p>
                  <strong className="text-pc-neutral-900">Phone:</strong>{" "}
                  <a
                    href="tel:+27828632154"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    +27 82 863 2154
                  </a>
                </p>
                <p>
                  <strong className="text-pc-neutral-900">Website:</strong>{" "}
                  <Link
                    href="/"
                    className="text-pc-gold-600 underline hover:text-pc-gold-700"
                  >
                    pcquanti.co.za
                  </Link>
                </p>
              </div>
            </section>

            {/* 13. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                13. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                the Republic of South Africa. Any disputes arising out of or in connection
                with these Terms shall be subject to the exclusive jurisdiction of the courts
                of the Republic of South Africa.
              </p>
              <p>
                Where services are provided to clients in the United Kingdom or other
                jurisdictions, the governing law and jurisdiction may be varied by the terms
                of the applicable engagement agreement.
              </p>
            </section>

            {/* 14. Severability */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                14. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be invalid, unlawful, or
                unenforceable by a court of competent jurisdiction, the remaining provisions
                shall continue in full force and effect. The invalid provision shall be
                modified to the minimum extent necessary to make it valid and enforceable, or
                if modification is not possible, it shall be deemed severed from these Terms.
              </p>
            </section>

            {/* 15. Entire Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                15. Entire Agreement
              </h2>
              <p>
                These Terms, together with our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-pc-gold-600 underline hover:text-pc-gold-700"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/disclaimer"
                  className="text-pc-gold-600 underline hover:text-pc-gold-700"
                >
                  Disclaimer
                </Link>
                , constitute the entire agreement between you and PC Quanti regarding the use
                of this website. They supersede all prior agreements, understandings, and
                communications, whether written or oral, relating to the subject matter
                hereof.
              </p>
            </section>

            {/* 16. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                16. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
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
