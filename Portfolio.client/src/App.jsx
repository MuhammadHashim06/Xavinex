import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/LandingPage/Homepage";
import ServicePage from "./components/ServicesPage/ServicePage";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import HireExpert from "./components/HireExpert/HireExpert";
import ResourcesPage from "./components/ResourcesPage/ResourcesPage";
// import Navbar from "./components/utilities/Navbar";
// import Footer from "./components/utilities/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/components/Login";
import Dashboard from "./components/Admin/components/Dashboard";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/services" element={<ServicePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/hire-expert" element={<HireExpert />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
