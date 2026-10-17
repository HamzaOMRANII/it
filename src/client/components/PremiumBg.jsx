import { accentOf } from '../apps.js';

const C = { x: 800, y: 450 };
const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
const compass = [['N', 0], ['E', 90], ['S', 180], ['W', 270]];
const polar = (deg, r) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C.x + r * Math.cos(a), C.y + r * Math.sin(a)];
};
const hex = (i, n) => Array.from({ length: n }, (_, j) => ((i * 7919 + j * 104729) % 65536).toString(16).padStart(4, '0')).join(' ');
const code = Array.from({ length: 6 }, (_, i) => Array.from({ length: 14 }, (_, j) => hex(i * 14 + j, 3)));
const jets = [
  { cls: 'jet-a', path: 'M-80 170L1700 330' },
  { cls: 'jet-b', path: 'M1700 720L-80 560' },
  { cls: 'jet-c', path: 'M-80 840L1700 780' },
];

// Military, aviation and cyber-lab scene: HUD range rings, radar sweep, jets on flight paths,
// hex and circuit texture, drifting code columns.
export function PremiumBg() {
  return (
    <div className="scene premium" aria-hidden="true" style={{ color: accentOf('premium').line }}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="pre-hex" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(0.9)">
            <path d="M28 0L56 16V48L28 64L0 48V16ZM28 64V97M0 48L-28 64M56 48L84 64" fill="none" stroke="var(--steel)" strokeWidth="1" />
          </pattern>
          <linearGradient id="pre-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.45" />
          </linearGradient>
          <path id="pre-jet" d="M0 -12Q2.5 -12 2.5 -9V-3L12 3V6L2.5 3.5V9L5.5 11V13L0 11.5L-5.5 13V11L-2.5 9V3.5L-12 6V3L-2.5 -3V-9Q-2.5 -12 0 -12Z" />
        </defs>

        <rect x="0" y="0" width="560" height="900" fill="url(#pre-hex)" opacity="0.12" />
        <rect x="1100" y="500" width="500" height="400" fill="url(#pre-hex)" opacity="0.1" />

        <g className="pre-code" fill="var(--steel)" opacity="0.2" fontFamily="JetBrains Mono, monospace" fontSize="13">
          {code.map((col, i) => (
            <g key={i} transform={`translate(${1130 + i * 78} 0)`}>
              <g className="pre-col" style={{ animationDelay: `${-i * 5}s` }}>
                {col.map((t, j) => <text key={j} y={20 + j * 24}>{t}</text>)}
              </g>
            </g>
          ))}
        </g>

        <g fill="none" stroke="var(--olive)" strokeWidth="1.5" opacity="0.4">
          <path d="M40 780H180V700H320V620M40 820H260V760H400M120 700V640H60" />
          <path d="M1560 120H1440V200H1320V260M1560 80H1380V140H1280" />
          <g fill="var(--olive)" stroke="none"><circle cx="320" cy="620" r="4" /><circle cx="400" cy="760" r="4" /><circle cx="60" cy="640" r="4" /><circle cx="1320" cy="260" r="4" /><circle cx="1280" cy="140" r="4" /></g>
        </g>

        <g fill="none" stroke="currentColor">
          {[120, 220, 320, 420].map((r) => <circle key={r} cx={C.x} cy={C.y} r={r} opacity="0.2" strokeDasharray={r === 420 ? 'none' : '3 9'} />)}
          <path d={`M${C.x - 440} ${C.y}H${C.x + 440}M${C.x} ${C.y - 440}V${C.y + 440}`} opacity="0.15" />
          {ticks.map((d) => {
            const major = d % 30 === 0;
            const [x1, y1] = polar(d, 420);
            const [x2, y2] = polar(d, major ? 400 : 410);
            return <path key={d} d={`M${x1} ${y1}L${x2} ${y2}`} opacity={major ? 0.45 : 0.25} />;
          })}
        </g>
        <g fill="currentColor" opacity="0.5" fontFamily="JetBrains Mono, monospace" fontSize="14" textAnchor="middle">
          {compass.map(([t, d]) => { const [x, y] = polar(d, 445); return <text key={t} x={x} y={y + 5}>{t}</text>; })}
        </g>

        <g className="pre-sweep">
          <path d={`M${C.x} ${C.y}L${C.x + 420} ${C.y}A420 420 0 0 0 ${C.x + 420 * Math.cos(-0.5)} ${C.y + 420 * Math.sin(-0.5)}Z`} fill="url(#pre-sweep)" opacity="0.5" />
          <path d={`M${C.x} ${C.y}H${C.x + 420}`} stroke="currentColor" strokeWidth="2" opacity="0.6" />
        </g>
        <circle cx={C.x} cy={C.y} r="5" fill="currentColor" opacity="0.7" />

        {jets.map((j) => (
          <g key={j.cls}>
            <path d={j.path} fill="none" stroke="var(--steel)" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.35" />
            <g className={`jet ${j.cls}`}>
              <use href="#pre-jet" fill="var(--steel)" transform="scale(2.2)" opacity="0.8" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
