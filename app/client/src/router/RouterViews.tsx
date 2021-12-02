import { useMemo, Suspense } from "react";
import baseRouter from "config/baseRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "src/components/Auth/Require";

import type { ReactElement } from "react";

export interface Router<T = Record<string, any>> {
  path: string;
  name: string;
  meta?: {
    auth?: string[];
  } & T;
  component: ReactElement;
  routes: Router[];
  icon?: ReactElement;
}

function createRouteNode(routes: Router[]) {
  if (!routes || routes.length === 0) return null;

  return routes.map((route) => {
    const element =
      route.meta?.auth && route.meta.auth.length > 0 ? (
        <RequireAuth>{route.component}</RequireAuth>
      ) : (
        route.component
      );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Suspense fallback={<div>....</div>}>{element}</Suspense>}
      >
        {createRouteNode(
          route.routes && route.routes.length > 0 ? route.routes : []
        )}
      </Route>
    );
  });
}

export default () => {
  const routesDOM = useMemo(() => {
    const component = createRouteNode(baseRouter);
    console.log(component, "ssss");
    return component;
  }, [baseRouter, createRouteNode]);

  return (
    <BrowserRouter>
      <Routes>{routesDOM}</Routes>
    </BrowserRouter>
  );
};
