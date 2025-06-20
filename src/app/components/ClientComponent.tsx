'use client';
import React from 'react';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
};

export default ClientComponent;
