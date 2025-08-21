import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import AboutImage from '../assets/images/office.webp';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero / Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Our Story
            </motion.h1>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={AboutImage}
                alt="LineTab office and team"
                className="w-full max-w-2xl mx-auto h-auto rounded-xl shadow-xl"
              />
            </motion.div>

            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed text-lg text-left max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <p>
                LineTab was born out of a dentist's determination to do better for her patients. In 2020, when Washington state introduced new water testing regulations, Dr. Jade Kim, a practicing dentist in Seattle, was shocked to discover that her dental waterlines were contaminated with biofilm and bacteria. This was something that was never covered in dental school, she thought the only biofilm she needed to control was in patients' mouths.
              </p>
              <p>
                Dr. Kim immediately began to search for a solution leading her to daily treatment tablets, which were costly but promised results. But quarter after quarter, her waterlines still failed bacterial tests. Each time, the manufacturers told her to "shock" her lines with a strong bleach solution right before the test. After shocking, she would pass, but she quickly realized this was just a temporary fix. Within weeks, the waterlines could be contaminated again. If she had to shock her lines just to pass a test, how could she ever be sure her water was safe for her patients the rest of the quarter?
              </p>
              <p>
                Frustrated by this broken system and the lack of reliable solutions, Dr. Kim set out to find something better. That search led her to sodium dichloroisocyanurate (NaDCC) and, ultimately, to the creation of LineTab. With LineTab, Dr. Kim finally achieved what she'd been seeking: waterlines that stayed clean and safe all year round, without the need for constant shocking. She passed every test at 0 CFUs while saving time and money, and her team and patients noticed the difference.
              </p>
              <p>
                At LineTab, we believe dental waterline safety shouldn't be a guessing game or a quarterly scramble. Our mission is to empower dental professionals with a solution they can trust so that every patient, every day, receives the highest standard of care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section (moved from Home) */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert tips, best practices, and the latest updates on dental waterline maintenance
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '2.5rem 1rem' }}
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Blog Post 1 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/waterline-maintenance-best-practices">
                    <motion.img
                      src="/images/flush-waterlines.webp"
                      alt="Waterline Maintenance Best Practices"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    5 Essential Waterline Maintenance Best Practices
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Discover the most effective strategies for maintaining clean dental waterlines and ensuring patient safety with proper biofilm prevention techniques.
                  </p>
                  <Link
                    to="/blog/waterline-maintenance-best-practices"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/understanding-biofilm-formation">
                    <motion.img
                      src="/src/assets/images/biofilm.webp"
                      alt="Understanding Biofilm Formation"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    Understanding Biofilm: The Hidden Threat in Waterlines
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Learn about biofilm formation in dental waterlines and why EPA-approved treatments like LineTab are essential for patient safety.
                  </p>
                  <Link
                    to="/blog/understanding-biofilm-formation"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/linetab-setup-installation-guide">
                    <motion.img
                      src="/src/assets/images/prepare-solution.webp"
                      alt="LineTab Setup Guide"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    Complete LineTab Setup and Installation Guide
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Step-by-step instructions for setting up LineTab in your dental practice, ensuring optimal waterline protection from day one.
                  </p>
                  <Link
                    to="/blog/linetab-setup-installation-guide"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Post 4 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/epa-regulations-dental-compliance">
                    <motion.img
                      src="/src/assets/images/office.webp"
                      alt="Regulatory Compliance"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    EPA Regulations and Dental Practice Compliance
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Stay compliant with EPA regulations and industry standards with our comprehensive guide to waterline treatment requirements.
                  </p>
                  <Link
                    to="/blog/epa-regulations-dental-compliance"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Post 5 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/cost-benefit-analysis-linetab">
                    <motion.img
                      src="/src/assets/images/run-through-lines.webp"
                      alt="Cost Analysis"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    Cost-Benefit Analysis: LineTab vs Traditional Methods
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Compare the costs and benefits of LineTab tablets versus traditional waterline maintenance methods and discover the savings.
                  </p>
                  <Link
                    to="/blog/cost-benefit-analysis-linetab"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>

            {/* Blog Post 6 */}
            <motion.div variants={fadeInUp}>
              <article className="flex flex-col">
                <div className="relative bg-gray-100 mb-4" style={{ aspectRatio: '600/300' }}>
                  <Link to="/blog/troubleshooting-waterline-issues">
                    <motion.img
                      src="/src/assets/images/adding-tablet.webp"
                      alt="Troubleshooting Guide"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                    Troubleshooting Common Waterline Issues
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Expert solutions to common waterline problems and how LineTab can help prevent and resolve maintenance challenges.
                  </p>
                  <Link
                    to="/blog/troubleshooting-waterline-issues"
                    className="text-gray-900 hover:text-gray-700 font-medium text-sm underline underline-offset-4 hover:decoration-2"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;


