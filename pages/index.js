import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <SeoHead title='DocSherpa.ai Landing Page' />
      <Layout>
        <Hero />
        <FAQ />
      </Layout>
    </>
  );
}
