import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components";
import { Paths } from "./ts/enums";

import "./index.css";

const Login = lazy(() => import("./views/login"));
const Templates = lazy(() => import("./views/templates"));
const Resume = lazy(() => import("./views/resume"));

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
