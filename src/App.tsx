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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
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
          path="/newhome"
          element={
            <Suspense fallback={<Loader />}>
              <NewHome />
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

  if (!delayPassed) return <Loader />;

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
