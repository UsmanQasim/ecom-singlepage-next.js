// Imports from React & Next
import React from 'react';
import { AppProps } from 'next/app'

// Style Imports
import '@/styles/global.css'

// Layout Imports
import { MainLayout } from '@/layouts';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
