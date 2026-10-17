// Everything listed on the site. Add an entry here to add a card.
// icon: accent colours of the card's mark. status: key of statusLabel (chip text and colour).
// A card with `url` opens in a new tab, a card with `to` opens an internal page.

export const emails = ['hamza.omrani.it@gmail.com', 'contact@omranisystems.com'];
export const phone = { label: '+1 505 659 2792', href: 'tel:+15056592792' };

export const apps = [
  {
    id: 'career',
    name: 'Career & Antecedents',
    kind: 'Site',
    text: 'Years of code, circuits and caffeine. Hamza Omrani’s track record, bugs not included.',
    url: 'https://portfolio.omranisystems.com/',
    status: 'open',
    icon: { line: '#2FD1D9', badge: '#1C6E7A', glyph: 'briefcase' },
  },
  {
    id: 'services',
    name: 'Public Services',
    kind: 'Page',
    text: 'Software, embedded, full systems, operating systems and security work for hire.',
    to: '/services',
    status: 'open',
    icon: { line: '#8C2A3F', badge: '#6E1B2B', glyph: 'grid' },
  },
  {
    id: 'products',
    name: 'Products',
    kind: 'Page',
    text: 'The list of available products is given on request. Contact the admin or owner.',
    to: '/contact',
    status: 'request',
    icon: { line: '#EA580C', badge: '#EA580C', glyph: 'box' },
  },
  {
    id: 'ai',
    name: 'AI',
    kind: 'Service',
    text: 'AI tools and assistants for the other apps.',
    url: 'https://ai.omranisystems.com/',
    status: 'planned',
    icon: { line: '#6B7380', badge: '#3F4652', glyph: 'spark' },
  },
  {
    id: 'premium',
    name: 'Premium Services',
    kind: 'Page',
    text: 'Reserved for governments, large companies and individuals who need highly secure, advanced technology.',
    to: '/premium',
    status: 'reserved',
    icon: { line: '#C9A24D', badge: '#8A6B22', glyph: 'shield' },
  },
  {
    id: 'danger',
    name: 'Danger Zone',
    kind: 'Page',
    text: 'Grey, red, black or white hat? Report the bug you found, or try our server. The ideas are not on it.',
    to: '/danger-zone',
    status: 'bounty',
    icon: { line: '#EF4444', badge: '#B91C1C', glyph: 'skull' },
  },
];

export const statusLabel = {
  open: 'Open',
  request: 'On request',
  planned: 'Planned',
  reserved: 'Reserved',
  bounty: 'Bug reports',
};

// Colours of a home card, reused by the page it opens (and by that page's cards and background).
export const accentOf = (id) => {
  const { line, badge } = apps.find((a) => a.id === id).icon;
  return { line, badge };
};

// Inner pages: cards without links, glyph + one line each. Colours come from the parent card.
export const services = [
  { name: 'Software solutions', text: 'Web, desktop and backend software built to fit your need.', glyph: 'code' },
  { name: 'Embedded systems', text: 'Firmware and electronics for devices that must just work.', glyph: 'chip' },
  { name: 'Full systems', text: 'End to end: hardware, firmware, software and cloud, in one hand.', glyph: 'layers' },
  { name: 'OS and embedded OS', text: 'Custom operating systems and embedded OS builds.', glyph: 'terminal' },
  { name: 'Security services', text: 'Audits, and checks of security features in embedded systems and software.', glyph: 'shieldcheck' },
];

export const premium = [
  { name: 'GPS & geolocation', text: 'Precise positioning and location systems.', glyph: 'pin' },
  { name: 'Aviation systems', text: 'Technology for aircraft and flight operations.', glyph: 'plane' },
  { name: 'Intelligence & counter-surveillance', text: 'Spot who is watching, and stay unseen.', glyph: 'eye' },
  { name: 'Digital forensics', text: 'Evidence from devices and data, handled properly.', glyph: 'print' },
  { name: 'Data recovery', text: 'Get back what was lost, damaged or deleted.', glyph: 'disk' },
  { name: 'Information gathering', text: 'OSINT: open-source intelligence, done methodically.', glyph: 'globe' },
  { name: 'Deep IT investigations', text: 'Find out what really happened inside your systems.', glyph: 'search' },
  { name: 'Trackers', text: 'Know where your assets are, in real time.', glyph: 'target' },
  { name: 'Tracers', text: 'Follow a trail back to its source.', glyph: 'route' },
];
