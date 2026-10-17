import { Card } from './components/Card.jsx';
import { Page } from './components/Page.jsx';
import { go } from './router.js';
import { accentOf, emails, phone, services, premium } from './apps.js';

// Give a list of { glyph, ... } the colours of the home card with this id.
const tinted = (items, id) => items.map(({ glyph, ...rest }) => ({ ...rest, icon: { ...accentOf(id), glyph } }));

const contactCards = (id) =>
  tinted(
    [
      ...emails.map((e) => ({ name: 'Email', text: e, href: `mailto:${e}`, meta: 'mailto', glyph: 'envelope' })),
      { name: 'Phone', text: phone.label, href: phone.href, meta: 'tel', glyph: 'phone' },
    ],
    id,
  );

export function Services() {
  return (
    <Page id="services" path="/services" title="Public Services" lead="What I build and check for clients.">
      <div className="grid">
        {tinted(services, 'services').map((s) => <Card key={s.name} {...s} />)}
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
      id="premium"
      path="/premium"
      title="Premium Services"
      lead="Reserved for governments, large private companies and individuals who need highly secure, advanced technology."
    >
      <div className="grid">
        {tinted(premium, 'premium').map((s) => <Card key={s.name} {...s} />)}
      </div>
      <p className="inner-note">
        And more, on request. <a href="/contact" onClick={go('/contact')}>Contact</a>.
      </p>
    </Page>
  );
}

export function Contact() {
  return (
    <Page id="products" path="/contact" title="Contact" lead="Write or call. Products list and quotes are given on request.">
      <div className="grid">
        {contactCards('products').map((c) => <Card key={c.text} {...c} />)}
      </div>
    </Page>
  );
}

export function DangerZone() {
  return (
    <Page id="danger" path="/danger-zone" title="Danger Zone">
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
        {contactCards('danger').slice(0, emails.length).map((c) => <Card key={c.text} {...c} />)}
      </div>
    </Page>
  );
}
