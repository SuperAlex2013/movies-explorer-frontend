import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideMenu from '../SideMenu/SideMenu';

function Layout() {
  const { pathname } = useLocation();

  const shouldShowFooter = pathname !== '/profile';

  return (
    <div className="page__container">
      <Header />
      <Outlet />
      {shouldShowFooter && <Footer />}
      <SideMenu />
    </div>
  );
}

export default Layout;
