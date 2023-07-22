"use client"

import '../../styles/globals.css';
import '../../styles/main.scss';
import '../../styles/about.scss';
import '../../styles/faq.scss';
import '../../styles/team.scss';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Footer from '../../components/HOME/Footer/footer';
import Navbar from '../../components/HOME/navbar/navbar';
import { useEffect } from 'react';
import Head from "next/head"
import {motion, AnimatePresence} from "framer-motion"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for route changes
    // The `routeChangeComplete` event is triggered after a route change completes
    // We use `once: true` to remove the event listener after the first invocation
    // This ensures that the scroll behavior only applies to the initial load and back button navigation
    // Regular client-side navigation will not trigger this event.
    window.addEventListener('routeChangeComplete', handleRouteChange, { once: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);
  // Define the page transition animation
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <html lang="en">
      <body >
        <Head>
        <title>Treasure Trees | Investment Growth & Agribusiness</title>
        <meta name="description" content="Investment Growth & Agribusiness." />
        <meta name="description" content="'An Eco-restoration website for rebuilding and restoration." />
        <meta name="author" content="Lewis Onyango" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={typeof window !== 'undefined' ? window.location.pathname : ''}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 2 }}
            className="min-h-screen bg-black relative"
          >

            <Navbar/>
            {children}
            <Footer/>
          </motion.div>
          </AnimatePresence>
      </body>
    </html>
  )
}

