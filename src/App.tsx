import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const MuseumsListPage = lazy(() => import("./pages/MuseumsListPage"));
const BankInformation = lazy(() => import("./pages/BankPage"));
const NewHome = lazy(() => import("./pages/NewHome"));
const Aboutpage = lazy(() => import("./pages/AboutPage"));
const Creativepage = lazy(() => import("./pages/CreativePage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <NewHome />
            </Suspense>
          }
        />
        <Route
          path="/MuseumsListPage"
          element={
            <Suspense fallback={<Loader />}>
              <MuseumsListPage />
            </Suspense>
          }
        />
        <Route
          path="/bank-information"
          element={
            <Suspense fallback={<Loader />}>
              <BankInformation />
            </Suspense>
          }
        />
        <Route
          path="/NGO"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/aboutpage"
          element={
            <Suspense fallback={<Loader />}>
              <Aboutpage />
            </Suspense>
          }
        />
        <Route
          path="/creativepage"
          element={
            <Suspense fallback={<Loader />}>
              <Creativepage />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayPassed(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div style={{ zoom: 0.9 }}>
      {delayPassed ? (
        <Router>
          <AnimatedRoutes />
        </Router>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
