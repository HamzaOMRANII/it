import { Hero } from './components/Hero.jsx';
import { Card } from './components/Card.jsx';
import { apps } from './apps.js';
import { usePath } from './router.js';
import { Services, Premium, Contact, DangerZone } from './pages.jsx';

const host = (url) => new URL(url).host;

const routes = {
  '/services': Services,
  '/premium': Premium,
  '/contact': Contact,
  '/danger-zone': DangerZone,
};

function Home() {
  return (
    <main className="page">
      <Hero>
        it.omranisystems.com <span className="sep">/</span> projects &amp; services
      </Hero>

      <section className="grid" aria-label="Projects and services">
        {apps.map((a) => (
          <Card key={a.id} {...a} meta={`${a.kind} · ${a.url ? host(a.url) : a.to}`} />
        ))}
      </section>

      <footer className="footer">© {new Date().getFullYear()} Hamza Omrani LLC</footer>
    </main>
  );
}

export default function App() {
  const Page = routes[usePath()] || Home;

  return (
    <>
      <div className="bg-field" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="noise" />
      </div>
      <Page />
    </>
  );
}
