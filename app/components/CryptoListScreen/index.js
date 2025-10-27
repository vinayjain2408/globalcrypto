/* eslint-disable react/prop-types */
import React from 'react';

// Data for the Cryptocurrency list
// Note: In a real app, 'logo' would be an image component or a URL.
// Here, we use initials/symbols and Tailwind colors for styling.
const cryptoList = [
  {
    name: 'Bitcoin',
    ticker: 'BTC',
    icon: '₿',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
  },
  {
    name: 'Ethereum',
    ticker: 'ETH',
    icon: 'Ξ',
    iconBg: 'bg-gray-700/10',
    iconColor: 'text-gray-700',
  },
  {
    name: 'Solana',
    ticker: 'SOL',
    icon: '◎',
    iconBg: 'bg-indigo-700/10',
    iconColor: 'text-indigo-700',
  },
  {
    name: 'Dogecoin',
    ticker: 'DOGE',
    icon: 'Ɖ',
    iconBg: 'bg-yellow-600/10',
    iconColor: 'text-yellow-600',
  },
  {
    name: 'Shiba Inu',
    ticker: 'SHIB',
    icon: '🐕',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-500',
  },
  {
    name: 'XRP',
    ticker: 'XRP',
    icon: '✕',
    iconBg: 'bg-gray-800/10',
    iconColor: 'text-gray-800',
  },
  {
    name: 'Vision',
    ticker: 'VSN',
    icon: '✶',
    iconBg: 'bg-green-700/10',
    iconColor: 'text-green-700',
  },
];

// Reusable component for a single list item
const CryptoListItem = ({ name, ticker, icon, iconBg, iconColor }) => (
  <a
    href={`/crypto/${ticker.toLowerCase()}`} // Example: link to a detailed page
    className="flex items-center p-3 sm:p-4 hover:bg-gray-100 rounded-lg cursor-pointer transition duration-150"
  >
    {/* Icon/Logo area */}
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${iconBg}`}
    >
      <span className={`text-xl font-bold ${iconColor}`}>{icon}</span>
    </div>

    {/* Cryptocurrency Name */}
    <div className="flex-grow">
      <span className="text-gray-900 font-medium text-base">{name}</span>
    </div>

    {/* Ticker Symbol */}
    <span className="text-gray-500 font-light text-sm">{ticker}</span>
  </a>
);

// Main Component
const CryptoListScreen = () => {
  return (
    // Responsive Container: Centered on larger screens, uses padding.
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 p-6 sm:p-8">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Popular Cryptocurrencies
        </h1>

        {/* The List of Cryptocurrencies */}
        <div className="space-y-1">
          {cryptoList.map((crypto) => (
            <CryptoListItem
              key={crypto.ticker}
              name={crypto.name}
              ticker={crypto.ticker}
              icon={crypto.icon}
              iconBg={crypto.iconBg}
              iconColor={crypto.iconColor}
            />
          ))}
        </div>

        {/* "See all Cryptocurrencies" Link */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <a
            href="/all-cryptos"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-150 block text-center"
          >
            See all Cryptocurrencies
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoListScreen;
