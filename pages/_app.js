import '../styles/fonts.css'
import '../styles/globals.css'
import Layout from '../layout'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { init } from "@socialgouv/matomo-next";
import ScrollToTop from "react-scroll-to-top";
import Head from 'next/head';
import ErrorBoundary from '../layout/errorBoundaries';
// import { AnalyticsProvider } from 'react-analytics';
// import Script from "next/script";

// import { useWindowScrollPosition } from 'rooks';


const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.matomoInitialized) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
      window.matomoInitialized = true;
    }
  }, []);
  const [position, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  // This code will run only on the client-side because
  // useEffect does not run on the server
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        setPosition({ scrollX, scrollY });
      };
      
      window.addEventListener("scroll", handleScroll);
      
      // Cleanup event listener
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <>
          {/* <AnalyticsProvider id="UA-XXXXX-Y"> */}
            <Head>
              <title>AuroraFast</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
              {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;400;800&display=swap" rel="stylesheet" /> */}
            </Head>
            {/* <ErrorBoundary> */}
            <Layout
              position={position}
            >
              <Component {...pageProps} />
            </Layout>
          {/* </ErrorBoundary> */}
      {/* </AnalyticsProvider> */}
    </>
  </>
)}

export default wrapper.withRedux(MyApp);