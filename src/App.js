import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Skill from "./pages/Skills/Skill";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Testimonial/Testimonials";
import ScrollButton from "./components/ScrollButton";
import TestimonialForm from "./pages/Feedback/TestimonialForm";

// Backend URL
export const URL = process.env.REACT_APP_SERVER_URL;
function App() {
  return (
    <div className="bg-slate-300">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonials />
      <Router>
        <Routes>
          <Route path="/testimonials" element={<TestimonialForm />} />
        </Routes>
      </Router>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
