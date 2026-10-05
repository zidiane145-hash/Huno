import React, { useState } from 'react';
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from '@tanstack/react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DesignStudyPage } from './pages/DesignStudyPage';
import { FleetPage } from './pages/FleetPage';

// Shared state for navigation-triggered cutaway opening
let pendingCutaway: 'drive' | 'battery' | null = null;
let setCutawayListener: ((val: 'drive' | 'battery' | null) => void) | null = null;

// Root layout component
const RootLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate({ to: path });
  };

  const handleOpenCutaway = (systemId: 'drive' | 'battery') => {
    if (setCutawayListener) {
      setCutawayListener(systemId);
    } else {
      pendingCutaway = systemId;
    }
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar
        currentPath={location.pathname}
        onNavigate={handleNavigate}
        onOpenCutaway={handleOpenCutaway}
      />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

// Root route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// Home / Design Study Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => {
    const navigate = useNavigate();
    const [initialCutaway, setInitialCutaway] = useState<'drive' | 'battery' | null>(pendingCutaway);

    // Register cutaway listener so Navbar can open cutaways directly
    React.useEffect(() => {
      setCutawayListener = (val) => setInitialCutaway(val);
      if (pendingCutaway) {
        setInitialCutaway(pendingCutaway);
        pendingCutaway = null;
      }
      return () => {
        setCutawayListener = null;
      };
    }, []);

    return (
      <DesignStudyPage
        onNavigateToFleet={() => navigate({ to: '/fleet' })}
        initialCutaway={initialCutaway}
        onClearInitialCutaway={() => setInitialCutaway(null)}
      />
    );
  },
});

// Fleet Route (/fleet)
const fleetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/fleet',
  component: () => {
    const navigate = useNavigate();
    return <FleetPage onNavigateToStudy={() => navigate({ to: '/' })} />;
  },
});

// Router tree
const routeTree = rootRoute.addChildren([indexRoute, fleetRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
