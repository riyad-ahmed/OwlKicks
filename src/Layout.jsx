import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow mt-[93px]">
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
