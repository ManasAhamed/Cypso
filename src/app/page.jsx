"use client";

import Layout from "./component/layout";
import Faq from "./component/section/Faq";
import Strategy from "./component/section/Strategy";
import Web from "./component/section/Web";
import Hero from "./component/section/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Web />
      <Strategy />
      <Faq />
    </Layout>
  );
}
