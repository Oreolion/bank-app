
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
  animationDelay = ''
}) => {
  return (
    <div 
      className={cn(
        "card-hover bg-white rounded-lg p-6 shadow-sm animate-scale-in", 
        animationDelay,
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-cu-light-gray text-cu-blue mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-cu-dark-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
