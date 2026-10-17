// App icon (the glyph is drawn around (100,100) in a 24-unit box and scaled up inside the badge): the same mark as the omranisystems.com tiles, with the app's colours and badge.
const glyphs = {
  lock: (badge) => (
    <>
      <path d="M94 98V94A6 6 0 0 1 106 94V98" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
      <rect x="91" y="97" width="18" height="13" rx="3" fill="#FFFFFF" />
      <path d="M100 101V106" fill="none" stroke={badge} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  chat: (badge) => (
    <>
      <path d="M89 92Q89 88 93 88H107Q111 88 111 92V102Q111 106 107 106H98L92 111V106H93Q89 106 89 102Z" fill="#FFFFFF" />
      <path d="M94 94H106M94 99H102" fill="none" stroke={badge} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  spark: () => <path d="M100 86Q102 98 114 100Q102 102 100 114Q98 102 86 100Q98 98 100 86Z" fill="#FFFFFF" />,
  code: () => (
    <path d="M93 92L86 100L93 108M107 92L114 100L107 108M103 89L97 111" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  gym: () => (
    <g fill="#FFFFFF">
      <rect x="94" y="98" width="12" height="4" rx="2" />
      <rect x="91" y="94" width="4" height="12" rx="1.6" />
      <rect x="105" y="94" width="4" height="12" rx="1.6" />
      <rect x="88" y="96" width="3" height="8" rx="1.4" />
      <rect x="109" y="96" width="3" height="8" rx="1.4" />
    </g>
  ),
  key: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="94" cy="100" r="5.5" />
      <path d="M99.5 100H112M107 100V105M111 100V104" />
    </g>
  ),
  skull: (badge) => (
    <>
      <path d="M100 87C91 87 88 93 88 98C88 102 90 104 93 105V110H107V105C110 104 112 102 112 98C112 93 109 87 100 87Z" fill="#FFFFFF" />
      <circle cx="95.5" cy="98" r="2.8" fill={badge} />
      <circle cx="104.5" cy="98" r="2.8" fill={badge} />
      <path d="M100 101.5L98.4 104.5H101.6Z" fill={badge} />
      <path d="M97.7 106.5V110M102.3 106.5V110" fill="none" stroke={badge} strokeWidth="1.5" />
    </>
  ),
  briefcase: (badge) => (
    <>
      <path d="M95 92V90Q95 88 97 88H103Q105 88 105 90V92" fill="none" stroke="#FFFFFF" strokeWidth="3" />
      <rect x="88" y="92" width="24" height="18" rx="3" fill="#FFFFFF" />
      <path d="M88 100H112" fill="none" stroke={badge} strokeWidth="2" />
      <rect x="98" y="98" width="4" height="4" rx="1" fill="#FFFFFF" stroke={badge} strokeWidth="1.5" />
    </>
  ),
  grid: () => (
    <g fill="#FFFFFF">
      <rect x="88" y="88" width="10" height="10" rx="2.4" />
      <rect x="102" y="88" width="10" height="10" rx="2.4" />
      <rect x="88" y="102" width="10" height="10" rx="2.4" />
      <rect x="102" y="102" width="10" height="10" rx="2.4" />
    </g>
  ),
  box: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path d="M100 88L111 94V106L100 112L89 106V94Z" />
      <path d="M89 94L100 100L111 94M100 100V112" />
    </g>
  ),
  shield: (badge) => (
    <>
      <path d="M100 87L111 91V100Q111 108 100 113Q89 108 89 100V91Z" fill="#FFFFFF" />
      <path d="M100 94.5L101.7 98.3L105.8 98.7L102.7 101.4L103.6 105.4L100 103.3L96.4 105.4L97.3 101.4L94.2 98.7L98.3 98.3Z" fill={badge} />
    </>
  ),
  envelope: (badge) => (
    <>
      <rect x="88" y="91" width="24" height="18" rx="3" fill="#FFFFFF" />
      <path d="M89.5 93.5L100 101.5L110.5 93.5" fill="none" stroke={badge} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (badge) => (
    <>
      <rect x="93" y="87" width="14" height="26" rx="3.5" fill="#FFFFFF" />
      <circle cx="100" cy="108" r="1.6" fill={badge} />
    </>
  ),
  chip: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="93" y="93" width="14" height="14" rx="2.5" />
      <path d="M97 88.5V93M103 88.5V93M97 107V111.5M103 107V111.5M88.5 97H93M88.5 103H93M107 97H111.5M107 103H111.5" strokeWidth="2.4" />
    </g>
  ),
  layers: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 88L112 94L100 100L88 94Z" />
      <path d="M88 100L100 106L112 100M88 106L100 112L112 106" />
    </g>
  ),
  terminal: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="88" y="90" width="24" height="20" rx="3.5" />
      <path d="M93 98L97 101L93 104M100 105H106" />
    </g>
  ),
  shieldcheck: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 88L111 92V100Q111 108 100 112Q89 108 89 100V92Z" />
      <path d="M95 100L99 104L105.5 96.5" />
    </g>
  ),
  pin: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round">
      <path d="M100 113Q89 102 89 95A11 11 0 0 1 111 95Q111 102 100 113Z" />
      <circle cx="100" cy="95" r="3.6" fill="#FFFFFF" stroke="none" />
    </g>
  ),
  plane: () => (
    <path d="M100 87Q102.5 87 102.5 90V96L112 102V105L102.5 102.5V108L105.5 110V112L100 110.5L94.5 112V110L97.5 108V102.5L88 105V102L97.5 96V90Q97.5 87 100 87Z" fill="#FFFFFF" />
  ),
  eye: () => (
    <g stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round">
      <path d="M88 100Q100 87 112 100Q100 113 88 100Z" fill="none" />
      <circle cx="100" cy="100" r="3.8" fill="#FFFFFF" stroke="none" />
    </g>
  ),
  print: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round">
      <path d="M90 108V99A10 10 0 0 1 110 99V102" />
      <path d="M95 111V99A5 5 0 0 1 105 99V106" />
      <path d="M100 100V109" />
    </g>
  ),
  disk: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="100" cy="92" rx="10" ry="4" />
      <path d="M90 92V108Q90 112 100 112Q110 112 110 108V92M90 100Q90 104 100 104Q110 104 110 100" />
    </g>
  ),
  globe: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round">
      <circle cx="100" cy="100" r="11" />
      <ellipse cx="100" cy="100" rx="4.8" ry="11" />
      <path d="M89 100H111" />
    </g>
  ),
  search: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
      <circle cx="97" cy="97" r="8" />
      <path d="M103 103L111.5 111.5" />
    </g>
  ),
  target: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
      <circle cx="100" cy="100" r="8.5" />
      <path d="M100 87V92M100 108V113M87 100H92M108 100H113" />
      <circle cx="100" cy="100" r="1.8" fill="#FFFFFF" stroke="none" />
    </g>
  ),
  route: () => (
    <g fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
      <path d="M91 106C91 96 109 104 109 94" strokeDasharray="0.1 6" />
      <circle cx="91" cy="108" r="3.4" fill="#FFFFFF" stroke="none" />
      <circle cx="109" cy="92" r="3.4" fill="#FFFFFF" stroke="none" />
    </g>
  ),
};

export function AppMark({ line, badge, glyph }) {
  return (
    <svg viewBox="4 4 124 124" aria-hidden="true">
      <circle cx="60" cy="60" r="46" fill="none" stroke="#FFFFFF" strokeWidth="9" />
      <path d="M116 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H4" fill="none" stroke="var(--tile)" strokeWidth="21" />
      <path d="M102 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H18" fill="none" stroke={line} strokeWidth="11" />
      <circle cx="99" cy="99" r="25" fill={badge} stroke="var(--tile)" strokeWidth="5" />
      <g transform="translate(99 99) scale(1.7) translate(-100 -100)">{glyphs[glyph]?.(badge)}</g>
    </svg>
  );
}
