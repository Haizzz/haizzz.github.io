import React from 'react';
import { Helmet } from 'react-helmet';

export const Favicon = () => {
  return (
    <Helmet>
      <link rel='icon' type='image/png' href='../../images/favicon.png' />
    </Helmet>
  );
};
