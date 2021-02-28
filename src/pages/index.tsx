import React from 'react';
import { AboutCard } from '../components/aboutCard/aboutCard';
import { Layout } from '../components/layout';

export default function MainPage() {
  return (
    <Layout>
      {/* about me card */}
      <AboutCard />
    </Layout>
  );
}
