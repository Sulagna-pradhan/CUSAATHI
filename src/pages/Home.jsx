import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp,
  BookOpen,
  Users,
  MessageSquare,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button, Card, Badge, SectionTitle } from '../components/common';
import { features } from '../data/constant/featuresData';

const Home = () => {


  const stats = [
    { label: 'Affiliated Colleges', value: '151+', icon: Award },
    { label: 'Departments', value: '60+', icon: BookOpen },
    { label: 'Active Students', value: '10K+', icon: Users },
    { label: 'Resources', value: '5000+', icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: 'Priya Das',
      role: 'Computer Science Student',
      college: 'St. Xaviers College',
      content: 'CUSAATHI has been a lifesaver for my exam preparations. The PYQs and notes are organized perfectly.',
      avatar: 'https://ui-avatars.com/api/?name=Priya+Das&background=random'
    },
    {
      name: 'Rahul Sharma',
      role: 'Physics Major',
      college: 'Scottish Church College',
      content: 'The community feature helped me find a study group that actually works. Highly recommended!',
      avatar: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=random'
    },
    {
      name: 'Ananya Roy',
      role: 'English Literature',
      college: 'Lady Brabourne College',
      content: 'Finally a platform that understands what CU students need. The notice alerts are super timely.',
      avatar: 'https://ui-avatars.com/api/?name=Ananya+Roy&background=random'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container-custom py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="primary" size="lg" className="mb-6">
              <Sparkles className="w-4 h-4" />
              Welcome to CUSAATHI
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Your Complete University Companion
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              One-stop solution for all University of Calcutta students across 151+ affiliated colleges and 60+ departments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto text-lg px-8 py-4">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} variant="glass" className="text-center border-none shadow-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <Card.Body className="py-8">
                    <Icon className="w-10 h-10 mx-auto mb-4 text-primary-500" />
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white dark:bg-dark-bg min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="About CUSAATHI" 
                align="left"
                className="mb-8"
              />
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                CUSAATHI is a student-led initiative designed to bridge the gap between resources and students of the University of Calcutta. We understand the challenges of finding accurate information, study materials, and a supportive community.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our mission is to empower every student with the right tools and resources to excel in their academic journey. From curated notices to a vast library of study materials, we are here to support you every step of the way.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Read Our Story
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl transform rotate-3 opacity-20 blur-xl" />
              <img 
                src="https://cdn.pixabay.com/photo/2022/11/07/06/53/helping-hands-7575803_1280.png" 
                alt="Students studying" 
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us / Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-card min-h-screen flex items-center">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose CUSAATHI?" 
            subtitle="We provide comprehensive features designed specifically for the needs of CU students, making your university life easier and more productive."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={feature.link} className="block h-full">
                    <Card clickable hover className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-dark-bg">
                      <Card.Body className="p-8">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group">
                          Explore Feature <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-dark-bg min-h-[80vh] flex items-center">
        <div className="container-custom">
          <SectionTitle 
            title="Student Stories" 
            subtitle="Hear from your fellow students about how CUSAATHI has helped them in their academic journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-50 dark:bg-dark-card border-none">
                  <Card.Body className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full ring-2 ring-primary-100 dark:ring-primary-900"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-border text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {testimonial.college}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Excel?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of CU students already using CUSAATHI to simplify their university life and achieve their goals.
          </p>
          <Link to="/register">
            <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-gray-100 border-white text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
