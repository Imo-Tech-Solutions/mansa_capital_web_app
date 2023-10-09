import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Services from './pages/Services';
import Resources from './pages/Resources';
import FindYourBank from './pages/FindYourBank';
import WhoWeAre from './pages/whoWeAre';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';

function App() {
  return (
      <>
          <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/find-your-bank" element={<FindYourBank />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

          <Footer />
      </>
  );
}

export default App;
