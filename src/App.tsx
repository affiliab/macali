import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import EsEsPage from "./pages/EsEsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import TermsConditions from "./pages/TermsConditions";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function TrailingSlashRedirect() {
  const location = useLocation();
  if (location.pathname !== "/" && !location.pathname.endsWith("/")) {
    return <Navigate to={`${location.pathname}/`} replace />;
  }
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <TrailingSlashRedirect />
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/es-es/" element={<EsEsPage />} />
        <Route path="/politica-de-privacidad/" element={<PrivacyPolicy />} />
        <Route path="/juego-responsable/" element={<ResponsibleGaming />} />
        <Route path="/terminos-y-condiciones/" element={<TermsConditions />} />
        <Route path="/sobre-nosotros/" element={<AboutUs />} />
        <Route path="/contacto/" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
