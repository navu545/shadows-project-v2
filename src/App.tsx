import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import {useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import LoaderBlack from "./components/Loader/LoaderBlack";
import AnimatedRoutes from "./AnimatedRoutes"

const blackLoaderPaths = [
  "/campaign",
  "/campaignHome",
  "/artists",
  "/kazymyr",
  "/davyd",
  "/exter",
  "/mariia",
  "/ripyn",
  "/database",
  "/credits",
];

interface WindowWithMSStream extends Window {
  MSStream?: unknown;
}

const AppContent = () => {
  const location = useLocation();
  const [delayPassed, setDelayPassed] = useState(false);

  const isIphone =
    /iPhone/.test(navigator.userAgent) &&
    typeof (window as WindowWithMSStream).MSStream === "undefined";

  const isBlackLoaderRoute = blackLoaderPaths.includes(location.pathname);

  const wrapperClass = isBlackLoaderRoute
    ? "bg-black text-white"
    : "bg-white text-black";

  useEffect(() => {
    const timeout = setTimeout(() => setDelayPassed(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div
      className={`${wrapperClass} min-h-screen w-full`}
      style={
        isIphone
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              transform: "scale(0.9)",
              transformOrigin: "top left",
              width: "111.11vw",
              height: "111.11vh",
              overflowY: "auto",
            }
          : { zoom: 0.9 }
      }
    >
      {delayPassed ? (
        <AnimatedRoutes />
      ) : isBlackLoaderRoute ? (
        <LoaderBlack />
      ) : (
        <Loader />
      )}
    </div>
  );
};


const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
