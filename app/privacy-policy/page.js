import { buildPageMetadata } from '../lib/cms'
import HomeInteractions from '../ui/home-interactions'

export async function generateMetadata() {
  return buildPageMetadata('privacy-policy', {
    title: 'Privacy Policy | Loch Monster Electric',
    description: 'Learn how Loch Monster Electric collects, uses, and protects your personal information.',
  })
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <HomeInteractions />
      <main>

        {/* Hero */}
        <section className="legal-hero">
          <div className="wrap">
            <p className="legal-hero-eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p className="legal-hero-date">Effective Date: July 23, 2025</p>
          </div>
        </section>

        {/* Body */}
        <section className="legal-body">
          <div className="wrap legal-wrap">

            <p className="legal-intro">
              Loch Monster Electric and its parent company (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respect your privacy and are committed to being transparent about how we collect, use, share, and protect your information. Whether you&rsquo;re visiting our website, filling out a service request, or hiring us for a project, we want you to know exactly how your data is handled.
            </p>

            {/* 1 */}
            <div className="legal-section">
              <h2>What Information We Collect</h2>
              <p>
                When you interact with Loch Monster Electric&mdash;whether by visiting our website, submitting a contact form, or hiring us for a project&mdash;we collect certain information so we can respond, schedule, and complete the work you need.
              </p>
              <p>We collect:</p>
              <ul>
                <li><strong>Basic Contact Information (initially):</strong> Your name, phone number, and email address when you first reach out.</li>
                <li><strong>Business or Property Details (as applicable):</strong> If you&rsquo;re a business owner, property manager, or HOA representative, we may collect your company or association name, the property address, and any relevant details about the job site.</li>
                <li><strong>Project Notes:</strong> Information about the service you&rsquo;re requesting (e.g., residential, commercial, or HOA), along with a description of the work or issue.</li>
                <li><strong>Job Records:</strong> For active and completed jobs, we keep related records, including invoices, scheduling notes, materials used, permits, inspection reports, and communications. These records help us track your service history, handle warranties, and make future service more efficient.</li>
              </ul>
              <p>
                In addition to this, we automatically collect non-personal information through tools like Google Analytics when you visit our site. This may include:
              </p>
              <ul>
                <li>Your IP address</li>
                <li>Browser type</li>
                <li>Pages visited and time spent on the site</li>
              </ul>
              <p>This data helps us understand how visitors use our site and improve the experience for future customers.</p>
            </div>

            {/* 2 */}
            <div className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>
                Loch Monster Electric and its parent company use the information we collect to provide services, maintain records, and improve our operations. Specifically, we use your information to:
              </p>
              <ul>
                <li><strong>Communicate With You:</strong> Respond to your inquiries, schedule services, send confirmations, and provide updates regarding your projects.</li>
                <li><strong>Complete and Document Jobs:</strong> Record project details, issue invoices, secure necessary permits, and ensure proper documentation for warranties, inspections, and compliance.</li>
                <li><strong>Maintain Service History:</strong> Keep records of current and past work so we can serve you more efficiently in the future, including warranty follow-up, repeat service, or related projects.</li>
                <li><strong>Facilitate Subcontractor or Vendor Work (When Requested):</strong> Share relevant job and contact details with subcontractors or vendors when their involvement is needed and approved by you.</li>
                <li><strong>Site Analytics and Improvements:</strong> Analyze non-identifiable website usage data (through Google Analytics and similar tools) to help us understand how visitors use our website and improve its functionality.</li>
                <li><strong>Future Marketing (Potential):</strong> While we currently do not send marketing emails or texts, we may use your contact information for this purpose in the future. You will be given the option to opt out of any such communications.</li>
              </ul>
              <p>We retain this information indefinitely unless you request its deletion.</p>
            </div>

            {/* 3 */}
            <div className="legal-section">
              <h2>How We Share Your Information</h2>
              <p>
                Loch Monster Electric and its parent company do not sell your personal information. However, we may share your information in limited ways to provide services, comply with legal obligations, and operate our business effectively. Specifically, we may share your information with:
              </p>
              <ul>
                <li><strong>Subcontractors and Service Partners (At Your Request):</strong> When a project requires a subcontractor or third-party vendor&mdash;for example, panel installers, material suppliers, or specialty trades&mdash;we provide them with the information necessary to complete their portion of the work.</li>
                <li><strong>Marketing and Administrative Service Providers:</strong> We may share limited data (such as contact information) with trusted marketing agencies, administrative partners, or software providers to assist with analytics, advertising, or operational efficiency.</li>
                <li><strong>Regulatory and Legal Authorities:</strong> We may disclose your information if required by law, court order, or other legal process, or to enforce our agreements and protect our rights.</li>
              </ul>
              <p>
                All subcontractors, vendors, and partners receiving this information are expected to use it only for the purposes of fulfilling their responsibilities to you and to handle it securely and in compliance with applicable privacy laws.
              </p>
              <p>We do not share your personal data with unaffiliated third parties for their independent marketing or sales purposes.</p>
            </div>

            {/* 4 */}
            <div className="legal-section">
              <h2>Data Retention &amp; Security</h2>
              <p>
                Loch Monster Electric and its parent company retain customer information indefinitely, unless you specifically request deletion. This includes details provided via contact forms, during estimates, and throughout any projects we complete for you. We keep these records so we can:
              </p>
              <ul>
                <li>Reference past work for future service or warranty purposes.</li>
                <li>Provide accurate follow-up and communication during ongoing projects.</li>
                <li>Offer support if you need documentation for insurance, financing, or property records.</li>
              </ul>
              <p>
                We take the protection of your information seriously. All customer data is stored using reasonable administrative, technical, and physical safeguards designed to protect against unauthorized access, disclosure, or misuse. Access to your information is restricted to employees, subcontractors, or service providers who need it to perform their job duties, and only for legitimate business purposes.
              </p>
              <p>
                While no system is entirely immune to breaches, we maintain commercially reasonable safeguards to reduce risks. If we ever become aware of a breach affecting your personal information, we will notify you promptly as required by applicable Minnesota and federal laws.
              </p>
            </div>

            {/* 5 */}
            <div className="legal-section">
              <h2>Your Rights &amp; How to Contact Us</h2>
              <p>
                As a customer, you have the right to access, correct, or request the deletion of your personal information at any time. You may also opt out of receiving any future marketing communications if we choose to begin such outreach.
              </p>
              <p>If you would like to:</p>
              <ul>
                <li>Request a copy of the information we have on file,</li>
                <li>Update or correct your personal details,</li>
                <li>Request that we delete your information from our records, or</li>
                <li>Ask questions about how your information is used,</li>
              </ul>
              <p>you can contact us directly at:</p>
              <div className="legal-contact">
                <p><strong>Phone:</strong> <a href="tel:7632921191">763-292-1191</a></p>
                <p><strong>Email:</strong> <a href="mailto:joseph.loch12@gmail.com">joseph.loch12@gmail.com</a></p>
              </div>
              <p>
                We will respond to all requests in accordance with applicable Minnesota and federal privacy laws and within a reasonable timeframe, typically no later than 30 days from the date of your request.
              </p>
            </div>

            {/* 6 */}
            <div className="legal-section">
              <h2>Compliance With Laws &amp; Updates to This Policy</h2>
              <p>
                Loch Monster Electric complies with all applicable local, state, and federal privacy and data protection laws, including regulations governing consumer rights and electronic communications in Minnesota. We will not disclose your personal information except as outlined in this policy, as required by law, or in response to valid legal processes such as subpoenas or court orders.
              </p>
              <p>
                From time to time, we may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. If any significant changes are made, we will notify you by updating the date at the top of this page and, when appropriate, by email or other direct communication.
              </p>
              <p>
                Your continued use of our website and services following the posting of an updated Privacy Policy signifies your acceptance of those changes. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}
