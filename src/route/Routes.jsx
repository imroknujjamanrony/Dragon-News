import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
  },
  {
    path: "/news",
    element: <h1>news element</h1>,
  },
  {
    path: "/auth",
    element: <h1>login element</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);
