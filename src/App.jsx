import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import ProjectPage from "./pages/Project"
import ServicePage from "./pages/Service"
import ProjectDetailsPage from "./pages/ProjectDetails"
import TeamPage from "./pages/Team"
import FAQPage from "./pages/FAQ"
import BlogPage from "./pages/Blog"
import BlogDetailsPage from "./pages/BlogDetails"
import ServiceDetails from "./pages/ServiceDetails"
import "./assets/js/main.js"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/serviceDetails" element={<ServiceDetails />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/projectDetails" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogDetails" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
