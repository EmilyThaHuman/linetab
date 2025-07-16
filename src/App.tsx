
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HowToUsePage from './pages/HowToUsePage';
import BiofilmDangersPage from './pages/BiofilmDangersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router basename="/linetab">
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Add top padding to account for fixed navbar */}
        <main style={{ paddingTop: '52px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/how-to-use" element={<HowToUsePage />} />
            <Route path="/biofilm-dangers" element={<BiofilmDangersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
