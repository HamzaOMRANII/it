// Everything listed on the page. Add an entry here to add a card.
// icon: accent colours of the app's mark, the same ones the omranisystems.com tiles use.
// status: 'live' | 'building' | 'planned'

export const apps = [
  {
    id: 'pass',
    name: 'Pass',
    kind: 'App',
    text: 'Self-hosted password manager with encrypted vaults and shared access.',
    url: 'https://pass.omranisystems.com/',
    status: 'live',
    icon: { line: '#EF4444', badge: '#DC2626', glyph: 'lock' },
  },
  {
    id: 'chat',
    name: 'H_CHAT',
    kind: 'App · Android',
    text: 'End-to-end encrypted chat with live mode, web and Android.',
    url: 'https://chat.omranisystems.com/',
    status: 'building',
    icon: { line: '#8C2A3F', badge: '#6E1B2B', glyph: 'chat' },
  },
  {
    id: 'gym',
    name: 'Gym',
    kind: 'App · Android',
    text: 'Beginner strength training: weekly plans, set logging and progress.',
    url: 'https://gym.omranisystems.com/',
    status: 'live',
    icon: { line: '#EA580C', badge: '#EA580C', glyph: 'gym' },
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
    id: 'portfolio',
    name: 'Portfolio',
    kind: 'Site',
    text: 'IT solutions: full-stack, embedded, AI/BI and security.',
    url: 'https://portfolio.omranisystems.com/',
    status: 'live',
    icon: { line: '#2FD1D9', badge: '#1C6E7A', glyph: 'code' },
  },
  {
    id: 'gate',
    name: 'Gate',
    kind: 'Service',
    text: 'One access code per app, checked by Nginx before every request.',
    url: 'https://omranisystems.com/',
    status: 'live',
    icon: { line: '#1E8FE1', badge: '#1E8FE1', glyph: 'key' },
  },
];

export const statusLabel = {
  live: 'Live',
  building: 'In progress',
  planned: 'Planned',
};
