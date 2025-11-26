import { Link } from 'react-router-dom';
import { Home as HomeIcon, Search } from 'lucide-react';
import { Button } from '../components/common';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-bg dark:to-dark-card">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button icon={HomeIcon} iconPosition="left">
              Go Home
            </Button>
          </Link>
          <Link to="/notices">
            <Button variant="outline" icon={Search} iconPosition="left">
              Browse Notices
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
