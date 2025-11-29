import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-dark-bg ${className}`}>
      <main className="flex-1 pb-20 lg:pb-8">
        {children}
      </main>
    </div>
  );
};

export default PageContainer;
