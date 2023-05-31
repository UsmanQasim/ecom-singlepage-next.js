import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-[100dvw] h-[100dvh]'>
      <div className='h-[15%]'>
        <Navbar />
      </div>
      <div className="h-[85%]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
