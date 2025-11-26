import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from './components/layout';
import { LoadingSpinner } from './components/common';

import { 
  Login,
  Register,
  Dashboard,
  Profile,
  NoticeList,
  NoticeDetail,
  ResourceHub,
  Forum,
  Groups,
  Alumni,
  Placements,
  ToolsHub,
  CollegeList,
  CollegeDetail,
  Calendar,
  Helpdesk,
  Search
} from './pages';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));


// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading..." />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg">
        <Navbar />
        
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Notices */}
              <Route path="/notices" element={<NoticeList />} />
              <Route path="/notices/:id" element={<NoticeDetail />} />
              
              {/* Calendar */}
              <Route path="/calendar" element={<Calendar />} />
              
              {/* Resources */}
              <Route path="/resources" element={<ResourceHub />} />
              <Route path="/resources/:category" element={<ResourceHub />} />
              
              {/* Community */}
              <Route path="/community" element={<Forum />} />
              <Route path="/community/forum" element={<Forum />} />
              <Route path="/community/groups" element={<Groups />} />
              <Route path="/community/alumni" element={<Alumni />} />
              
              {/* Colleges */}
              <Route path="/colleges" element={<CollegeList />} />
              <Route path="/colleges/:id" element={<CollegeDetail />} />
              
              {/* Career */}
              <Route path="/career" element={<Placements />} />
              <Route path="/career/placements" element={<Placements />} />
              
              {/* Tools */}
              <Route path="/tools" element={<ToolsHub />} />
              <Route path="/tools/:category" element={<ToolsHub />} />
              
              {/* Helpdesk */}
              <Route path="/helpdesk" element={<Helpdesk />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
