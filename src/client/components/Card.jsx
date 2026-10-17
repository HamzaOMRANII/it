import { AppMark } from './AppMark.jsx';
import { go } from '../router.js';
import { statusLabel } from '../apps.js';

// One card. With `to` it navigates in the same tab, with `url` or `href` it is a normal link,
// with neither it is a plain, non-clickable card.
export function Card({ name, text, icon, status, meta, to, url, href }) {
  const body = (
    <>
      <span className="tile">
        <AppMark {...icon} />
      </span>
      <span className="card-body">
        <span className="card-top">
          <span className="card-name">{name}</span>
          {status && <span className={`status status-${status}`}>{statusLabel[status]}</span>}
        </span>
        <span className="card-text">{text}</span>
        {meta && <span className="card-meta">{meta}</span>}
      </span>
    </>
  );

  if (to) return <a className="card" href={to} onClick={go(to)}>{body}</a>;
  if (url) return <a className="card" href={url} target="_blank" rel="noopener noreferrer">{body}</a>;
  if (href) return <a className="card" href={href}>{body}</a>;
  return <div className="card card-static">{body}</div>;
}
