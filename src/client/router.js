// Tiny pathname router: no dependency, internal links use pushState.
import { useEffect, useState } from 'react';

export const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path.replace(/\/+$/, '') || '/';
};

// onClick for internal <a href>: same-tab navigation without a reload.
export const go = (to) => (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
};
