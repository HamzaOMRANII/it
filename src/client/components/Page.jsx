import { Hero } from './Hero.jsx';
import { go } from '../router.js';
import { accentOf } from '../apps.js';

// Shell of an inner page: small hero, back link, title, intro, then the content.
// `id` is the home card that leads here: its colours become the page accent.
export function Page({ id, path, title, lead, children }) {
  return (
    <main className="page page-inner" style={{ '--accent': accentOf(id).line }}>
      <Hero small>
        it.omranisystems.com <span className="sep">{path}</span>
      </Hero>
      <section className="inner">
        <a className="back" href="/" onClick={go('/')}>&larr; Back</a>
        <h2 className="inner-title">{title}</h2>
        {lead && <p className="inner-lead">{lead}</p>}
        {children}
      </section>
      <footer className="footer">&copy; {new Date().getFullYear()} Hamza Omrani LLC</footer>
    </main>
  );
}
