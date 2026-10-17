// The omranisystems.com mark for a dark background. The ring turns white and the gap
// around the blue S is cut out with a mask, so the page glow shows through it.
export function Logo({ className }) {
  return (
    <svg className={className} viewBox="4 4 112 112" role="img" aria-label="Omrani Systems logo">
      <mask id="logo-cut" maskUnits="userSpaceOnUse" x="4" y="4" width="112" height="112">
        <rect x="4" y="4" width="112" height="112" fill="#fff" />
        <path d="M116 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H4" fill="none" stroke="#000" strokeWidth="21" />
      </mask>
      <circle cx="60" cy="60" r="46" fill="none" stroke="#FFFFFF" strokeWidth="9" mask="url(#logo-cut)" />
      <path d="M102 32H52Q40 32 40 44V48Q40 60 52 60H68Q80 60 80 72V76Q80 88 68 88H18" fill="none" stroke="#1E8FE1" strokeWidth="11" />
    </svg>
  );
}
