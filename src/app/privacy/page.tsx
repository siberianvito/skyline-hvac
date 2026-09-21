import type { Metadata } from "next";
import LegalPage, {
  Callout,
  Item,
  List,
  Section,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Skyline HVAC · Miami",
  description:
    "How Skyline HVAC collects, uses, and protects your information, including our mobile information and text messaging policy.",
};

const linkClass =
  "text-ice underline decoration-ice/40 underline-offset-4 transition-colors hover:text-frost";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="September 21, 2026"
      intro={
        <>
          <p>
            Skyline HVAC (&quot;Skyline HVAC,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is an air conditioning
            installation, service, and repair company serving Miami-Dade and
            Broward County, Florida. This Privacy Policy explains what
            information we collect when you contact us or use
            skylinehvacpros.com, how we use it, and the choices you have.
          </p>
          <p>
            By using our website or submitting a request to us, you agree to this
            Privacy Policy.
          </p>
        </>
      }
    >
      <Section heading="Information we collect">
        <p>We collect only what we need to respond to you and do the work:</p>
        <List>
          <Item>
            <strong className="text-frost">Information you give us.</strong>{" "}
            Your name, phone number, email address, service address, and details
            about the equipment or problem you are asking about — typically
            submitted through a form on our site, by phone, or by text.
          </Item>
          <Item>
            <strong className="text-frost">Service records.</strong> Notes,
            estimates, invoices, appointment history, and records of the work we
            perform for you.
          </Item>
          <Item>
            <strong className="text-frost">Technical information.</strong> Basic
            device and usage data collected automatically when you visit our
            site, such as IP address, browser type, pages viewed, and referring
            page.
          </Item>
        </List>
      </Section>

      <Section heading="How we use your information">
        <List>
          <Item>
            To respond to your request and schedule service or estimates.
          </Item>
          <Item>
            To contact you about an appointment, a quote, or work in progress —
            by phone, text, or email.
          </Item>
          <Item>
            To perform the services you hire us for, and to bill for them.
          </Item>
          <Item>
            To send service reminders, maintenance notices, and occasional
            offers, where you have asked to receive them.
          </Item>
          <Item>
            To maintain and improve our website, and to keep our systems secure.
          </Item>
          <Item>
            To meet our legal, licensing, tax, and insurance obligations as a
            Florida certified contractor (CAC1824633).
          </Item>
        </List>
      </Section>

      <Section heading="Text messaging and mobile information">
        <p>
          If you provide your mobile number and opt in, we may send you text
          messages about your request — appointment scheduling and confirmations,
          technician arrival updates, estimates and follow-up, and service
          reminders. Consent to receive text messages is not a condition of
          purchasing any goods or services from us.
        </p>
        <p>
          You can opt out at any time by replying{" "}
          <strong className="text-frost">STOP</strong>, or reply{" "}
          <strong className="text-frost">HELP</strong> for help. Message and data
          rates may apply, and message frequency varies. Our full messaging terms
          are set out in our{" "}
          <a href="/terms" className={linkClass}>
            Terms of Service
          </a>
          .
        </p>
        <p className="text-frost">
          We treat your mobile number and your messaging consent as confidential:
        </p>
        <Callout>
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. Information sharing to subcontractors
          in support services, such as customer service, is permitted. All other
          use case categories exclude text messaging originator opt-in data and
          consent; this information will not be shared with any third parties.
        </Callout>
      </Section>

      <Section heading="How we share information">
        <p>
          <strong className="text-frost">
            We do not sell your personal information, and we do not rent or trade
            it.
          </strong>{" "}
          We share information only in these limited situations:
        </p>
        <List>
          <Item>
            <strong className="text-frost">Support services.</strong> With
            subcontractors and service providers who work on our behalf to
            deliver our services — for example customer service and scheduling,
            phone and messaging platforms, payment processing, and website
            hosting. They may use your information only to perform work for us,
            and not for their own purposes.
          </Item>
          <Item>
            <strong className="text-frost">
              Installation and repair work.
            </strong>{" "}
            With a licensed technician or subcontractor assigned to your job,
            where they need your address and job details to complete the work.
          </Item>
          <Item>
            <strong className="text-frost">Legal requirements.</strong> Where we
            are required to by law, subpoena, or court order, or where necessary
            to protect our rights, our property, or the safety of others.
          </Item>
          <Item>
            <strong className="text-frost">Business transfer.</strong> In
            connection with a merger, acquisition, or sale of our business, in
            which case we will continue to protect your information under terms
            consistent with this policy.
          </Item>
        </List>
        <p>
          Text messaging originator opt-in data and consent are never shared with
          any third parties, as stated above.
        </p>
      </Section>

      <Section heading="Cookies and analytics">
        <p>
          Our site may use cookies and similar technologies to keep the site
          working properly and to understand how visitors use it, so we can
          improve it. Most browsers let you refuse or delete cookies through
          their settings. Turning off cookies may affect how parts of the site
          behave.
        </p>
      </Section>

      <Section heading="How long we keep information">
        <p>
          We keep your information for as long as needed to serve you and to meet
          our legal, licensing, warranty, tax, and insurance obligations — and
          then we dispose of it. Records tied to completed work, such as invoices
          and equipment history, are generally kept longer than a one-off
          inquiry, so we can honor warranties and answer questions about past
          service.
        </p>
      </Section>

      <Section heading="Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards to
          protect the information in our care. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute security.
          If you believe your information has been compromised, please contact us
          right away.
        </p>
      </Section>

      <Section heading="Your choices">
        <List>
          <Item>
            <strong className="text-frost">Text messages.</strong> Reply{" "}
            <strong className="text-frost">STOP</strong> to any message to
            unsubscribe.
          </Item>
          <Item>
            <strong className="text-frost">Email.</strong> Use the unsubscribe
            link in a marketing email, or ask us to remove you.
          </Item>
          <Item>
            <strong className="text-frost">Phone.</strong> Ask us not to call,
            and we will note it on your record.
          </Item>
          <Item>
            <strong className="text-frost">
              Access, correction, and deletion.
            </strong>{" "}
            You may ask us for a copy of the information we hold about you, ask
            us to correct it, or ask us to delete it. We will respond as required
            by applicable law, and may need to keep certain records where the law
            requires it.
          </Item>
        </List>
        <p>
          Opting out of marketing messages does not stop transactional messages
          about work you have scheduled with us, such as an appointment
          confirmation.
        </p>
      </Section>

      <Section heading="Children">
        <p>
          Our services are directed to adults. We do not knowingly collect
          personal information from children under 13. If you believe a child has
          provided us information, contact us and we will delete it.
        </p>
      </Section>

      <Section heading="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date above and post the new
          version on this page. Material changes will be made clear on our site.
        </p>
      </Section>

      <Section heading="Contact us">
        <p>
          Questions about this policy, or about the information we hold about
          you:
        </p>
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
