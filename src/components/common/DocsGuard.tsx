import { useState, useEffect, ReactNode } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { Button, Input, Card } from './index';

interface DocsGuardProps {
  children: ReactNode;
}

const DocsGuard = ({ children }: DocsGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const DOCS_PASSWORD = import.meta.env.VITE_DOCS_PASSWORD || 'dev123';

  useEffect(() => {
    const accessGranted = sessionStorage.getItem('docs_access_granted');
    if (accessGranted === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DOCS_PASSWORD) {
      sessionStorage.setItem('docs_access_granted', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid access code');
      setPassword('');
    }
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg p-4">
      <Card className="w-full max-w-md p-8 shadow-xl border-t-4 border-t-emerald-500">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Developer Access
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            This area is restricted to the development team. Please enter the access code to continue.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Input
              label="Access Code"
              type="password"
              placeholder="Enter code..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              icon={Unlock}
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            size="lg"
            className="shadow-lg shadow-emerald-500/20"
          >
            Unlock Documentation
          </Button>


        </form>
      </Card>
    </div>
  );
};

export default DocsGuard;
