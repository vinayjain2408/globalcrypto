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
  BitcoinConversionTable,
  AboutBitcoin,
  // RelatedCryptocurrencies,
  // Features,
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
      <BitcoinConversionTable />
      <AboutBitcoin />
      {/* <RelatedCryptocurrencies />
      <Features /> */}
    </div>
  );
}

export default index;
