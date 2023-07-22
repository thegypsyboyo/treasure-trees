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
export const metadata = {
  title: 'Treasure Trees | Investment Growth & Agribusiness',
  description: 'An Eco-restoration website for rebuilding and restoration',
}



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
  
  return (
    <html lang="en">
      <body >
        <Head>
        <title>Treasure Trees | Investment Growth & Agribusiness</title>
        <meta name="description" content="This is an example page for your Next.js app." />
        <meta name="keywords" content="treasuretrees, next.js, react, seo" />
        <meta name="author" content="Your Name" />
        </Head>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

