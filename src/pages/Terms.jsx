import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, XCircle, Scale } from 'lucide-react';
import { Card, Badge, SectionTitle } from '../components/common';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using CUSAATHI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.'
    },
    {
      title: '2. Eligibility',
      content: 'CUSAATHI is intended for students, alumni, and faculty of the University of Calcutta. You must be at least 13 years old to use this platform. By using CUSAATHI, you represent that you meet these eligibility requirements.'
    },
    {
      title: '3. User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information during registration and keep it updated. You are responsible for all activities that occur under your account.'
    },
    {
      title: '4. Acceptable Use',
      content: 'You agree to use CUSAATHI only for lawful purposes. Prohibited activities include: posting false or misleading information, harassing other users, uploading malicious content, attempting to gain unauthorized access, scraping or automated data collection, and violating intellectual property rights.'
    },
    {
      title: '5. Content Ownership',
      content: 'You retain ownership of content you post on CUSAATHI. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the platform. We reserve the right to remove content that violates these terms.'
    },
    {
      title: '6. Intellectual Property',
      content: 'All content, features, and functionality of CUSAATHI (including text, graphics, logos, software) are owned by CUSAATHI or its licensors and are protected by copyright, trademark, and other intellectual property laws.'
    },
    {
      title: '7. Third-Party Links',
      content: 'CUSAATHI may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. Use of third-party services is at your own risk.'
    },
    {
      title: '8. Disclaimer of Warranties',
      content: 'CUSAATHI is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the platform will be uninterrupted, error-free, or secure. We are not responsible for the accuracy or reliability of user-generated content.'
    },
    {
      title: '9. Limitation of Liability',
      content: 'To the maximum extent permitted by law, CUSAATHI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability shall not exceed the amount you paid to use the service (if any).'
    },
    {
      title: '10. Indemnification',
      content: 'You agree to indemnify and hold CUSAATHI harmless from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform, violation of these terms, or infringement of any rights of another party.'
    },
    {
      title: '11. Termination',
      content: 'We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason. You may terminate your account at any time by contacting us. Upon termination, your right to use CUSAATHI will immediately cease.'
    },
    {
      title: '12. Changes to Terms',
      content: 'We may modify these Terms of Service at any time. We will notify users of significant changes via email or platform notification. Continued use of CUSAATHI after changes constitutes acceptance of the new terms.'
    },
    {
      title: '13. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.'
    },
    {
      title: '14. Contact Information',
      content: 'For questions about these Terms of Service, please contact us at legal@cusaathi.edu or visit our Contact page.'
    },
  ];

  const highlights = [
    {
      icon: CheckCircle,
      title: 'What You Can Do',
      items: [
        'Access notices, resources, and tools',
        'Participate in community discussions',
        'Upload educational content (with moderation)',
        'Connect with peers and alumni',
        'Use productivity tools',
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: XCircle,
      title: 'What You Cannot Do',
      items: [
        'Post false or misleading information',
        'Harass or abuse other users',
        'Upload copyrighted content without permission',
        'Attempt to hack or disrupt the platform',
        'Use automated bots or scrapers',
      ],
      color: 'from-red-500 to-rose-500'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Scale className="w-4 h-4" />
              Terms of Service
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Terms & Conditions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Please read these terms carefully before using CUSAATHI
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: November 22, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <SectionTitle 
            title="Key Highlights" 
            subtitle="Quick overview of what you can and cannot do on CUSAATHI"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card variant="elevated" hover className="h-full">
                    <Card.Body className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        {highlight.title}
                      </h3>
                      
                      <ul className="space-y-2">
                        {highlight.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container-custom">
          <SectionTitle 
            title="Detailed Terms" 
            subtitle="Please read the full terms of service below"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card hover>
                  <Card.Body className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card variant="gradient">
              <Card.Body className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      Important Notice
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      By using CUSAATHI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our legal team is available to clarify any concerns
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Terms;
