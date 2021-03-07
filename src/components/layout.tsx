import React from 'react';
import { Header } from './header/header';
import { Favicon } from './seo/favicon';

export const Layout = ({ children }) => {
  return (
    <>
      <Favicon />
      <Header />
      <main>{children}</main>
    </>
  );
};
