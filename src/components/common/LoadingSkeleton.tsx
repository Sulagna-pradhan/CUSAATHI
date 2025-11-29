interface LoadingSkeletonProps {
  variant?: 'text' | 'title' | 'avatar' | 'card' | 'button';
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
}

const LoadingSkeleton = ({ 
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
}: LoadingSkeletonProps) => {
  const variants = {
    text: 'h-4 rounded',
    title: 'h-8 rounded',
    avatar: 'w-12 h-12 rounded-full',
    card: 'h-48 rounded-xl',
    button: 'h-10 rounded-lg',
  };

  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`animate-shimmer ${variants[variant]} ${className}`}
      style={{ width, height }}
    />
  ));

  return count > 1 ? (
    <div className="space-y-3">{skeletons}</div>
  ) : (
    skeletons[0]
  );
};

export default LoadingSkeleton;
