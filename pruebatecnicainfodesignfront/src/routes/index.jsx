import { createBrowserRouter } from "react-router-dom";

import { LayoutPublic } from "../layouts/LayoutPublic";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import TablasPage from "../components/tablas/Tablas";
import GraficasPage from "../components/graficas/Graficas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/tablas",
            element: <TablasPage />,
          },
          {
            path: "/graficas",
            element: <GraficasPage />,
          },
        ],
      },
    ],
  },
]);
