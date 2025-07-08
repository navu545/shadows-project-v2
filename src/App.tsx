import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Campaign from "./pages/Campaign";
import CampaignHome from "./pages/CampaignHome";
import Artists from "./pages/Artists";
import Kazymyr from "./pages/Kazymyr";
import Davyd from "./pages/Davyd";
import Exter from "./pages/Exter";
import Mariia from "./pages/Mariia";
import Ripyn from "./pages/Ripyn";
import Database from "./pages/Database";
import Credits from "./pages/Credits";

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
        <Route
          path="/campaign"
          element={
            <Suspense fallback={<Loader />}>
              <Campaign />
            </Suspense>
          }
        />
        <Route
          path="/campaignHome"
          element={
            <Suspense fallback={<Loader />}>
              <CampaignHome />
            </Suspense>
          }
        />
        <Route
          path="/artists"
          element={
            <Suspense fallback={<Loader />}>
              <Artists />
            </Suspense>
          }
        />
        <Route
          path="/kazymyr"
          element={
            <Suspense fallback={<Loader />}>
              <Kazymyr />
            </Suspense>
          }
        />
        <Route
          path="/davyd"
          element={
            <Suspense fallback={<Loader />}>
              <Davyd />
            </Suspense>
          }
        />
        <Route
          path="/exter"
          element={
            <Suspense fallback={<Loader />}>
              <Exter />
            </Suspense>
          }
        />
        <Route
          path="/mariia"
          element={
            <Suspense fallback={<Loader />}>
              <Mariia />
            </Suspense>
          }
        />
        <Route
          path="/ripyn"
          element={
            <Suspense fallback={<Loader />}>
              <Ripyn />
            </Suspense>
          }
        />
        <Route
          path="/database"
          element={
            <Suspense fallback={<Loader />}>
              <Database />
            </Suspense>
          }
        />
        <Route
          path="/credits"
          element={
            <Suspense fallback={<Loader />}>
              <Credits />
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
