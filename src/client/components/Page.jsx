import { Hero } from './Hero.jsx';
import { go } from '../router.js';

// Shell of an inner page: small hero, back link, title, intro, then the content.
export function Page({ path, title, lead, children }) {
  return (
    <main className="page page-inner">
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
