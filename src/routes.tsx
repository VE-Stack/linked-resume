import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components";
import { Paths } from "./ts/enums";

const Login = lazy(() => import("./views/login"));
const Templates = lazy(() => import("./views/templates"));
const Resume = lazy(() => import("./views/resume"));

export const router = createBrowserRouter([
  {
    path: Paths.MAIN,
    element: <Layout />,
    children: [
      {
        path: Paths.LOGIN,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: Paths.TEMPLATES,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Templates />
          </Suspense>
        )
      },
      {
        path: Paths.RESUME,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Resume />
          </Suspense>
        )
      }
    ]
  }
]);
