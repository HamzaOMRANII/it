import { Card } from './components/Card.jsx';
import { Page } from './components/Page.jsx';
import { go } from './router.js';
import { emails, phone, services, premium } from './apps.js';

const contactCards = [
  ...emails.map((e) => ({
    name: 'Email',
    text: e,
    href: `mailto:${e}`,
    meta: 'mailto',
    icon: { line: '#2FD1D9', badge: '#1C6E7A', glyph: 'envelope' },
  })),
  {
    name: 'Phone',
    text: phone.label,
    href: phone.href,
    meta: 'tel',
    icon: { line: '#2FD1D9', badge: '#1C6E7A', glyph: 'phone' },
  },
];

export function Services() {
  return (
    <Page path="/services" title="Public Services" lead="What I build and check for clients.">
      <div className="grid">
        {services.map((s) => <Card key={s.name} {...s} />)}
      </div>
      <p className="inner-note">
        Tell me what you need: <a href="/contact" onClick={go('/contact')}>get in touch</a>.
      </p>
    </Page>
  );
}

export function Premium() {
  return (
    <Page
      path="/premium"
      title="Premium Services"
      lead="Reserved for governments, large private companies and individuals who need highly secure, advanced technology."
    >
      <div className="grid">
        {premium.map((s) => <Card key={s.name} {...s} />)}
      </div>
      <p className="inner-note">
        And more, on request. <a href="/contact" onClick={go('/contact')}>Contact</a>.
      </p>
    </Page>
  );
}

export function Contact() {
  return (
    <Page path="/contact" title="Contact" lead="Write or call. Products list and quotes are given on request.">
      <div className="grid">
        {contactCards.map((c) => <Card key={c.text} {...c} />)}
      </div>
    </Page>
  );
}

export function DangerZone() {
  return (
    <Page path="/danger-zone" title="Danger Zone">
      <div className="panel panel-danger">
        <p className="panel-big">Grey, red, black or white hat?</p>
        <p>Report the bug or vulnerability you found.</p>
        <p>
          Or go ahead and get into our server, no problem. The ideas live in our minds, not on the
          server. Codes and passwords there do nothing.
        </p>
      </div>
      <p className="inner-note">Send your report to:</p>
      <div className="grid">
        {contactCards.slice(0, emails.length).map((c) => <Card key={c.text} {...c} icon={{ ...c.icon, line: '#EF4444', badge: '#B91C1C' }} />)}
      </div>
    </Page>
  );
}
