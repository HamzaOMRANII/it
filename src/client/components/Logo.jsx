// The IT mark from the omranisystems.com tiles, for a dark background. The ring is white and
// the gaps around the blue S and the </> badge are cut out with a mask, so the page glow shows through.
export function Logo({ className }) {
  return (
    <svg className={className} viewBox="4 4 124 124" role="img" aria-label="IT Omrani Systems logo">
      <mask id="logo-cut" maskUnits="userSpaceOnUse" x="4" y="4" width="124" height="124">
        <rect x="4" y="4" width="124" height="124" fill="#fff" />
        <path d="M116 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H4" fill="none" stroke="#000" strokeWidth="21" />
        <circle cx="100" cy="100" r="21.5" fill="#000" />
      </mask>
      <circle cx="60" cy="60" r="46" fill="none" stroke="#FFFFFF" strokeWidth="9" mask="url(#logo-cut)" />
      <path d="M102 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H18" fill="none" stroke="var(--it-blue)" strokeWidth="11" />
      <circle cx="100" cy="100" r="19" fill="var(--it-navy)" />
      <path d="M93 92L86 100L93 108M107 92L114 100L107 108M103 89L97 111" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
