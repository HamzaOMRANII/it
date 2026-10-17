import { Logo } from './components/Logo.jsx';
import { AppMark } from './components/AppMark.jsx';
import { apps, statusLabel } from './apps.js';

const host = (url) => new URL(url).host;

export default function App() {
  const live = apps.filter((a) => a.status === 'live').length;

  return (
    <>
      <div className="bg-field" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="noise" />
      </div>

      <main className="page">
        <header className="hero">
          <Logo className="hero-mark" />
          <div>
            <h1 className="wordmark">
              <span className="w-strong">omrani</span>
              <span className="w-light">systems</span>
            </h1>
            <p className="domain">
              it.omranisystems.com <span className="sep">/</span> {apps.length} apps &amp; services, {live} live
            </p>
          </div>
        </header>

        <section className="grid" aria-label="Apps and services">
          {apps.map((a) => (
            <a key={a.id} className="card" href={a.url} target="_blank" rel="noopener noreferrer">
              <span className="tile">
                <AppMark {...a.icon} />
              </span>
              <span className="card-body">
                <span className="card-top">
                  <span className="card-name">{a.name}</span>
                  <span className={`status status-${a.status}`}>{statusLabel[a.status]}</span>
                </span>
                <span className="card-text">{a.text}</span>
                <span className="card-meta">
                  {a.kind} <span className="sep">·</span> {host(a.url)}
                </span>
              </span>
            </a>
          ))}
        </section>

        <footer className="footer">© {new Date().getFullYear()} Hamza Omrani LLC</footer>
      </main>
    </>
  );
}
