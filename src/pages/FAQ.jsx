import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, BookOpen, Users, Bell, Wrench, HelpCircle, Shield } from 'lucide-react';
import { Card, Badge, SearchBar, SectionTitle } from '../components/common';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General', icon: BookOpen },
    { id: 'notices', label: 'Notices', icon: Bell },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'account', label: 'Account', icon: Shield },
  ];

  const faqs = [
    {
      category: 'general',
      question: 'What is CUSAATHI?',
      answer: 'CUSAATHI is a comprehensive platform designed for University of Calcutta students across 151+ affiliated colleges. It provides centralized access to notices, academic resources, community features, career opportunities, and productivity tools.'
    },
    {
      category: 'general',
      question: 'Is CUSAATHI free to use?',
      answer: 'Yes! CUSAATHI is completely free for all University of Calcutta students. Our mission is to make academic resources and tools accessible to everyone.'
    },
    {
      category: 'general',
      question: 'Which colleges are supported?',
      answer: 'CUSAATHI supports all 151+ affiliated colleges of the University of Calcutta across all 60+ departments. You can find your college in the Colleges section.'
    },
    {
      category: 'notices',
      question: 'How do I get notified about important notices?',
      answer: 'You can customize your notification preferences in your dashboard. Select your department, course, and semester to receive relevant notices via PWA push notifications and email (optional).'
    },
    {
      category: 'notices',
      question: 'Can I filter notices by department?',
      answer: 'Yes! Use the advanced filters on the Notices page to filter by department, course, semester, notice type (exam, admission, result, general), and date range.'
    },
    {
      category: 'notices',
      question: 'How often are notices updated?',
      answer: 'Notices are updated in real-time as they are published by the university or colleges. You can also bookmark important notices for quick access.'
    },
    {
      category: 'resources',
      question: 'What types of resources are available?',
      answer: 'CUSAATHI provides syllabi (UG/PG), Previous Year Questions (PYQs), notes, lab manuals, and library resources. All resources are categorized by department, semester, and subject.'
    },
    {
      category: 'resources',
      question: 'Can I upload my own notes?',
      answer: 'Yes! Registered users can contribute notes and resources to help fellow students. All uploads are moderated to ensure quality and relevance.'
    },
    {
      category: 'resources',
      question: 'How do I access library resources?',
      answer: 'Visit the Library section under Resources to access CU Library guides, e-resources, journals, plagiarism help, timings, and FAQs.'
    },
    {
      category: 'community',
      question: 'How does the Q&A forum work?',
      answer: 'The forum is organized by department and subject. You can ask questions, provide answers, upvote helpful responses, and bookmark important threads. Verified badges are awarded to trusted contributors.'
    },
    {
      category: 'community',
      question: 'Can I create a study group?',
      answer: 'Yes! You can create public or private study groups, invite members, share files, and collaborate. Groups can be organized by subject, competitive exams, or special interests.'
    },
    {
      category: 'community',
      question: 'How do I connect with alumni?',
      answer: 'Visit the Alumni Network section to browse alumni profiles, filter by graduation year/industry, and request mentorship. Alumni can provide career guidance and resume reviews.'
    },
    {
      category: 'tools',
      question: 'What PDF tools are available?',
      answer: 'CUSAATHI offers a complete PDF toolkit including merge, split, compress, convert (PDF↔JPG, PDF↔Word, PDF↔PPT), unlock, protect, and organize pages.'
    },
    {
      category: 'tools',
      question: 'How does the SGPA calculator work?',
      answer: 'The SGPA calculator is designed for CU\'s CBCS system. Enter your subject credits and grades, and it will calculate your SGPA with detailed explanations.'
    },
    {
      category: 'tools',
      question: 'Can I create a timetable?',
      answer: 'Yes! Use the Timetable Maker to create weekly schedules, color-code subjects, and export as an image for easy sharing.'
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the navigation bar, provide your details, and complete the profile setup by selecting your department, semester, and college.'
    },
    {
      category: 'account',
      question: 'Can I change my department or semester?',
      answer: 'Yes! You can update your profile information anytime from your Profile page. This will adjust your personalized content and notifications.'
    },
    {
      category: 'account',
      question: 'Is my data secure?',
      answer: 'Absolutely! We use industry-standard encryption and security practices to protect your data. Read our Privacy Policy for more details.'
    },
  ];

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Frequently Asked Questions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              How Can We Help You?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Find answers to common questions about CUSAATHI
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-border'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <Card variant="elevated">
                <Card.Body className="p-12 text-center">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    No results found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search or category filter
                  </p>
                </Card.Body>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card hover>
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full text-left"
                      >
                        <Card.Body className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="primary" size="sm">
                                  {categories.find(c => c.id === faq.category)?.label}
                                </Badge>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {faq.question}
                              </h3>
                              
                              <AnimatePresence>
                                {openItems.includes(index) && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                                      {faq.answer}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            
                            <motion.div
                              animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </div>
                        </Card.Body>
                      </button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container-custom text-center">
          <SectionTitle 
            title="Still Have Questions?" 
            subtitle="Can't find what you're looking for? Our support team is here to help."
          />
          <a href="/contact">
            <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Contact Support
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
