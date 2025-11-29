import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Badge, SearchBar, SectionTitle, Button } from '../components/common';
import { categories, faqs } from '../data/constant/faqData';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);

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
              Frequently Asked Questions
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              How Can We Help You?
            </h1>
            
            <p className="text-base md:text-xl text-emerald-100 mb-8 leading-relaxed">
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
                      ? 'bg-emerald-500 text-white shadow-lg'
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
      <section className="py-24 md:py-28 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-10 w-80 h-80 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/60 blur-3xl rounded-full" />
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 border-white/80 dark:bg-white dark:text-emerald-700 dark:hover:bg-emerald-50">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
