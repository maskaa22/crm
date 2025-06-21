import Sidebar from '@/app/components/Sidebar';
import React from 'react';


export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className='ml-60'>{children}</div>
    </>
  );
};

export default Layout;
