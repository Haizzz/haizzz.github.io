import React from "react";
import { Layout } from "../components/layout";
import { AboutCard } from "../components/aboutCard/aboutCard";
import { SEO } from "../components/seo/seo";

export default function MainPage() {
  return (
    <Layout>
      <SEO title="Anh Le | Senior Software Engineer at Canva" />
      {/* about me card */}
      <AboutCard />
    </Layout>
  );
}
