import { createBrowserRouter } from "react-router-dom";

import { LayoutPublic } from "../layouts/LayoutPublic";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
// import TablaInteractivaTramos from "../components/tablas/TablaInteractivaTramos";
// import TablaInteractivaCliente from "../components/tablas/TablaInteractivaCliente";
// import TablaInteractivaTramosCliente from "../components/tablas/TablaInteractivaTramosCliente";
import GraficaTramos from "../components/graficas/GraficaTramos";
import TablasPage from "../components/tablas/tablas";

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
            element: <GraficaTramos />,
          },
        ],
      },
    ],
  },
]);
