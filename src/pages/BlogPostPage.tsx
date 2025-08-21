import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';

// Blog post data structure
const blogPosts: Record<string, {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  heroImage: string;
  content: Array<{
    type: 'paragraph' | 'heading' | 'subheading' | 'image';
    content: string;
    image?: string;
    alt?: string;
  }>;
  readTime: string;
  date: string;
}> = {
  'waterline-maintenance-best-practices': {
    id: 'waterline-maintenance-best-practices',
    title: '5 Essential Waterline Maintenance Best Practices',
    category: 'Tips',
    categoryColor: 'bg-blue-600',
    heroImage: '/images/flush-waterlines.webp',
    readTime: '5 min read',
    date: 'December 15, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Maintaining clean dental waterlines is crucial for patient safety and regulatory compliance. These five essential practices will help you establish a comprehensive waterline maintenance program that protects your patients and your practice.'
      },
      {
        type: 'heading',
        content: 'TIP 1'
      },
      {
        type: 'subheading',
        content: 'Implement Daily Flushing Protocols'
      },
      {
        type: 'paragraph',
        content: 'Start each day by flushing all waterlines for at least 2 minutes. This simple practice removes overnight biofilm formation and ensures fresh water circulation throughout your system.'
      },
      {
        type: 'image',
        content: '',
        image: '/images/run-through-lines.webp',
        alt: 'Daily waterline flushing procedure'
      },
      {
        type: 'heading',
        content: 'TIP 2'
      },
      {
        type: 'subheading',
        content: 'Use EPA-Approved Treatment Tablets'
      },
      {
        type: 'paragraph',
        content: 'LineTab tablets provide continuous antimicrobial protection for 5-7 days. Unlike liquid treatments, tablets dissolve slowly and maintain consistent protection levels throughout their lifecycle.'
      },
      {
        type: 'heading',
        content: 'TIP 3'
      },
      {
        type: 'subheading',
        content: 'Monitor Water Quality Weekly'
      },
      {
        type: 'paragraph',
        content: 'Regular testing ensures your waterline treatment is working effectively. Document all test results to maintain compliance with regulatory requirements and track system performance over time.'
      },
      {
        type: 'heading',
        content: 'TIP 4'
      },
      {
        type: 'subheading',
        content: 'Replace Water Reservoirs Regularly'
      },
      {
        type: 'paragraph',
        content: 'Empty and refill water reservoirs at least weekly, or more frequently in high-use practices. Clean containers prevent biofilm formation at the source.'
      },
      {
        type: 'heading',
        content: 'TIP 5'
      },
      {
        type: 'subheading',
        content: 'Document Everything'
      },
      {
        type: 'paragraph',
        content: 'Maintain detailed records of all waterline maintenance activities. This documentation is essential for regulatory compliance and helps identify trends or issues before they become problems.'
      }
    ]
  },
  'understanding-biofilm-formation': {
    id: 'understanding-biofilm-formation',
    title: 'Understanding Biofilm: The Hidden Threat in Waterlines',
    category: 'Education',
    categoryColor: 'bg-green-600',
    heroImage: '/images/biofilm.webp',
    readTime: '7 min read',
    date: 'December 12, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Biofilm formation in dental waterlines poses a significant threat to patient safety. Understanding how biofilms develop and persist is crucial for implementing effective prevention strategies.'
      },
      {
        type: 'heading',
        content: 'WHAT IS BIOFILM?'
      },
      {
        type: 'subheading',
        content: 'A Complex Microbial Community'
      },
      {
        type: 'paragraph',
        content: 'Biofilm is a complex community of microorganisms that adhere to surfaces and produce a protective matrix. In dental waterlines, biofilms can harbor dangerous pathogens including Legionella, Pseudomonas, and other opportunistic bacteria.'
      },
      {
        type: 'heading',
        content: 'HOW BIOFILM FORMS'
      },
      {
        type: 'subheading',
        content: 'The Four-Stage Process'
      },
      {
        type: 'paragraph',
        content: 'Biofilm formation occurs in four distinct stages: initial attachment, irreversible attachment, maturation, and dispersal. Once established, biofilms become extremely difficult to remove and can continuously shed bacteria into the water supply.'
      },
      {
        type: 'heading',
        content: 'PREVENTION STRATEGIES'
      },
      {
        type: 'subheading',
        content: 'Proactive Treatment is Key'
      },
      {
        type: 'paragraph',
        content: 'The most effective approach to biofilm control is prevention. EPA-approved treatments like LineTab tablets create an inhospitable environment for biofilm formation while maintaining safe water quality for patient care.'
      }
    ]
  },
  'linetab-setup-installation-guide': {
    id: 'linetab-setup-installation-guide',
    title: 'Complete LineTab Setup and Installation Guide',
    category: 'Guide',
    categoryColor: 'bg-purple-600',
    heroImage: '/images/prepare-solution.webp',
    readTime: '10 min read',
    date: 'December 10, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Setting up LineTab in your dental practice is straightforward and requires no special equipment. Follow this comprehensive guide to ensure optimal waterline protection from day one.'
      },
      {
        type: 'heading',
        content: 'STEP 1'
      },
      {
        type: 'subheading',
        content: 'Initial System Preparation'
      },
      {
        type: 'paragraph',
        content: 'Before installing LineTab, thoroughly flush all waterlines to remove any existing biofilm or debris. This initial cleaning ensures the best possible starting point for your treatment program.'
      },
      {
        type: 'image',
        content: '',
        image: '/images/flush-waterlines.webp',
        alt: 'Flushing waterlines before LineTab installation'
      },
      {
        type: 'heading',
        content: 'STEP 2'
      },
      {
        type: 'subheading',
        content: 'Adding the First Tablet'
      },
      {
        type: 'paragraph',
        content: 'Fill your water reservoir with distilled or filtered water, then add one LineTab tablet. The tablet will begin dissolving immediately and provide antimicrobial protection within hours.'
      },
      {
        type: 'image',
        content: '',
        image: '/images/adding-tablet.webp',
        alt: 'Adding LineTab tablet to water reservoir'
      },
      {
        type: 'heading',
        content: 'STEP 3'
      },
      {
        type: 'subheading',
        content: 'Ongoing Maintenance'
      },
      {
        type: 'paragraph',
        content: 'Replace tablets every 5-7 days or when completely dissolved. No shocking or special procedures are required after the initial setup - simply add a new tablet when needed.'
      }
    ]
  },
  'epa-regulations-dental-compliance': {
    id: 'epa-regulations-dental-compliance',
    title: 'EPA Regulations and Dental Practice Compliance',
    category: 'Compliance',
    categoryColor: 'bg-red-600',
    heroImage: '/images/office.webp',
    readTime: '8 min read',
    date: 'December 8, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Staying compliant with EPA regulations for dental waterline treatment is not just about avoiding penalties—it\'s about ensuring patient safety and maintaining the highest standards of care.'
      },
      {
        type: 'heading',
        content: 'EPA REQUIREMENTS'
      },
      {
        type: 'subheading',
        content: 'Understanding the Standards'
      },
      {
        type: 'paragraph',
        content: 'The EPA requires that dental waterlines deliver water with less than 500 CFU/mL of aerobic bacteria. This standard ensures that dental unit water quality meets drinking water standards.'
      },
      {
        type: 'heading',
        content: 'COMPLIANCE STRATEGIES'
      },
      {
        type: 'subheading',
        content: 'Choosing Approved Products'
      },
      {
        type: 'paragraph',
        content: 'LineTab is the only EPA-approved waterline treatment tablet, providing documented efficacy and regulatory compliance assurance. Using approved products simplifies compliance and reduces liability.'
      },
      {
        type: 'heading',
        content: 'DOCUMENTATION REQUIREMENTS'
      },
      {
        type: 'subheading',
        content: 'Maintaining Proper Records'
      },
      {
        type: 'paragraph',
        content: 'Keep detailed records of treatment schedules, water testing results, and maintenance activities. This documentation is essential for regulatory inspections and quality assurance programs.'
      }
    ]
  },
  'cost-benefit-analysis-linetab': {
    id: 'cost-benefit-analysis-linetab',
    title: 'Cost-Benefit Analysis: LineTab vs Traditional Methods',
    category: 'Analysis',
    categoryColor: 'bg-yellow-600',
    heroImage: '/images/run-through-lines.webp',
    readTime: '6 min read',
    date: 'December 5, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Choosing the right waterline treatment method involves more than just upfront costs. A comprehensive analysis reveals significant long-term savings and operational benefits with LineTab tablets.'
      },
      {
        type: 'heading',
        content: 'DIRECT COST COMPARISON'
      },
      {
        type: 'subheading',
        content: 'Initial Investment vs. Long-term Value'
      },
      {
        type: 'paragraph',
        content: 'While LineTab tablets may have a higher per-unit cost than liquid treatments, their extended protection period (5-7 days vs. daily application) results in lower overall treatment costs and reduced labor requirements.'
      },
      {
        type: 'heading',
        content: 'LABOR SAVINGS'
      },
      {
        type: 'subheading',
        content: 'Reducing Daily Maintenance Tasks'
      },
      {
        type: 'paragraph',
        content: 'Traditional waterline treatments require daily application and monitoring. LineTab\'s weekly replacement schedule frees up staff time for patient care and other critical practice activities.'
      },
      {
        type: 'heading',
        content: 'COMPLIANCE BENEFITS'
      },
      {
        type: 'subheading',
        content: 'Avoiding Regulatory Penalties'
      },
      {
        type: 'paragraph',
        content: 'EPA-approved products like LineTab provide compliance assurance that generic treatments cannot match. The cost of regulatory violations far exceeds any savings from cheaper alternatives.'
      }
    ]
  },
  'troubleshooting-waterline-issues': {
    id: 'troubleshooting-waterline-issues',
    title: 'Troubleshooting Common Waterline Issues',
    category: 'Support',
    categoryColor: 'bg-indigo-600',
    heroImage: '/images/adding-tablet.webp',
    readTime: '9 min read',
    date: 'December 3, 2024',
    content: [
      {
        type: 'paragraph',
        content: 'Even with proper maintenance, waterline issues can occur. This troubleshooting guide helps you identify and resolve common problems quickly and effectively.'
      },
      {
        type: 'heading',
        content: 'ISSUE 1'
      },
      {
        type: 'subheading',
        content: 'Poor Water Flow or Pressure'
      },
      {
        type: 'paragraph',
        content: 'Reduced water flow often indicates biofilm buildup or air bubbles in the lines. Implement thorough flushing protocols and ensure proper tablet dissolution to restore normal flow rates.'
      },
      {
        type: 'heading',
        content: 'ISSUE 2'
      },
      {
        type: 'subheading',
        content: 'Unusual Taste or Odor'
      },
      {
        type: 'paragraph',
        content: 'Off-tastes or odors typically result from bacterial contamination or biofilm formation. Increase treatment frequency temporarily and ensure complete tablet dissolution in the reservoir.'
      },
      {
        type: 'heading',
        content: 'ISSUE 3'
      },
      {
        type: 'subheading',
        content: 'Failed Water Quality Tests'
      },
      {
        type: 'paragraph',
        content: 'High bacterial counts indicate inadequate treatment or system contamination. Review maintenance protocols, increase tablet frequency if necessary, and consider professional system evaluation.'
      },
      {
        type: 'heading',
        content: 'PREVENTION IS KEY'
      },
      {
        type: 'subheading',
        content: 'Proactive Maintenance'
      },
      {
        type: 'paragraph',
        content: 'Most waterline issues are preventable with consistent treatment and proper maintenance protocols. LineTab tablets provide the reliability needed to maintain optimal system performance.'
      }
    ]
  }
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden">
        <motion.img 
          src={post.heroImage}
          alt={post.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">


        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {post.title}
        </motion.h1>

        {/* Meta Information */}
        <motion.div 
          className="flex items-center text-gray-600 mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </motion.div>

        {/* Article Content */}
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {section.content}
                  </p>
                );
              case 'heading':
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-4 tracking-wide">
                    {section.content}
                  </h2>
                );
              case 'subheading':
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 mb-4">
                    {section.content}
                  </h3>
                );
              case 'image':
                return (
                  <div key={index} className="my-8">
                    <img 
                      src={section.image} 
                      alt={section.alt || ''} 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </motion.div>

        {/* Social Share Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-700 mb-4">
            Have questions about LineTab? <br />
            Share this article with your colleagues or contact our support team for expert guidance.
          </p>
        </motion.div>

        {/* Back to Blog Link */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="/about"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 6l-6 6 6 6" />
            </svg>
            Back to insights
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPostPage;
