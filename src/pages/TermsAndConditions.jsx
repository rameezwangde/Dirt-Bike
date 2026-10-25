import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const TermsAndConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#071116] min-h-screen text-white pt-[110px] md:pt-[130px] flex flex-col justify-between selection:bg-[#F97818] selection:text-[#071116]">
      <Navbar />

      <main className="relative w-full max-w-[1100px] mx-auto px-5 sm:px-8 md:px-12 py-10 md:py-16">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F97818]/10 border border-[#F97818]/30 rounded text-[#F97818] text-xs font-barlow font-bold tracking-widest uppercase mb-4">
            Legal Agreement
          </div>
          <h1 className="font-barlow font-black uppercase text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Terms & <span className="text-[#F97818]">Conditions</span>
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
              <span className="text-[#F97818]">1.</span> About Us
            </h2>
            <div className="space-y-4">
              <p>
                We trade as <strong className="text-white">endurbikedubai.net</strong> and provide dirt biking, quad biking, dune buggy experiences, desert safaris and related services.
              </p>
              <p>
                In these Terms, “we”, “us” and “our” refer to the business operating as endurbikedubai.net. “You” means the person making a booking and, where applicable, each participant.
              </p>
              <div className="bg-[#0B171E] border border-white/10 rounded-lg p-5 mt-4 space-y-2 text-sm text-white/90">
                <div><strong className="text-[#F97818]">Email:</strong> <a href="mailto:info@endurobikedubai.com" className="hover:text-[#F97818] transition-colors">info@endurobikedubai.com</a></div>
                <div><strong className="text-[#F97818]">Telephone and WhatsApp:</strong> <a href="https://wa.me/971544464649" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97818] transition-colors">+971 54 446 4649</a></div>
                <div><strong className="text-[#F97818]">Riding base:</strong> XP83+8CW Al Madam - Dubai-Hatta Rd - Sharjah</div>
              </div>
              <p className="text-sm text-white/60 pt-2">
                These Terms cover bookings made through our website, WhatsApp, telephone, email, authorised agents or in person.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">2.</span> Your Booking and Agreement
            </h2>
            <div className="space-y-4">
              <p>
                Before confirming a booking, you must read these Terms, the relevant package description and any specific conditions supplied with your quotation.
              </p>
              <p>
                A booking becomes binding when we issue written confirmation and receive the payment or deposit specified in that confirmation. An enquiry, availability message or automated acknowledgement does not by itself confirm a booking.
              </p>
              <p>
                The person booking must be at least 18 years old and authorised to arrange the booking. Each adult participant must personally accept the participation conditions and complete any required safety documentation. A parent or legal guardian must complete the required documentation for a minor.
              </p>
              <p>
                The lead customer must provide accurate information and pass booking details and eligibility requirements to the group. Booking for another adult does not authorise you to waive that person’s legal rights.
              </p>
              <p>
                Any additional supplier conditions or special cancellation terms must be disclosed before payment. Mandatory legal rights prevail over any conflicting contractual provision.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">3.</span> Package Details and Inclusions
            </h2>
            <div className="space-y-4">
              <p>
                Your written confirmation will identify the booked activity, vehicle category, number of participants, date, meeting or collection arrangements, duration, price and inclusions.
              </p>
              <p>
                Unless expressly included, transfers, meals, photography, personal insurance, damage protection, security deposits and optional activities are additional.
              </p>
              <p>
                We will explain before payment whether the advertised duration means riding time or the total experience, including briefing, fitting equipment and breaks. Transfers are additional to the activity duration unless expressly stated otherwise.
              </p>
              <p>
                Routes and pace depend on ability, terrain, weather and safety. Specific dunes, speeds, distances, sunset views and photographic opportunities cannot be guaranteed.
              </p>
              <p>
                Descriptions such as “open keys”, “full power” or “unlocked engine” do not authorise unrestricted riding, racing or departure from the approved route. Safety controls and guide instructions always apply.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">4.</span> Prices and Payment
            </h2>
            <div className="space-y-4">
              <p>
                Prices are charged in UAE dirhams unless expressly agreed otherwise. Any alternative currency display is indicative; your payment provider may apply its own conversion rate or fees.
              </p>
              <p>
                We will disclose the total payable, applicable taxes, mandatory charges, deposit and balance deadline before you commit to payment.
              </p>
              <p>
                Payment must be made through an authorised payment channel. Do not send payment card details through ordinary email or WhatsApp.
              </p>
              <p>
                If payment is overdue, we may cancel the booking after reasonable notice where practicable. Any retained amount will be governed by the cancellation conditions agreed before payment and applicable law.
              </p>
              <p>
                If a material pricing error is discovered, we will explain it and offer you the choice of accepting the corrected price or cancelling for a refund of amounts paid.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">5.</span> Age, Ability and Eligibility
            </h2>
            <div className="space-y-4">
              <p>
                Driver and passenger requirements differ by vehicle, route, manufacturer, insurer and local authority.
              </p>
              <p>
                Before accepting payment, we will provide the applicable minimum age, experience, identification, licence, height, weight and passenger restrictions for your chosen activity. You must disclose the ages of all minors accurately.
              </p>
              <p>
                No participant may drive until staff have checked eligibility and assessed their ability to control the vehicle safely. Booking a high-performance vehicle does not guarantee permission to drive it if the assessment indicates that it is unsuitable.
              </p>
              <p>
                Dirt bike riders must demonstrate the balance, braking, steering and transmission skills required for the selected bike. Beginner instruction does not guarantee readiness for an unrestricted desert route.
              </p>
              <p>
                Passengers may travel only in a vehicle and seating position approved for them. Single-rider dirt bikes and quads must not carry passengers.
              </p>
              <p>
                Minors require the consent and supervision arrangements specified for their activity. A guardian’s consent cannot override legal, manufacturer or insurance restrictions.
              </p>
              <p>
                Where a licence or permit is required, it must be valid and presented before participation.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">6.</span> Health and Fitness
            </h2>
            <div className="space-y-4">
              <p>
                Desert motorsport involves physical exertion, vibration, sudden movement, heat and exposure to remote conditions.
              </p>
              <p>
                You must tell us privately about any condition that may affect safe participation, including significant heart or respiratory conditions, seizures, recent surgery, back or neck injuries, impaired mobility or medication affecting alertness.
              </p>
              <p>
                Pregnant participants must not take part in self-drive desert motorsport or dune bashing.
              </p>
              <p>
                If you are unsure whether an activity is suitable, obtain medical advice before booking. Staff cannot provide medical clearance.
              </p>
              <p>
                Do not participate while affected by alcohol, recreational drugs, fatigue or medication that impairs judgment or coordination.
              </p>
              <p>
                We may refuse or stop participation where there is a reasonable safety concern. If you disclose a concern before booking, we will discuss available alternatives and cancellation arrangements before payment.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">7.</span> Safety Briefing and Protective Equipment
            </h2>
            <div className="space-y-4">
              <p>
                Every driver and passenger must attend the safety briefing, understand the instructions and complete the required checks before departure.
              </p>
              <p>
                Tell staff immediately if you do not understand an instruction or need language assistance. Do not start until the essential safety instructions are understood.
              </p>
              <p>
                Wear all protective equipment specified for your vehicle and activity. Helmets must be correctly secured. Buggy occupants must use their seat belts or harnesses throughout the ride and keep their limbs inside the vehicle.
              </p>
              <p>
                Wear closed footwear and suitable clothing. Secure loose garments, scarves, hair and personal belongings away from moving parts.
              </p>
              <p>
                Do not remove, interfere with or disable protective equipment, restraints, guards, tracking devices or safety controls.
              </p>
              <p>
                Report damaged or poorly fitting equipment before use. We will not knowingly require you to use unsafe equipment.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">8.</span> Riding Conduct
            </h2>
            <div className="space-y-4">
              <p>You must:</p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li>Follow the guide, approved route, speed instructions and safe spacing.</li>
                <li>Stay within authorised riding areas.</li>
                <li>Drive within your ability and slow down when visibility or terrain changes.</li>
                <li>Stop safely when instructed or when you feel unwell, lose sight of the group or notice a mechanical problem.</li>
                <li>Respect other riders, wildlife, property and the environment.</li>
              </ul>
              <p>
                You must not race, perform wheelies or deliberate jumps, drive recklessly, overtake without permission, use a handheld phone while moving, or allow an unauthorised person to drive.
              </p>
              <p>
                Do not enter public roads, restricted land, farms, settlements or protected areas unless expressly permitted as part of a lawful, authorised route.
              </p>
              <p>
                Drivers may change only with staff approval, while the vehicle is stationary and after eligibility checks.
              </p>
              <p>
                We may end participation for serious or repeated unsafe conduct. Any resulting charge or refund will reflect the circumstances, services already supplied and applicable law.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">9.</span> Vehicles, Inspections and Breakdowns
            </h2>
            <div className="space-y-4">
              <p>
                Vehicles remain the property of their owner. They may be used only for the confirmed activity and must not be sub-rented, modified, towed or used outside the agreed area or period.
              </p>
              <p>
                Before departure, you and our staff should record visible existing damage and report defects. Tell staff promptly about any fault discovered during the activity.
              </p>
              <p>
                If a vehicle breaks down without misuse, we will arrange assistance and, where reasonably available, a suitable replacement or continuation of the activity.
              </p>
              <p>
                If we cannot deliver a material part of the booked service, we will offer an appropriate remedy, which may include replacement, rescheduling or a refund for the undelivered portion.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">10.</span> Damage, Security Deposits and Recovery Costs
            </h2>
            <div className="space-y-4">
              <p>
                Any security deposit, payment authorisation, damage excess or optional damage protection will be disclosed before payment. If none is disclosed, these Terms do not create an undisclosed deposit or fixed excess.
              </p>
              <p>
                You are responsible, to the extent established under applicable law, for damage or loss caused by your negligent, reckless, deliberate or unauthorised use, or breach of reasonable safety instructions.
              </p>
              <p>
                You are not automatically responsible for every accident or mechanical failure. You will not be charged for fair wear and tear, recorded pre-existing damage, inherent defects or damage attributable to our failure to maintain equipment properly.
              </p>
              <p>
                Before seeking payment or retaining a deposit, we will explain the basis of the claim and provide reasonable supporting evidence, such as inspection records, photographs and repair estimates or invoices.
              </p>
              <p>
                Any charge must reflect a reasonable, evidenced loss. We will account for insurance recoveries and avoid charging twice for the same loss. Loss-of-use or recovery charges will apply only where lawful, reasonably incurred and properly substantiated.
              </p>
              <p>
                Where practicable, we will give you an opportunity to review and dispute the assessment before collection.
              </p>
              <p>
                We will release any undisputed deposit balance promptly after inspection, subject to your payment provider’s processing time. Any retained amount and reason will be explained in writing.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">11.</span> Insurance
            </h2>
            <div className="space-y-4">
              <p>
                Do not assume that a booking includes personal accident, medical, evacuation, repatriation or vehicle damage insurance.
              </p>
              <p>
                Before payment, we will explain any insurance or damage protection included in your package and make material limits, exclusions and excesses available.
              </p>
              <p>
                You should arrange suitable personal cover that expressly includes your intended activity, vehicle type and engine capacity. Ordinary travel insurance may exclude off-road motorsport.
              </p>
              <p>
                Any insurance requirement imposed by law or our operating permissions remains our responsibility. This section does not reduce our legal duties.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">12.</span> Accidents and Emergency Assistance
            </h2>
            <div className="space-y-4">
              <p>
                Stop immediately after an accident or suspected injury and notify the guide. Follow emergency instructions and do not continue on a potentially unsafe vehicle.
              </p>
              <p>
                We may contact emergency services, provide reasonable first aid and share relevant information with responders where necessary and lawful.
              </p>
              <p>
                Emergency response may take longer in remote desert locations. No participant should leave the group or attempt an unauthorised recovery.
              </p>
              <p>
                Responsibility for medical, evacuation, recovery or repatriation costs depends on the circumstances, applicable law and available insurance. These costs are not automatically transferred to a participant regardless of fault.
              </p>
              <p>
                Participants must cooperate reasonably with lawful incident reporting and insurance enquiries.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">13.</span> Arrival, Transfers and Late Attendance
            </h2>
            <div className="space-y-4">
              <p>
                Your confirmation will state the meeting point, check-in time and any collection window.
              </p>
              <p>
                If transfers are booked, provide an accurate location and a reachable contact number. Notify us promptly if you are delayed.
              </p>
              <p>
                Late arrival may reduce available riding time where extending it would affect safety or subsequent bookings. We will explain available alternatives.
              </p>
              <p>
                If our delay materially reduces the service and we cannot make up the time, we will offer an appropriate remedy.
              </p>
              <p>
                Missed flights, traffic and failure to reach the meeting point are normally customer circumstances, subject to applicable law and the cancellation conditions accepted at booking.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">14.</span> Customer Cancellations and Changes
            </h2>
            <div className="space-y-4">
              <p>
                Cancellation and amendment requests must be sent to our published email or WhatsApp number. We will acknowledge receipt.
              </p>
              <p>
                The following schedule applies unless a different schedule was clearly disclosed and accepted before payment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/75">
                <li><strong className="text-white">Cancellation deadline:</strong> Notice must be provided at least 24 hours prior to the scheduled booking time.</li>
                <li><strong className="text-white">Cancellation before deadline:</strong> Eligible for a full refund or free rescheduling.</li>
                <li><strong className="text-white">Cancellation after deadline:</strong> Subject to a 50% charge of the total booking value to cover reservation and equipment allocation costs.</li>
                <li><strong className="text-white">No-show:</strong> Non-refundable; 100% of the booking value is retained.</li>
                <li><strong className="text-white">Rescheduling:</strong> Permitted free of charge with at least 12 hours advance notice, subject to vehicle and guide availability.</li>
                <li><strong className="text-white">Private groups or exclusive bookings:</strong> Specific terms will be provided in writing during the booking quote.</li>
              </ul>
              <p className="text-sm text-white/60">
                Cancellation deadlines use UAE local time (GST / UTC+4).
              </p>
              <p>
                Any cancellation charge is subject to mandatory consumer rights and applicable legal controls. Calling a payment a “deposit” does not by itself make it non-refundable.
              </p>
              <p>
                If a participant cannot continue after starting for personal reasons, any refund will depend on services supplied, recoverable costs, the circumstances and applicable law.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">15.</span> Cancellation or Changes by Us
            </h2>
            <div className="space-y-4">
              <p>
                We may delay, alter or cancel an activity for unsafe weather, poor visibility, extreme conditions, authority restrictions, mechanical problems or other circumstances affecting safe or lawful operation.
              </p>
              <p>
                We will notify you as soon as reasonably practicable.
              </p>
              <p>
                If we cancel before the activity starts, you may choose an available alternative or a refund for the cancelled service. You will not be required to accept credit instead of a refund where a refund is due.
              </p>
              <p>
                If we make a material change to the vehicle category, duration or main service before departure, you may accept it or cancel the affected service for an appropriate refund.
              </p>
              <p>
                If an activity is interrupted, we will assess what was delivered and offer an appropriate remedy for any material undelivered portion.
              </p>
              <p>
                Events outside our reasonable control may affect performance, but do not automatically remove refund obligations or statutory rights.
              </p>
            </div>
          </section>

          {/* Section 16 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">16.</span> Refund Processing
            </h2>
            <div className="space-y-4">
              <p>
                Approved refunds will normally be returned to the original payment method and payer, unless another lawful method is agreed.
              </p>
              <p>
                We will initiate an approved refund within <strong className="text-white">7 to 14 business days</strong>. Your bank or payment provider may require additional processing time.
              </p>
              <p>
                Any permitted deduction will be explained. We will not deduct undisclosed administrative charges or impose a blanket refusal of refunds for defective or undelivered services.
              </p>
            </div>
          </section>

          {/* Section 17 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">17.</span> Safari Activities and Third-Party Services
            </h2>
            <div className="space-y-4">
              <p>
                Where included, dune bashing, camel rides, sandboarding, meals, entertainment and camp access are subject to their own safety and suitability requirements.
              </p>
              <p>
                Use vehicle restraints and follow activity staff instructions. Tell us about dietary requirements before booking; we will explain what can be accommodated and any cross-contamination limitations.
              </p>
              <p>
                Entertainment and camp arrangements may change because of official restrictions, religious observances or safety conditions. Material changes will be addressed under these Terms.
              </p>
              <p>
                If another licensed business delivers part of your booking, we will identify its role and disclose relevant conditions before payment. Using a supplier does not remove responsibility imposed on us by law.
              </p>
              <p>
                If we act solely as a disclosed booking agent for a particular service, we will identify the contracting supplier before you pay.
              </p>
            </div>
          </section>

          {/* Section 18 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">18.</span> Personal Belongings and Photography
            </h2>
            <div className="space-y-4">
              <p>
                Secure valuables and avoid bringing items that may be damaged by sand, heat or vibration.
              </p>
              <p>
                We are not an insurer of personal belongings. Responsibility for loss or damage will depend on the circumstances and applicable law, including any failure by us to take reasonable care.
              </p>
              <p>
                Ask permission before photographing other participants. Personal drones may be used only with all required permissions and our prior approval.
              </p>
              <p>
                Marketing use of identifiable photographs or videos requires separate permission. Participation does not automatically authorise us to publish your image.
              </p>
            </div>
          </section>

          {/* Section 19 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">19.</span> Risk Acknowledgement and Responsibility
            </h2>
            <div className="space-y-4">
              <p>
                Off-road desert activities involve inherent risks, including falls, collisions, rollovers, changing sand conditions, limited visibility, burns, dehydration and serious injury or death.
              </p>
              <p>
                You acknowledge these risks and agree to follow the safety requirements. We remain responsible for exercising the care, competence and diligence required by law.
              </p>
              <p>
                Nothing in these Terms excludes or restricts liability where doing so would be unlawful, including liability for fraud, deliberate wrongdoing or any other responsibility that cannot legally be excluded.
              </p>
              <p>
                A safety acknowledgement or participation form does not remove mandatory consumer rights or make us exempt from all responsibility.
              </p>
              <p>
                Any claim concerning injury, property damage or other loss will be assessed according to the facts, applicable law and legally relevant responsibility of the parties.
              </p>
            </div>
          </section>

          {/* Section 20 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">20.</span> Website Use
            </h2>
            <div className="space-y-4">
              <p>
                Website content is owned by us or used with permission. You may use it for personal booking enquiries but must not reproduce it commercially without permission.
              </p>
              <p>
                Do not misuse the website, attempt unauthorised access, interfere with its operation or submit fraudulent information.
              </p>
              <p>
                We take reasonable steps to maintain accurate information. Before payment, we will clarify any material discrepancy affecting your booking.
              </p>
            </div>
          </section>

          {/* Section 21 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">21.</span> Privacy
            </h2>
            <div className="space-y-4">
              <p>
                Personal information is handled as explained in our Privacy Policy. Accepting these Terms does not constitute consent to optional marketing, advertising cookies or publication of your image.
              </p>
            </div>
          </section>

          {/* Section 22 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">22.</span> Complaints and Disputes
            </h2>
            <div className="space-y-4">
              <p>
                Raise an operational concern with the guide promptly so we can try to resolve it safely. You may also contact <a href="mailto:info@endurobikedubai.com" className="text-[#F97818] hover:underline">info@endurobikedubai.com</a> with your booking reference and details.
              </p>
              <p>
                We aim to acknowledge complaints within <strong className="text-white">24 to 48 hours</strong> and provide a substantive response within <strong className="text-white">5 to 7 business days</strong>. These service targets do not shorten any legal claim period.
              </p>
              <p>
                You may contact the competent consumer protection authority or pursue other remedies available by law.
              </p>
              <p>
                These Terms are governed by the federal laws of the United Arab Emirates and the applicable laws of the relevant emirate.
              </p>
              <p>
                Disputes may be brought before the competent UAE courts, subject to mandatory jurisdiction rules and any other non-excludable consumer rights.
              </p>
            </div>
          </section>

          {/* Section 23 */}
          <section className="bg-white/[0.02] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-[#F97818]/20 transition-colors">
            <h2 className="font-barlow font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 flex items-center gap-3">
              <span className="text-[#F97818]">23.</span> Changes and General Provisions
            </h2>
            <div className="space-y-4">
              <p>
                The version supplied when your booking is confirmed applies to that booking. We will not retrospectively impose material changes without agreement or a legal requirement.
              </p>
              <p>
                If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law.
              </p>
              <p>
                Any translation will be prepared to reflect the same meaning. Mandatory legal language requirements and the authority of official legal texts remain unaffected.
              </p>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
