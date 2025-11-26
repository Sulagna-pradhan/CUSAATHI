import PropTypes from 'prop-types';

const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-dark-bg ${className}`}>
      <main className="flex-1 pb-20 lg:pb-8">
        {children}
      </main>
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageContainer;
