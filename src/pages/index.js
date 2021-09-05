import * as React from "react";
import HeroSection from "../components/HeroSection";
import Image from "../components/image";
//import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Images" />
    <HeroSection />
    <Image />
  </Layout>
);

export default IndexPage;
