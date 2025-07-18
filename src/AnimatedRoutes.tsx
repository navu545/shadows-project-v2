import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader/Loader";
import LoaderBlack from "./components/Loader/LoaderBlack";

const Home = lazy(() => import("./pages/Home"));
const MuseumsListPage = lazy(() => import("./pages/MuseumsListPage"));
const BankInformation = lazy(() => import("./pages/BankPage"));
const NewHome = lazy(() => import("./pages/NewHome"));
const Aboutpage = lazy(() => import("./pages/AboutPage"));
const Creativepage = lazy(() => import("./pages/CreativePage"));
const Campaign = lazy(() => import("./pages/Campaign"));
const CampaignHome = lazy(() => import("./pages/CampaignHome"));
const Artists = lazy(() => import("./pages/Artists"));
const Kazymyr = lazy(() => import("./pages/Kazymyr"));
const Davyd = lazy(() => import("./pages/Davyd"));
const Exter = lazy(() => import("./pages/Exter"));
const Mariia = lazy(() => import("./pages/Mariia"));
const Ripyn = lazy(() => import("./pages/Ripyn"));
const Database = lazy(() => import("./pages/Database"));
const Credits = lazy(() => import("./pages/Credits"));

const PageWrapper = ({
  children,
  duration = 0.3,
}: {
  children: React.ReactNode;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0 })}
    >
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <NewHome />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/MuseumsListPage"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <MuseumsListPage />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/bank-information"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <BankInformation />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/NGO"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/aboutpage"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <Aboutpage />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/creativepage"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <Creativepage />
              </PageWrapper>
            </Suspense>
          }
        />

        <Route
          path="/campaign"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Campaign />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/campaignHome"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <CampaignHome />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/artists"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Artists />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/kazymyr"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Kazymyr />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/davyd"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Davyd />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/exter"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Exter />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/mariia"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Mariia />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/ripyn"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Ripyn />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/database"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Database />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/credits"
          element={
            <Suspense fallback={<LoaderBlack />}>
              <PageWrapper duration={0.3}>
                <Credits />
              </PageWrapper>
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
