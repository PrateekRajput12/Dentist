import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

const PageLayout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<PageLayout><Home /></PageLayout>} />
            <Route path="/about" element={<PageLayout><About /></PageLayout>} />
            <Route path="/services" element={<PageLayout><Services /></PageLayout>} />
            <Route path="/treatments" element={<PageLayout><Treatments /></PageLayout>} />
            <Route path="/testimonials" element={<PageLayout><Testimonials /></PageLayout>} />
            <Route path="/gallery" element={<PageLayout><Gallery /></PageLayout>} />
            <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
            <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
