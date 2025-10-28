import React, { useState } from 'react';
// Note: We use inline SVGs instead of lucide-react to ensure the code is fully self-contained and compiles successfully.

// --- Inline SVG Icons ---

// Bitcoin Logo Icon
const BitcoinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 12.01c-.24.73-.83 1.25-1.52 1.48v2.01c1.17-.23 2.05-1.07 2.39-2.22l.14-.52h-2.11zm-5.64-1.39c-.31.78-.96 1.34-1.84 1.54v2.03c1.37-.21 2.45-1.28 2.76-2.73l-.92-.84zm2.8-1.55c.32-.29.56-.63.74-1.01h2.2c-.37 1.3-1.37 2.3-2.61 2.51v-2.18zm-2.8-2.67c.07-.46.33-.87.72-1.18l.88-.69V4.07C9.36 4.3 8.35 5.38 8.04 6.84l.84.95h2.11c.21-.4.49-.77.85-1.13V4.07c-1.32.22-2.31 1.27-2.63 2.65L8.71 8.78H6.5c.37-1.35 1.42-2.34 2.77-2.52v2.03c-.63.15-1.13.56-1.37 1.12l-.76.7V9.75h2.29l.01-.01zm2.8-2.01c.27-.47.66-.85 1.13-1.09V4.07c-1.07.21-1.93 1.05-2.27 2.21l-.14.52h2.14z" />
  </svg>
);

// Down Arrow Icon for dropdowns
const DownArrowIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

// Mock chart data for ChartDisplay
const timeframes = ['1D', '7D', '30D', '6M', '1Y', 'Max']; // Matching image
const mockChartPath =
  'M0 100 C 20 110, 40 90, 60 100 S 80 120, 100 110 S 120 100, 140 105 S 160 90, 180 100 S 200 90, 220 95 S 240 85, 260 95 S 280 85, 300 90';
const chartHeight = 150;
const chartWidth = 300;

// Function to format currency (using INR for mock data display)
const formatPrice = (amount) =>
  `INR ${amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
const formatChange = (amount) =>
  `INR ${Math.abs(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

// --- Sub-Component for Bitcoin Trading View (Right Panel Content) ---
const BitcoinTradingView = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [activeTimeframe, setActiveTimeframe] = useState('1D');

  // Mock current trading stats (Matching image)
  const currentPrice = 98442.27;
  const change24h = -807.18;
  const changePercent = -0.81;
  const isPositive = change24h > 0;

  // Chart Component
  const ChartDisplay = () => (
    <div className="mt-4">
      {/* Price, Change, and Currency Dropdown */}
      <div className="flex items-center justify-between mb-4">
        {/* Price and Change */}
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(currentPrice)}
          </p>
          <p
            className={`text-base font-medium ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isPositive ? '+' : '−'}
            {formatChange(change24h)}{' '}
            <span className="font-bold">({changePercent.toFixed(2)}%)</span>
          </p>
        </div>
        {/* Currency Dropdown (Mock - Matches Image Style) */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 cursor-pointer bg-white hover:bg-gray-100 transition">
          <span className="font-semibold text-sm">INR</span>
          <DownArrowIcon className="w-3 h-3 text-gray-500" />
        </div>
      </div>

      {/* Timeframe Selector (Matches Image) */}
      <div className="flex space-x-2 items-center mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide border-b pb-4">
        {timeframes.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTimeframe(tf)}
            className={`px-3 py-1 text-sm font-medium rounded-lg transition ${
              activeTimeframe === tf
                ? 'bg-gray-200 text-gray-800 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Mock Chart Area */}
      <div className="relative h-40">
        <svg
          viewBox={`0 0 ${chartWidth + 60} ${chartHeight + 20}`}
          preserveAspectRatio="xMinYMin meet"
          className="w-full h-full"
        >
          {/* Mock Price Labels on Y-axis (Matching Image) - Adjusted viewBox and positions */}
          <text
            x={chartWidth + 50}
            y="30"
            className="text-xs fill-gray-500 text-right"
          >
            101,000.00
          </text>
          <text
            x={chartWidth + 50}
            y="60"
            className="text-xs fill-gray-500 text-right"
          >
            100,000.00
          </text>
          <text
            x={chartWidth + 50}
            y="90"
            className="text-xs fill-gray-500 text-right"
          >
            99,000.00
          </text>
          <text
            x={chartWidth + 50}
            y="120"
            className="text-xs fill-gray-500 text-right"
          >
            98,000.00
          </text>
          <text
            x={chartWidth + 50}
            y="150"
            className="text-xs fill-gray-500 text-right"
          >
            97,000.00
          </text>

          {/* Mock data path (Pink/Reddish color to match image) */}
          <path
            d={mockChartPath}
            transform="translate(0, 15)" // Shift down slightly for padding
            fill="none"
            stroke="#EF4444" // Red for the mock negative change
            strokeWidth="2"
          />

          {/* Axes Labels on X-axis (Simplified Mock) - Adjusted positions to be below chart area */}
          <text x="0" y="170" className="text-xs fill-gray-500">
            15:...
          </text>
          <text x="50" y="170" className="text-xs fill-gray-500">
            17:30
          </text>
          <text x="100" y="170" className="text-xs fill-gray-500">
            21:30
          </text>
          <text x="150" y="170" className="text-xs fill-gray-500">
            01:30
          </text>
          <text x="200" y="170" className="text-xs fill-gray-500">
            05:30
          </text>
          <text x="250" y="170" className="text-xs fill-gray-500">
            09:30
          </text>
          <text
            x={chartWidth - 5}
            y="170"
            className="text-xs fill-gray-500 text-right"
          >
            13:30
          </text>
        </svg>
      </div>
    </div>
  );

  // Buy/Sell Form Component (Redesigned to match image)
  const TradingForm = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      {/* Buy/Sell Tabs */}
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('Buy')}
          className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition ${
            activeTab === 'Buy'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('Sell')}
          className={`w-1/2 py-2 text-sm font-semibold rounded-lg transition ${
            activeTab === 'Sell'
              ? 'bg-white text-gray-700 border border-gray-300 ml-2'
              : 'bg-white text-gray-700 border border-gray-300 ml-2'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="space-y-4">
        {/* 1. Amount to be Paid */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            The amount to be paid
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="w-full pl-4 pr-16 py-3 border border-gray-300 rounded-lg text-lg font-medium transition disabled:bg-gray-100"
              disabled
            />
            <span className="absolute right-3 top-0 bottom-0 flex items-center text-gray-500 font-semibold text-sm">
              <span className="text-yellow-500 mr-1">₿</span> USD
            </span>
            <p className="text-xs text-gray-500 mt-1">The limit is 10 - 5000</p>
          </div>
        </div>

        {/* 2. Currency Purchased */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Currency Purchased
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder=""
              className="w-full pl-4 pr-16 py-3 border border-gray-300 rounded-lg text-lg font-medium transition disabled:bg-gray-100"
              disabled
            />
            <span className="absolute right-3 top-0 bottom-0 flex items-center text-gray-500 font-semibold text-sm">
              <span className="text-yellow-500 mr-1">₿</span> USD
            </span>
            <p className="text-xs text-gray-500 mt-1">limit 9.52 - 4760</p>
          </div>
        </div>

        {/* 3. Pay with */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Pay with
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-medium transition disabled:bg-gray-200"
            disabled
          />
        </div>
      </div>

      {/* Reference Price & Buy Button */}
      <div className="mt-6 flex justify-end items-center text-sm font-medium">
        <span className="font-bold text-gray-800">1 BTC = 1.05 BTC</span>{' '}
        {/* Mocking the visual format */}
      </div>
      <div className="mt-1 flex justify-between items-center text-sm font-medium">
        <span className="text-gray-500">Reference Price</span>
        <span className="font-bold text-gray-800"></span>
      </div>

      <button className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        Buy BTC
      </button>
    </div>
  );

  // Final Render structure for BitcoinTradingView
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Header Section (Matches Image) */}
      <div className="flex flex-col md:flex-row gap-8 items-start space-x-3">
        <BitcoinIcon className="w-8 h-8 text-yellow-500 flex-shrink-0" />

        {/* Wrap heading and paragraph in a horizontal flex container */}
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-bold text-[#353535]">
            BITCOIN PRICE (BTC)
          </h1>
          <p className="text-sm text-[#353535] font-bold">
            Buying Bitcoin on India&rsquo;s leading retail broker for
            <p>buying and selling digital assets is easy, fast and secure.</p>
          </p>
        </div>
      </div>

      {/* Chart and Form Container (Flex to put them side-by-side) */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Chart Section. Takes 60% width on medium screens and up. */}
        <div className="flex-1 min-w-full md:min-w-[60%]">
          <ChartDisplay />
        </div>

        {/* Right: Trading Form. Fixed width of 96 units (~384px) on medium screens and up. */}
        <div className="md:w-96 flex-shrink-0">
          <TradingForm />
        </div>
      </div>

      {/* Footer/Disclaimer Section (Matches Image) */}
      <div className="mt-4">
        <p className="text-sm text-[#7E7E7E]  mb-4">
          Crypto-assets are highly volatile. You could sustain a loss of some or
          all of your investment, so it is important to
          <p>
            invest only what you can afford to lose. For a detailed overview of
            the risks, please review the Risk Disclosure.
          </p>
        </p>
        <h2 className="text-2xl font-bold text-[#353535] mb-1">
          PRICE OF BITCOIN TODAY
        </h2>
        <p className="text-sm text-gray-600">
          Review the latest Bitcoin price movements. Here is today&apos;s trend
          glance: <span className="font-semibold text-red-600">-0.81 %</span>
        </p>
      </div>
    </div>
  );
};

// --- Main App Component: Combines Nav and Content ---
const TradingDashboard = () => {
  // Directly render the trading view as the only content
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 flex justify-center font-sans">
      <div className="max-w-7xl w-full">
        {' '}
        {/* Removed sidebar and structural components for full-width content */}
        <BitcoinTradingView />
      </div>
    </div>
  );
};

export default TradingDashboard;
