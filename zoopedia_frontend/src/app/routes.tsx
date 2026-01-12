import { createBrowserRouter } from "react-router-dom";
import { Shell } from "../components/layout/Shell";
import HomePage from "../pages/HomePage/HomePage";
import PlayPage from "../pages/PlayPage/PlayPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    element: <Shell variant="centered" />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <Shell variant="game" />,
    children: [{ path: "/play", element: <PlayPage /> }],
  },
  {
    element: <Shell variant="centered" />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
]);
