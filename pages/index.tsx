import Head from 'next/head';
import { GetStaticProps } from 'next';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import React from 'react';
import dynamic from 'next/dynamic';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/${locale}.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: typeof import('../locales/en.json');
}) {
  const { heroData, aboutData, portfolioData, blogData, contactData } = content;
  const metaInfo = {
    title: 'Dat Thai Viet | Web Developer',
    description:
      'Dat Thai Viet is a web developer, experienced in creating beautiful and functional websites and web applications.',
    url: 'https://datblog.me',
    previewImage:
      '/ms-icon-150x150.png',
  };

  const { title, description, url, previewImage } = metaInfo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portfolio, personal website, web developer"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Kelvin Sanchez" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
      </Head>
      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      {/*<BlogSection blogData={blogData} />*/}
      <ContactSection contactData={contactData} />
    </>
  );
}
