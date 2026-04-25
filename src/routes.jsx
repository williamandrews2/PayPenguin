import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
