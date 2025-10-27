/* eslint-disable react/prop-types */
import React from 'react';

// Data for the Investment Options menu
const investmentOptions = [
  {
    title: 'Cryptocurrencies',
    subtitle: 'Buy, Sell Swap Cryptocurrencies',
    icon: '📊', // Using a placeholder emoji icon
    id: 'cryptocurrencies',
  },
  {
    title: 'ETFs*',
    subtitle: 'Invest In ETF 24/7',
    icon: '📈', // Using a placeholder emoji icon
    id: 'etfs',
  },
  {
    title: 'Leverage',
    subtitle: 'Go Long Or Short On Top Cryptocurrencies',
    icon: '⚡', // Using a placeholder emoji icon
    id: 'leverage',
  },
  {
    title: 'Crypto Indices',
    subtitle: 'Go Long Or Short On Top Cryptocurrencies',
    icon: '⭐', // Using a placeholder emoji icon
    id: 'crypto-indices',
  },
];

// Reusable component for an Investment Option Card
const InvestmentOptionCard = ({
  title,
  subtitle,
  icon,
  isHighlighted,
  onClick,
}) => (
  <div
    className={`
      flex items-center p-4 sm:p-5 rounded-xl cursor-pointer transition duration-200 
      ${
        isHighlighted
          ? 'bg-indigo-100/70 shadow-md text-indigo-800'
          : 'hover:bg-gray-100'
      }
      shadow-sm
    `}
    onClick={onClick}
    role="button"
    tabIndex="0"
    aria-label={`Select ${title}`}
  >
    {/* Icon Placeholder (mimics the stack of coins/assets) */}
    <div
      className={`text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-indigo-500/10 text-indigo-700`}
    >
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </div>
);

// Main Component for the Investment Menu
// eslint-disable-next-line react/prop-types
const InvestmentMenu = ({ onSelectOption }) => {
  return (
    // Responsive container: Centered, max-width, with padding
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 p-6 sm:p-8">
        {/* Optional Header */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 hidden md:block">
          Explore Investment Options
        </h1>

        {/* List of Investment Option Cards */}
        <div className="space-y-4">
          {investmentOptions.map((option, index) => (
            <InvestmentOptionCard
              key={option.id}
              title={option.title}
              subtitle={option.subtitle}
              icon={option.icon}
              isHighlighted={index === 0} // Highlight the first one as seen in the image
              onClick={() => onSelectOption(option.id)} // Pass ID on click
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentMenu;
