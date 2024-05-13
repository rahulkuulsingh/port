import React from 'react';

interface MasonryLayoutProps {
  children: React.ReactNode;
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="">
          {child}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;