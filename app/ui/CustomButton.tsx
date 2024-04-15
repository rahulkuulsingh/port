'use client';
import React, { ReactNode } from 'react';

export interface CustomButtonProps {
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <div style={{ border: '1px solid red', padding: '45px', borderRadius: '3px', cursor: 'pointer' }} {...props}>
      {children}
    </div>
  );
}

export default CustomButton;
