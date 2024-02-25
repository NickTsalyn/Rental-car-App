// import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </div>
  );
};
