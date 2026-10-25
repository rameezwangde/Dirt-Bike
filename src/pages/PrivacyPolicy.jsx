import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#071116] min-h-screen text-white pt-[110px] md:pt-[130px] flex flex-col justify-between selection:bg-[#F97818] selection:text-[#071116]">
      <Navbar />

      <main className="relative w-full max-w-[1100px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-16">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F97818]/10 border border-[#F97818]/30 rounded text-[#F97818] text-xs font-barlow font-bold tracking-widest uppercase mb-4">
            Data Protection & Privacy
          </div>
          <h1 className="font-barlow font-black uppercase text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Privacy <span className="text-[#F97818]">Policy</span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 font-inter text-sm">
            <span><strong>Effective date:</strong> 23 October 2026</span>
            <span>•</span>
            <span>
              <strong>Website:</strong>{' '}
              <a 
                href="https://endurobikedubai.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F97818] hover:underline"
              >
                https://endurobikedubai.net/
              </a>
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="font-inter text-white/80 text-[15px] sm:text-[16px] leading-[1.8] space-y-10">

          {/* Section 1 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">1.</span> Who We Are
            </h2>
            <div className="space-y-4">
              <p>
                We trade as <strong className="text-white">endurbikedubai.net</strong> and are responsible for the personal information described in this Policy.
              </p>
              <div className="bg-[#0B171E] border border-white/10 rounded-lg p-5 mt-4 space-y-2 text-sm text-white/90">
                <div><strong className="text-[#F97818]">Riding base and contact address:</strong> XP83+8CW Al Madam - Dubai-Hatta Rd - Sharjah</div>
                <div><strong className="text-[#F97818]">Privacy contact:</strong> <a href="mailto:info@endurobikedubai.com" className="hover:text-[#F97818] transition-colors">info@endurobikedubai.com</a></div>
                <div><strong className="text-[#F97818]">Telephone:</strong> <a href="tel:+971544464649" className="hover:text-[#F97818] transition-colors">+971 54 446 4649</a></div>
              </div>
              <p className="text-sm text-white/60 pt-2">
                This Policy explains how we handle personal information relating to website visitors, enquiries, bookings, participants and customers.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">2.</span> Information We Collect
            </h2>
            <div className="space-y-4">
              <p>Depending on your interaction with us, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li><strong className="text-white">Contact information:</strong> name, email address, telephone number and correspondence.</li>
                <li><strong className="text-white">Booking information:</strong> activity, date, participants, ages where relevant, preferences, collection point and accommodation details needed for transfers.</li>
                <li><strong className="text-white">Eligibility information:</strong> identification or licence details where necessary to verify eligibility or meet a legal requirement.</li>
                <li><strong className="text-white">Payment information:</strong> amount, payment status, transaction reference and information needed to reconcile payments or process refunds.</li>
                <li><strong className="text-white">Safety information:</strong> relevant health disclosures, emergency contacts, participation forms and incident reports.</li>
                <li><strong className="text-white">Technical information:</strong> IP address, browser and device information, website requests and security logs.</li>
                <li><strong className="text-white">Consent records:</strong> marketing preferences, cookie choices and permissions for photographs or videos.</li>
              </ul>
              <p>
                We collect only information reasonably needed for the relevant purpose. Do not send full identification documents or detailed medical histories unless we request them through an appropriate channel and explain why they are necessary.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">3.</span> Where Information Comes From
            </h2>
            <div className="space-y-4">
              <p>
                We receive information directly when you contact us, make a booking, participate or complete forms.
              </p>
              <p>
                We may receive booking details from a lead customer, authorised agent, booking platform or service provider involved in your reservation.
              </p>
              <p>
                If you supply another person’s information, you must have an appropriate reason to do so and make this Policy available to them. Each adult’s optional marketing and image permissions must be obtained separately.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">4.</span> Why We Use Information
            </h2>
            <div className="space-y-4">
              <p>We use relevant information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li>Respond to enquiries and prepare quotations.</li>
                <li>Confirm and manage bookings, payments, transfers and refunds.</li>
                <li>Check participation eligibility and arrange suitable equipment.</li>
                <li>Manage safety, incidents and emergency assistance.</li>
                <li>Provide customer support and resolve complaints.</li>
                <li>Maintain financial and business records required by law.</li>
                <li>Prevent fraud and protect our website and services.</li>
                <li>Establish, exercise or defend legal claims.</li>
                <li>Send optional marketing or use promotional images where separately authorised.</li>
              </ul>
              <p>
                Where applicable law requires consent, we obtain it. Other processing may be permitted because it is necessary for a booking or contract, compliance with legal duties, protection of vital interests or another applicable statutory exception.
              </p>
              <p>
                We do not treat acceptance of our booking terms as blanket consent for every use of personal information.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">5.</span> Health and Other Sensitive Information
            </h2>
            <div className="space-y-4">
              <p>
                We restrict health information to what is necessary to assess activity suitability, implement safety arrangements or respond to an incident.
              </p>
              <p>
                Where required, we obtain explicit consent for this information. Access is restricted to people who need it for the relevant purpose.
              </p>
              <p>
                In an emergency, we may share necessary information with medical responders or authorities where permitted by law.
              </p>
              <p>
                You may decline to provide optional information. If essential safety information is unavailable, we may be unable to provide an activity safely; we will explain this.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">6.</span> Payments
            </h2>
            <div className="space-y-4">
              <p>
                Payments made through an external payment provider are handled under that provider’s own privacy and security arrangements.
              </p>
              <p>
                We receive information needed to confirm payment and manage the booking. Do not send full payment card numbers, security codes or online banking passwords by email or WhatsApp.
              </p>
              <p className="text-white/70 text-sm">
                Transactions processed through our payment gateway partners are compliant with PCI-DSS standards.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">7.</span> Who We Share Information With
            </h2>
            <div className="space-y-4">
              <p>We may share the minimum necessary information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li>Guides, booking staff and authorised operational personnel.</li>
                <li>Transport providers, activity operators and camps delivering your booking.</li>
                <li>Payment providers, banks and fraud prevention services.</li>
                <li>Website hosting, communications, booking and IT support providers.</li>
                <li>Insurers, claims handlers and professional advisers where relevant.</li>
                <li>Emergency responders, courts, regulators or authorities where legally justified.</li>
              </ul>
              <p>
                Service providers acting on our instructions must handle information under appropriate contractual and security arrangements.
              </p>
              <p>
                Independent providers may act as separate controllers for their own services. We identify relevant providers where needed so you can review their notices.
              </p>
              <p className="font-semibold text-white">
                We do not sell your personal information or disclose customer lists for unrelated third-party marketing.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">8.</span> WhatsApp and External Platforms
            </h2>
            <div className="space-y-4">
              <p>
                If you contact us through WhatsApp, social media or another external platform, that platform also processes information under its own terms and privacy policy.
              </p>
              <p>
                We use the information you send to respond and manage your enquiry or booking. Sending an enquiry does not automatically subscribe you to promotional messages.
              </p>
              <p>
                External links and embedded services may take you to other providers. We do not control their privacy practices.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">9.</span> International Transfers
            </h2>
            <div className="space-y-4">
              <p>
                Some service providers may store or access information outside the UAE.
              </p>
              <p>
                Before making a transfer, we assess applicable requirements and use a legally permitted transfer mechanism and appropriate safeguards where required. Depending on the destination and circumstances, these may include recognised protection standards, contractual protections or an applicable legal exception.
              </p>
              <p>
                Contact us for information about relevant destinations and safeguards.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">10.</span> Cookies and Similar Technologies
            </h2>
            <div className="space-y-4">
              <p>
                Our website may use essential technologies needed for security, navigation and requested functionality.
              </p>
              <p>
                Any optional analytics, advertising or similar tracking technologies will be described in our cookie notice or preference tool, including their providers, purposes and durations.
              </p>
              <p>
                Where consent is required, optional technologies will remain inactive until you agree. Browser controls can also restrict cookies, although disabling essential functionality may affect the website.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">11.</span> Marketing Preferences
            </h2>
            <div className="space-y-4">
              <p>
                We send optional promotional emails, WhatsApp messages or other direct marketing only where lawfully permitted and with the consent required by applicable law.
              </p>
              <p>
                You may unsubscribe using the message instructions or contact us at <a href="mailto:info@endurobikedubai.com" className="text-[#F97818] hover:underline">info@endurobikedubai.com</a>.
              </p>
              <p>
                Withdrawing marketing permission does not prevent necessary booking, safety, payment or refund communications. We may retain a minimal suppression record to respect your request not to receive marketing.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">12.</span> Photographs and Videos
            </h2>
            <div className="space-y-4">
              <p>
                Where photography is included, we use the information necessary to capture and deliver your requested images.
              </p>
              <p>
                We obtain separate permission before using identifiable customer images in our advertising, website or social media. Refusing promotional permission does not affect your booking.
              </p>
              <p>
                For a child’s promotional image, we require appropriate parent or legal guardian permission.
              </p>
              <p>
                You may withdraw consent for future promotional use by contacting us. We will assess removal from channels we control and explain any practical limits, including copies independently shared by others or material already lawfully distributed.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">13.</span> Children’s Information
            </h2>
            <div className="space-y-4">
              <p>
                Bookings must be made by an adult. We collect a child’s information only where necessary for a permitted booking, eligibility, safety or another lawful purpose.
              </p>
              <p>
                Parents or legal guardians should provide required details and permissions. We do not knowingly use children’s information for targeted marketing.
              </p>
              <p>
                Contact us if you believe a child has supplied information without appropriate authority so we can investigate.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">14.</span> Retention
            </h2>
            <div className="space-y-4">
              <p>
                We retain information only for as long as needed for its purpose, applicable legal obligations and reasonably relevant claims or disputes.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li><strong className="text-white">Unconverted enquiries:</strong> Retained up to 12 months for follow-up and customer service continuity.</li>
                <li><strong className="text-white">Booking and financial records:</strong> Retained for 5 to 7 years in accordance with UAE commercial and tax regulations.</li>
                <li><strong className="text-white">Identification checks:</strong> Verified prior to activity and retained only as required by local transport authorities and insurers.</li>
                <li><strong className="text-white">Safety forms and incident records:</strong> Retained in compliance with insurer requirements and applicable limitation periods for injury claims.</li>
                <li><strong className="text-white">Health disclosures:</strong> Securely deleted shortly after completion of the booking, unless an incident report requires preservation.</li>
                <li><strong className="text-white">Marketing records:</strong> Retained until withdrawal of consent or after an extended period of inactivity.</li>
                <li><strong className="text-white">Customer images:</strong> Provided to customers and retained temporarily for backup delivery; promotional usage governed by specific permission.</li>
              </ul>
              <p className="text-sm text-white/60">
                Information subject to an active dispute or legal preservation duty may be retained longer where necessary. We securely delete or anonymise information when retention is no longer justified.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">15.</span> Security
            </h2>
            <div className="space-y-4">
              <p>
                We use appropriate technical and organisational measures proportionate to the information and risks involved, including restricted access and controls over service providers.
              </p>
              <p>
                No system is completely secure. If a personal data breach occurs, we will investigate, take appropriate action and make notifications required by applicable law.
              </p>
            </div>
          </section>

          {/* Section 16 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">16.</span> Your Rights
            </h2>
            <div className="space-y-4">
              <p>Subject to applicable law and relevant exceptions, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li>Obtain information about how your personal information is processed.</li>
                <li>Access or receive a copy of your information.</li>
                <li>Correct inaccurate information.</li>
                <li>Request deletion.</li>
                <li>Restrict or stop particular processing.</li>
                <li>Receive or transfer information where applicable.</li>
                <li>Withdraw consent where processing relies on consent.</li>
                <li>Object to direct marketing.</li>
                <li>Challenge qualifying decisions based solely on automated processing.</li>
              </ul>
              <p>
                Contact <a href="mailto:info@endurobikedubai.com" className="text-[#F97818] hover:underline">info@endurobikedubai.com</a> to make a request. We may ask for proportionate identity verification and will respond within applicable legal deadlines.
              </p>
              <p>
                Withdrawal does not invalidate processing lawfully carried out beforehand. Some information may need to be retained to meet legal obligations or handle claims; we will explain relevant exceptions. You may complain to the competent data protection authority where applicable.
              </p>
            </div>
          </section>

          {/* Section 17 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">17.</span> Automated Decisions
            </h2>
            <div className="space-y-4">
              <p>
                We do not make decisions producing legal or similarly significant effects about participants solely through automated processing. Eligibility and safety decisions are reviewed by authorised staff.
              </p>
              <p>
                If our practices change, we will update this Policy and provide any additional information and safeguards required.
              </p>
            </div>
          </section>

          {/* Section 18 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">18.</span> Changes and Contact
            </h2>
            <div className="space-y-4">
              <p>
                We may update this Policy to reflect changes in our services, systems or legal obligations. The effective date above identifies the current version.
              </p>
              <p>
                We will give additional notice or obtain fresh consent where required for a material change.
              </p>
              <div className="bg-[#0B171E] border border-white/10 rounded-lg p-5 mt-4 space-y-2 text-sm text-white/90">
                <div className="font-bold text-white text-base">endurbikedubai.net</div>
                <div><strong className="text-[#F97818]">Email:</strong> <a href="mailto:info@endurobikedubai.com" className="hover:text-[#F97818] transition-colors">info@endurobikedubai.com</a></div>
                <div><strong className="text-[#F97818]">Telephone:</strong> <a href="tel:+971544464649" className="hover:text-[#F97818] transition-colors">+971 54 446 4649</a></div>
                <div><strong className="text-[#F97818]">Riding base:</strong> XP83+8CW Al Madam - Dubai-Hatta Rd - Sharjah</div>
              </div>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
