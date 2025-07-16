import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Droplets, Microscope, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

// Import local images
import BiofilmImage from '../assets/images/biofilm.png';
import RunThroughLinesImage from '../assets/images/run-through-lines.webp';

const BiofilmDangersPage = () => {
  const biofilmFacts = [
    {
      icon: Microscope,
      title: "What is Biofilm?",
      description: "A protective layer of microorganisms that naturally forms in water systems",
      detail: "Biofilm consists of bacteria, fungi, and other microorganisms embedded in a protective matrix that adheres to surfaces."
    },
    {
      icon: Droplets,
      title: "How it Forms",
      description: "Develops when water remains stagnant in dental waterlines",
      detail: "Overnight, weekends, and holidays provide ideal conditions for biofilm growth in untreated systems."
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      description: "Can multiply rapidly in warm, nutrient-rich environments",
      detail: "Dental office temperatures and small waterline diameters accelerate biofilm development."
    },
    {
      icon: Shield,
      title: "The Solution",
      description: "Regular treatment prevents biofilm formation entirely",
      detail: "LineTab's continuous protection maintains water quality at safe levels consistently."
    }
  ];

  const caseStudies = [
    {
      location: "Orange County, CA",
      year: "2016",
      affected: "71 patients",
      outcome: "Led to improved state regulations",
      insight: "Demonstrated importance of waterline maintenance protocols"
    },
    {
      location: "Atlanta, GA", 
      year: "2015",
      affected: "23 patients",
      outcome: "Strengthened testing requirements",
      insight: "Emphasized need for continuous water quality monitoring"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Understanding
            <span className="block text-blue-600">Waterline Health</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn why maintaining clean dental waterlines is essential for patient safety 
            and how modern solutions make compliance simple and effective.
          </p>
        </motion.div>

        {/* Educational Overview */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="space-y-6">
            <div className="inline-block">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
                Essential Knowledge
              </Badge>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Water Quality Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dental waterlines can harbor microorganisms that form biofilm - a protective layer 
              that naturally develops in water systems. Understanding this process helps dental 
              professionals make informed decisions about patient safety.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">CDC recommends ≤500 CFU/ml for dental water</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Regular maintenance prevents biofilm formation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Modern solutions ensure consistent compliance</span>
              </div>
            </div>
          </div>
          
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={BiofilmImage}
              alt="Microscopic view of biofilm" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Biofilm Formation Process */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Biofilm Develops
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the biofilm formation process helps explain why continuous protection is more effective than periodic treatments.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {biofilmFacts.map((fact, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div 
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <fact.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900">{fact.title}</h3>
                    <p className="text-sm text-gray-600">{fact.description}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{fact.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Learning from History */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning from Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Past incidents have led to improved understanding and better prevention strategies. 
              These cases helped shape current best practices and regulations.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-l-4 border-l-blue-500 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        Case Study
                      </Badge>
                      <span className="text-sm text-gray-500">{study.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.location}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Impact:</strong> {study.affected}</p>
                      <p><strong>Outcome:</strong> {study.outcome}</p>
                      <p><strong>Key Learning:</strong> {study.insight}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Solution Section */}
        <motion.section 
          className="bg-white rounded-3xl p-12 shadow-xl mb-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold">
                  The Solution
                </Badge>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Continuous Protection with LineTab
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Modern waterline maintenance doesn't have to be complex. LineTab provides 
                continuous antimicrobial protection, ensuring water quality remains consistently 
                within safe parameters without daily intervention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">EPA Approved Formula</h4>
                    <p className="text-sm text-gray-600">Meets all regulatory requirements for dental waterline treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Protection</h4>
                    <p className="text-sm text-gray-600">5-7 days of protection per tablet with no daily maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Simple Implementation</h4>
                    <p className="text-sm text-gray-600">Easy setup with no shocking required after initial installation</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/product">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                      Get LineTab Now
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/how-to-use">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                      Learn How It Works
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </div>
            
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={RunThroughLinesImage}
                alt="Professional waterline maintenance" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Informed, Stay Protected
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Understanding waterline health is the first step toward better patient safety. 
            Make informed decisions with reliable, EPA-approved solutions.
          </p>
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Have Questions? Contact Our Experts
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BiofilmDangersPage; 