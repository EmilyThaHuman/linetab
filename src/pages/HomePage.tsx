
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

import { Button } from '../components/ui/button';
import ChatAssistant from '../components/ChatAssistant';
import Marquee from '../components/ui/marquee';

// Import local images

import CleanWaterSvg from '../assets/images/clean_water.svg';

import SetupImage from '../assets/images/linetab-setup.webp';

import LogoSvg from '../assets/images/Logo.svg';
import DownloadSvg from '../assets/images/download.svg';

const HomePage = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Pediatric Dentist",
      practice: "Bright Smiles Pediatric Dentistry",
      content: "LineTab revolutionized our waterline maintenance. 5-7 day protection means we focus on patients, not daily water concerns.",
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "General Dentist", 
      practice: "Rodriguez Family Dental",
      content: "Since switching to LineTab, our water quality testing has been consistently excellent. The only EPA-approved tablet that delivers.",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Oral Surgeon",
      practice: "Thompson Oral Surgery Center",
      content: "The convenience is unmatched. One tablet per week versus daily maintenance - saved us countless hours with perfect compliance.",
      avatar: "ET"
    },
    {
      name: "Dr. James Park",
      role: "Endodontist",
      practice: "Park Root Canal Specialists",
      content: "LineTab's long-lasting protection gives us peace of mind during complex procedures. Clean and safe waterlines for every patient.",
      avatar: "JP"
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Periodontist",
      practice: "Anderson Periodontal Care",
      content: "After trying multiple waterline treatments, LineTab is the only one that maintains water quality without daily intervention.",
      avatar: "LA"
    },
    {
      name: "Dr. David Kim",
      role: "Prosthodontist",
      practice: "Kim Prosthetic Dentistry",
      content: "EPA approval was crucial for our practice. LineTab meets all regulatory requirements and exceeds our water quality expectations.",
      avatar: "DK"
    }
  ];

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
              
              {/* <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-semibold md:font-black tracking-tight text-gray-900"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                Everything you need for safe waterlines.
              </motion.h1> */}
              
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
              <Card className="text-center border-2 border-blue-200 shadow-xl bg-white rounded-lg overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg rounded-b-lg">
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

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-gray-600 mb-6">
              Join thousands of dental practices that trust LineTab for their waterline maintenance
            </p>
            <Link to="/product">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                  Start Your Free Trial
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Dental Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what dentists across the country are saying about LineTab's revolutionary waterline protection
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden w-full">
          <Marquee pauseOnHover className="[--duration:60s]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="mx-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="w-80 h-64 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <p className="text-xs text-gray-500">{testimonial.practice}</p>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    <div className="flex text-yellow-400 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Marquee>
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

      {/* Blog Section moved to About page */}

      {/* Chat Assistant */}
      <ChatAssistant />
    </motion.div>
  );
};

export default HomePage; 