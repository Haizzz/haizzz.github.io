import React from 'react';
import { Layout } from '../components/layout';
import { AboutCard } from '../components/aboutCard/aboutCard';

export default function MainPage() {
  return (
    <Layout>
      {/* about me card */}
      <AboutCard />
    </Layout>
  );
}
