import { Hero } from './components/Hero.jsx';
import { Card } from './components/Card.jsx';
import { apps } from './apps.js';
import { usePath } from './router.js';
import { TrackerBg } from './components/TrackerBg.jsx';
import { PremiumBg } from './components/PremiumBg.jsx';
import { Services, Premium, Contact, DangerZone } from './pages.jsx';

const host = (url) => new URL(url).host;

const routes = {
  '/services': Services,
  '/premium': Premium,
  '/contact': Contact,
  '/danger-zone': DangerZone,
};

// Pages with their own animated background replace the orbs.
const backgrounds = {
  '/danger-zone': TrackerBg,
  '/premium': PremiumBg,
};

function Orbs() {
  return (
    <div className="bg-field" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="noise" />
    </div>
  );
}

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
  const path = usePath();
  const Page = routes[path] || Home;
  const Bg = backgrounds[path] || Orbs;

  return (
    <>
      <Bg />
      <Page />
    </>
  );
}
