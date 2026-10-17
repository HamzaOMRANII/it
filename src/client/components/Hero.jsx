import { Logo } from './Logo.jsx';

export function Hero({ small, children }) {
  return (
    <header className={small ? 'hero hero-sm' : 'hero'}>
      <Logo className="hero-mark" />
      <div>
        <h1 className="wordmark">
          <span className="w-it">it</span>
          <span className="w-strong">omrani</span>
          <span className="w-light">systems</span>
        </h1>
        <p className="domain">{children}</p>
      </div>
    </header>
  );
}
