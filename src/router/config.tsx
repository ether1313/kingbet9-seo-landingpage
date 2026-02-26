import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import BrandReviewPage from "../pages/brand-review/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:slug",
    element: <BrandReviewPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
