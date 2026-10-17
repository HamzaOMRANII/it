// App icon: the same mark as the omranisystems.com tiles, with the app's colours and badge.
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
};

export function AppMark({ line, badge, glyph }) {
  return (
    <svg viewBox="4 4 124 124" aria-hidden="true">
      <circle cx="60" cy="60" r="46" fill="none" stroke="#FFFFFF" strokeWidth="9" />
      <path d="M116 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H4" fill="none" stroke="var(--tile)" strokeWidth="21" />
      <path d="M102 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H18" fill="none" stroke={line} strokeWidth="11" />
      <circle cx="100" cy="100" r="19" fill={badge} stroke="var(--tile)" strokeWidth="5" />
      {glyphs[glyph]?.(badge)}
    </svg>
  );
}
