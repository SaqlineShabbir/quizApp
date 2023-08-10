import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function toggle() {
    setOpen(!open);
  }

  // close side navigation when route changes
  React.useEffect(() => {
    if (open) {
      router.events.on('routeChangeStart', () => setOpen(false));
    }

    return () => {
      if (open) {
        router.events.off('routeChangeStart', () => setOpen(false));
      }
    };
  }, [open, router]);

  return (
    <ToggleContext.Provider value={{ open, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}
