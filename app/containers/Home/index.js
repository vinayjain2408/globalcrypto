import {
  CryptoPortfolio,
  CryptoInvestmentSection,
  BitcoinLandingSection,
  FaqSection,
  Footer,
  Hero,
  SidebarNav,
  Navbar,
  Stats,
  TradingDashboard,
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
      {/* <SafeSection /> */}
      <Footer />
      <SidebarNav />
      <TradingDashboard />
    </div>
  );
}

export default index;
