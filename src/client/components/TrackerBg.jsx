import { accentOf } from '../apps.js';

const T = { x: 800, y: 730 }; // the target the crosshair locks on
const streets = [
  'M0 180C300 220 500 120 800 200S1300 120 1600 190',
  'M0 700C260 640 520 760 820 690S1340 740 1600 650',
  'M240 0C280 260 180 520 300 900',
  'M1180 0C1120 300 1260 560 1190 900',
  'M0 450L420 450L520 380L1100 380L1200 520L1600 520',
];
const dots = [[300, 250], [520, 640], [1180, 200], [1340, 610], [1010, 770], [210, 520], [650, 130]];

// GPS tracker scene: map grid, pulsing points, a radar sweep, and a crosshair that hunts the target.
export function TrackerBg() {
  return (
    <div className="scene tracker" aria-hidden="true" style={{ color: accentOf('danger').line }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="trk-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <linearGradient id="trk-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#trk-grid)" opacity="0.12" />
        <g fill="none" stroke="currentColor" opacity="0.14" strokeWidth="2">
          {streets.map((d) => <path key={d} d={d} />)}
          <ellipse cx={T.x} cy={T.y} rx="640" ry="340" strokeDasharray="2 10" />
          <ellipse cx={T.x} cy={T.y} rx="470" ry="240" strokeDasharray="2 10" />
        </g>

        {dots.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="4" fill="currentColor" opacity="0.7" />
            <circle className="trk-pulse" r="22" fill="none" stroke="currentColor" strokeWidth="2" style={{ animationDelay: `${i * 0.7}s` }} />
          </g>
        ))}

        <g fill="none" stroke="currentColor">
          <circle cx={T.x} cy={T.y} r="120" opacity="0.25" />
          <circle cx={T.x} cy={T.y} r="260" opacity="0.15" />
          <circle cx={T.x} cy={T.y} r="400" opacity="0.1" />
          <path d={`M${T.x - 420} ${T.y}H${T.x + 420}M${T.x} ${T.y - 420}V${T.y + 420}`} opacity="0.12" strokeDasharray="4 8" />
        </g>
        <g className="trk-sweep">
          <path d={`M${T.x} ${T.y}L${T.x + 400} ${T.y}A400 400 0 0 0 ${T.x + 400 * Math.cos(-0.6)} ${T.y + 400 * Math.sin(-0.6)}Z`} fill="url(#trk-sweep)" opacity="0.5" />
          <path d={`M${T.x} ${T.y}H${T.x + 400}`} stroke="currentColor" strokeWidth="2" opacity="0.7" />
        </g>

        <circle className="trk-burst" cx={T.x} cy={T.y} r="40" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle className="trk-burst trk-burst-2" cx={T.x} cy={T.y} r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx={T.x} cy={T.y} r="10" fill="currentColor" />
        <circle className="trk-pulse" cx={T.x} cy={T.y} r="30" fill="none" stroke="currentColor" strokeWidth="2.5" />

        <g className="trk-cross" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle r="26" />
          <path d="M0 -40V-14M0 14V40M-40 0H-14M14 0H40" />
        </g>
      </svg>
    </div>
  );
}
