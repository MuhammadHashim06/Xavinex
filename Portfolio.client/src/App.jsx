import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/LandingPage/Homepage";
import ServicePage from "./components/ServicesPage/ServicePage";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import HireExpert from "./components/HireExpert/HireExpert";
import ResourcesPage from "./components/ResourcesPage/ResourcesPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/components/Login";
import Dashboard from "./components/Admin/components/Dashboard";
import Statistics from "./components/Admin/components/Statistics";
import Request from "./components/Admin/components/Request";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="stats" />} />
          <Route path="stats" element={<Statistics />} />
          <Route path="request" element={<Request />} />
          </Route>
        </Route>

        <Route path="/services" element={<ServicePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/hire-expert" element={<HireExpert />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
