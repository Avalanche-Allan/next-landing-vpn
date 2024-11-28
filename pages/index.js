import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import FAQ from "../components/FAQ"; // assuming FAQ component is located at this path

export default function Home() {
  return (
    <>
      <SeoHead title='DocSherpa.ai Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <FAQ /> // added FAQ section
      </Layout>
    </>
  );
}
