import { Code2 } from 'lucide-react';

interface CodeliLogoProps {
  variant?: 'horizontal' | 'square' | 'icon';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  showText?: boolean;
  className?: string;
}

export function CodeliLogo({ 
  variant = 'horizontal', 
  size = 'medium',
  showText = true,
  className = '' 
}: CodeliLogoProps) {
  
  // Size configurations for icon
  const iconSizes = {
    small: 'w-10 h-10',
    medium: 'w-14 h-14',
    large: 'w-16 h-16',
    xlarge: 'w-20 h-20'
  };

  const iconInnerSizes = {
    small: 'w-5 h-5',
    medium: 'w-7 h-7',
    large: 'w-8 h-8',
    xlarge: 'w-10 h-10'
  };

  // Text size configurations
  const textSizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
    xlarge: 'text-4xl'
  };

  // Logo Icon Component
  const LogoIcon = ({ iconSize, innerSize }: { iconSize: string, innerSize: string }) => (
    <div className={`${iconSize} rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/25 dark:shadow-cyan-400/25 ring-1 ring-sky-500/10 dark:ring-cyan-400/10 relative overflow-hidden group`}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Code Icon */}
      <svg 
        className={`${innerSize} relative z-10`}
        fill="none" 
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path 
            d="M36 32L44 24L36 16" 
            stroke="white" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="5" 
          />
          <path 
            d="M12 16L4 24L12 32" 
            stroke="white" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="5" 
          />
          <path 
            d="M29 8L19 40" 
            stroke="white" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="5" 
          />
        </g>
      </svg>
    </div>
  );

  // Horizontal variant (default for navigation)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoIcon iconSize={iconSizes[size]} innerSize={iconInnerSizes[size]} />
        {showText && (
          <span className={`${textSizes[size]} font-bold tracking-tight text-gray-900 dark:text-white`}>
            Codeli
          </span>
        )}
      </div>
    );
  }

  // Square variant (stacked)
  if (variant === 'square') {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <LogoIcon iconSize={iconSizes[size]} innerSize={iconInnerSizes[size]} />
        {showText && (
          <span className={`${textSizes[size]} font-bold tracking-tight text-gray-900 dark:text-white`}>
            Codeli
          </span>
        )}
      </div>
    );
  }

  // Icon only variant
  return (
    <div className={className}>
      <LogoIcon iconSize={iconSizes[size]} innerSize={iconInnerSizes[size]} />
    </div>
  );
}

// Favicon component for different theme support
export function CodeliFavicon({ theme = 'light', size = 32 }: { theme?: 'light' | 'dark', size?: number }) {
  const gradient = theme === 'light' 
    ? 'from-sky-500 to-cyan-500' 
    : 'from-sky-400 to-cyan-400';

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`favicon-gradient-${theme}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={theme === 'light' ? '#0EA5E9' : '#38BDF8'} />
          <stop offset="100%" stopColor={theme === 'light' ? '#06B6D4' : '#22D3EE'} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="9" fill={`url(#favicon-gradient-${theme})`} />
      <path 
        d="M27 24L33 18L27 12" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="3.75" 
      />
      <path 
        d="M21 12L15 18L21 24" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="3.75" 
      />
      <path 
        d="M21.75 6L14.25 30" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="3.75" 
      />
    </svg>
  );
}
