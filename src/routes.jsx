import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
