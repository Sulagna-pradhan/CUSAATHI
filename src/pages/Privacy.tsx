import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Badge, SectionTitle, Button } from '../components/common';
import { sections } from '../data/constant/privacyData';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/60 blur-3xl rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4" />
              Privacy Policy
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Your Privacy Matters
            </h1>
            
            <p className="text-base md:text-xl text-emerald-100 mb-4 leading-relaxed">
              We are committed to protecting your personal information and being transparent about how we use it.
            </p>
            
            <p className="text-sm text-white/80">
              Last updated: November 22, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Introduction" 
              align="left"
            />
            <Card variant="elevated">
              <Card.Body className="p-8">
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    CUSAATHI ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    By using CUSAATHI, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container-custom">
          <SectionTitle 
            title="Privacy Details" 
            subtitle="Comprehensive breakdown of how we handle your data"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card hover>
                    <Card.Body className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {section.title}
                          </h3>
                          
                          <ul className="space-y-3">
                            {section.content.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Children's Privacy */}
            <Card variant="elevated">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Children's Privacy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  CUSAATHI is intended for university students (typically 18+ years). We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </Card.Body>
            </Card>

            {/* Changes to Policy */}
            <Card variant="elevated">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Changes to This Policy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
                </p>
              </Card.Body>
            </Card>

            {/* Contact */}
            <Card variant="elevated">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Contact Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Email:</strong> privacy@cusaathi.edu</p>
                  <p><strong>Address:</strong> University of Calcutta, Kolkata, West Bengal, India</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/60 blur-3xl rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Questions About Privacy?
          </h2>
          <p className="text-base md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help clarify any concerns
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-white/80 dark:bg-white dark:text-emerald-700 dark:hover:bg-emerald-50">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
