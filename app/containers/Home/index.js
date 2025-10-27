import {
  CryptoPortfolio,
  CryptoInvestmentSection,
  BitcoinLandingSection,
  FaqSection,
  Footer,
  Hero,
  SidebarNav,
  CryptoListScreen,
  Navbar,
  Stats,
  // WhyGlobalCrypto,
} from '@/components';
import React from 'react';

function index() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <CryptoPortfolio />
      <CryptoInvestmentSection />
      <BitcoinLandingSection />
      <FaqSection />
      <CryptoListScreen />
      <Footer />
      <SidebarNav />
    </div>
  );
}

export default index;
