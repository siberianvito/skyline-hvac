import type { Metadata } from "next";
import LegalPage, { Item, List, Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Skyline HVAC · Miami",
  description:
    "Terms of Service for Skyline HVAC, including our SMS text messaging program terms, opt-out instructions, and message and data rate notice.",
};

const linkClass =
  "text-ice underline decoration-ice/40 underline-offset-4 transition-colors hover:text-frost";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="September 21, 2026"
      intro={
        <>
          <p>
            These Terms of Service govern your use of skylinehvacpros.com and the
            services provided by Skyline HVAC, a licensed air conditioning
            contractor serving Miami-Dade and Broward County, Florida (Florida
            certified contractor CAC1824633). By using our site, submitting a
            request, or opting in to our text messaging program, you agree to
            these terms.
          </p>
        </>
      }
    >
      <Section heading="Skyline HVAC">
        <p>
          Skyline HVAC provides air conditioning installation, service, and
          repair for residential and commercial customers across Miami-Dade and
          Broward County, including 24/7 emergency response.
        </p>
        <p>
          <strong className="text-frost">
            What messages you can expect when you opt in.
          </strong>{" "}
          When you opt in to our text messaging program, you can expect to
          receive text messages related to the service you asked us about —
          replies to your consultation or estimate request, appointment
          scheduling and confirmations, technician dispatch and arrival updates,
          estimates and job follow-up, billing notices, and seasonal maintenance
          or service reminders.
        </p>
        <p>
          Consent to receive text messages is not a condition of purchasing any
          goods or services from us.
        </p>
      </Section>

      <Section heading="Cancelling the SMS service">
        <p>
          You can cancel the SMS service at any time. Just text{" "}
          <strong className="text-frost">&quot;STOP&quot;</strong> to{" "}
          <a href="tel:+17868078125" className={linkClass}>
            (786) 807-8125
          </a>
          . After you send the SMS message &quot;STOP&quot; to us, we will send
          you an SMS message to confirm that you have been unsubscribed. After
          this, you will no longer receive SMS messages from us. If you want to
          join again, just sign up as you did the first time and we will start
          sending SMS messages to you again.
        </p>
      </Section>

      <Section heading="Help with the messaging program">
        <p>
          If you are experiencing issues with the messaging program you can reply
          with the keyword <strong className="text-frost">HELP</strong> for more
          assistance, or you can get help directly at{" "}
          <a href="mailto:contact@skylinehvacpros.com" className={linkClass}>
            contact@skylinehvacpros.com
          </a>
          .
        </p>
      </Section>

      <Section heading="Carrier liability">
        <p>Carriers are not liable for delayed or undelivered messages.</p>
      </Section>

      <Section heading="Message and data rates">
        <p>
          As always, message and data rates may apply for any messages sent to
          you from us and to us from you. You will receive messages at a
          frequency that varies depending on your request and the status of your
          service. If you have any questions about your text plan or data plan,
          it is best to contact your wireless provider.
        </p>
      </Section>

      <Section heading="Privacy">
        <p>
          If you have any questions regarding privacy, please read our privacy
          policy:{" "}
          <a href="/privacy" className={linkClass}>
            skylinehvacpros.com/privacy
          </a>
          .
        </p>
      </Section>

      <Section heading="Estimates, scheduling, and service">
        <List>
          <Item>
            Submitting a form or request on our site is a request for contact. It
            does not create a binding service agreement until we confirm the work
            with you.
          </Item>
          <Item>
            Quotes and estimates are based on the information available at the
            time and on inspection of the equipment. If conditions at the site
            differ, we will tell you before proceeding and confirm any change in
            scope or price with you.
          </Item>
          <Item>
            Appointment windows are estimates. Emergency calls, weather, parts
            availability, and access to the property can affect timing, and we
            will keep you posted if something moves.
          </Item>
          <Item>
            You agree to provide safe and reasonable access to the equipment and
            work area, and to give us accurate information about the property and
            the issue.
          </Item>
        </List>
      </Section>

      <Section heading="Payment">
        <p>
          Payment is due as set out in your estimate or invoice. We accept major
          credit cards, and financing is available on qualifying work. Amounts
          left unpaid may be subject to late charges and collection costs as
          permitted by Florida law.
        </p>
      </Section>

      <Section heading="Warranties">
        <p>
          Our workmanship is warranted as stated in your written estimate or
          invoice. Equipment and parts carry the manufacturer warranty that comes
          with them, and those terms are set by the manufacturer, not by us.
          Except as expressly stated in writing, we make no other warranties, and
          we disclaim implied warranties of merchantability and fitness for a
          particular purpose to the fullest extent permitted by law.
        </p>
      </Section>

      <Section heading="Website content">
        <p>
          The content on this site — text, images, logos, and design — belongs to
          Skyline HVAC or is used with permission, and may not be copied or
          reused without our written consent. Information on the site is provided
          for general guidance about our services and is not a substitute for an
          on-site inspection by a licensed technician.
        </p>
      </Section>

      <Section heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Skyline HVAC is not liable for
          indirect, incidental, or consequential damages arising from your use of
          this website or our text messaging program. Nothing in these terms
          limits any liability that cannot be limited under Florida law, and
          nothing here limits our obligations as a licensed and insured Florida
          contractor for the work we perform.
        </p>
      </Section>

      <Section heading="Changes to these terms">
        <p>
          We may update these Terms of Service from time to time. When we do, we
          will revise the &quot;Last updated&quot; date above and post the new
          version on this page. Continued use of our site or our messaging
          program after a change means you accept the updated terms.
        </p>
      </Section>

      <Section heading="Governing law">
        <p>
          These terms are governed by the laws of the State of Florida, without
          regard to its conflict of law rules. Any dispute will be brought in the
          state or federal courts located in Miami-Dade County, Florida.
        </p>
      </Section>

      <Section heading="Contact us">
        <List>
          <Item>
            Email:{" "}
            <a href="mailto:contact@skylinehvacpros.com" className={linkClass}>
              contact@skylinehvacpros.com
            </a>
          </Item>
          <Item>
            Phone:{" "}
            <a href="tel:+17868078125" className={linkClass}>
              (786) 807-8125
            </a>
          </Item>
          <Item>Skyline HVAC · Miami, Florida · License CAC1824633</Item>
        </List>
      </Section>
    </LegalPage>
  );
}
