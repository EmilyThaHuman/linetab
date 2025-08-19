
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import HowToUsePage from './pages/HowToUsePage';
import BiofilmDangersPage from './pages/BiofilmDangersPage';
import ContactPage from './pages/ContactPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clear sessionStorage for testing - REMOVE THIS LATER
    sessionStorage.removeItem('linetab-animation-shown');
    
    // Check if animation has been shown in this session
    const animationShown = sessionStorage.getItem('linetab-animation-shown');
    console.log('Animation shown in session:', animationShown); // Debug log
    if (animationShown) {
      setIsLoading(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed, switching to main app'); // Debug log
    setIsLoading(false);
    // Mark animation as shown for this session
    sessionStorage.setItem('linetab-animation-shown', 'true');
  };

  console.log('App render, isLoading:', isLoading); // Debug log

  if (isLoading) {
    return <LoadingAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <Router>
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
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
