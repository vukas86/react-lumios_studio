import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import "./App.css";
import RootLayout from "./pages/Root";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "/works", element: <Works /> },
    ],
  },
]);

function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [pathname]);

  return <RouterProvider router={router} />;
}

export default App;
