
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useState } from 'react';

import { Button } from '../components/ui/button';
import ChatAssistant from '../components/ChatAssistant';
import BubbleAnimation from '../components/BubbleAnimation';

// Import local images

import CleanWaterSvg from '../assets/images/clean_water.svg';

import SetupImage from '../assets/images/linetab-setup.webp';

import LogoSvg from '../assets/images/Logo.svg';
import DownloadSvg from '../assets/images/download.svg';

const HomePage = () => {
  const [showBubbleAnimation, setShowBubbleAnimation] = useState(true);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Show bubble animation first */}
      <AnimatePresence>
        {showBubbleAnimation && (
          <div className="fixed inset-0 z-50">
            <BubbleAnimation onComplete={() => setShowBubbleAnimation(false)} />
            {/* Add a button to skip to main content */}
            <button 
              onClick={() => setShowBubbleAnimation(false)}
              className="absolute bottom-8 right-8 px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 backdrop-blur-sm border border-white border-opacity-30"
            >
              Skip to Main Content →
            </button>
          </div>
        )}
      </AnimatePresence>

      {/* Main homepage content */}
      <AnimatePresence>
        {!showBubbleAnimation && (
          <motion.div 
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row xl:items-center h-full">
            <div className="w-full lg:w-1/2 relative z-10 lg:pr-10 flex flex-col justify-center">
              <motion.div 
                className="flex justify-center md:justify-start mb-1"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <img 
                  src={LogoSvg} 
                  alt="LineTab Logo" 
                  className="h-16 md:h-20 w-auto"
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-semibold md:font-black tracking-tight text-gray-900"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                Everything you need for safe waterlines.
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto md:mx-0 font-semibold tracking-wide mt-1"
                style={{ color: '#1C3960' }}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                DENTAL WATERLINE MAINTENANCE TABLETS
              </motion.p>
              
              <motion.div 
                className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center mt-2"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
              >
                <Link to="/product">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 font-semibold px-8 py-4 text-lg"
                    >
                      Get started
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            
            <div className="relative w-full aspect-4/3 lg:w-1/2 rounded-3xl overflow-hidden flex items-center justify-center">
              <motion.img 
                src={SetupImage} 
                alt="LineTab Setup Process" 
                className="w-full h-full object-cover rounded-3xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </div>
        </div>
      </section>
        
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose LineTab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only EPA-approved waterline treatment that provides weeks of protection with a single tablet
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                <CardHeader>
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={CleanWaterSvg} alt="Clean Water" className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900">Long-Lasting Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Each tablet provides continuous protection for 5-7 days, maintaining water quality without daily maintenance
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                <CardHeader>
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900">EPA Approved</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    The only EPA-approved waterline treatment tablet, ensuring safety and regulatory compliance
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                <CardHeader>
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <CardTitle className="text-xl text-gray-900">Easy Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Simple installation process with no shocking required after initial setup - just add and go
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How LineTab Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology that keeps your dental waterlines clean and compliant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img 
                src={SetupImage} 
                alt="LineTab Setup Process" 
                className="w-full h-auto rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div className="flex items-start space-x-4" variants={fadeInRight}>
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  1
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Setup</h3>
                  <p className="text-gray-600">Flush your waterlines and add the first LineTab tablet to your water reservoir</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={fadeInRight}>
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  2
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Protection</h3>
                  <p className="text-gray-600">The tablet dissolves slowly, providing antimicrobial protection for 5-7 days</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-4" variants={fadeInRight}>
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  3
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Maintenance</h3>
                  <p className="text-gray-600">Simply replace with a new tablet when the previous one dissolves completely</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight}>
                <Link to="/how-to-use">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6">
                      View Detailed Instructions
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each bottle treats your waterlines for months, making it incredibly cost-effective
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center border-2 border-blue-200 shadow-xl bg-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">LineTab Tablets</CardTitle>
                    <CardDescription className="text-blue-100">
                      100 tablets per bottle
                    </CardDescription>
                  </CardHeader>
                </motion.div>
                <CardContent className="pt-8 pb-8">
                  <motion.div 
                    className="text-center mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-5xl font-bold text-gray-900">$35</span>
                    <span className="text-gray-600 ml-2">per bottle</span>
                  </motion.div>
                  
                  <motion.ul 
                    className="space-y-3 text-left mb-8"
                    initial="initial"
                    whileInView="animate"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                  >
                    {[
                      "100 tablets (months of supply)",
                      "EPA approved formula",
                      "Free shipping on orders $100+",
                      "Expert support included"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center"
                        variants={fadeInLeft}
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/product">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                          Order Now
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access important safety information and compliance documents
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.img 
                        src={DownloadSvg} 
                        alt="Download" 
                        className="h-8 w-8"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <CardTitle className="text-xl text-gray-900">Safety Data Sheet</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Complete safety information and handling instructions for LineTab tablets
                    </CardDescription>
                    <motion.a 
                      href="/SDS_LineTab.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Download PDF
                      <span className="ml-1">→</span>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </motion.div>
                      <CardTitle className="text-xl text-gray-900">Compliance Guide</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      EPA registration details and regulatory compliance information
                    </CardDescription>
                    <Link 
                      to="/biofilm-dangers"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center"
                      >
                        Learn More
                        <span className="ml-1">→</span>
                      </motion.span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

            {/* Chat Assistant */}
            <ChatAssistant />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage; 