import React from 'react';
import Footer from '../Footer/index.jsx';
import Navbar from '../Navbar/index.jsx';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
