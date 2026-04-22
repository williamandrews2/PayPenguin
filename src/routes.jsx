import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Register from "./Register";

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
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
