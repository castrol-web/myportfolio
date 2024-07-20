import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Skill from "./pages/Skills/Skill";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Testimonial/Testimonials";
import ScrollButton from "./components/ScrollButton";

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
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
