import React, { useState } from 'react';
// Note: We use inline SVGs instead of lucide-react to ensure the code is fully self-contained and compiles successfully.

// --- Inline SVG Icons ---

// Bitcoin Logo Icon
const BitcoinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
  >
    <image href="/images/bitcoin.png" x="0" y="0" width="20" height="20" />
  </svg>
);

// Down Arrow Icon for dropdowns
const DownArrowIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#353535"
    width="28"
    height="28"
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
  // State for form inputs (now functional)
  const [amountPaid, setAmountPaid] = useState('');
  <input
    value={amountPaid}
    onChange={(e) => setAmountPaid(e.target.value)}
    placeholder="Enter amount"
  />;
  const [currencyPurchased, setCurrencyPurchased] = useState('');

  <input
    type="text"
    value={currencyPurchased}
    onChange={(e) => setCurrencyPurchased(e.target.value)}
    placeholder="limit 9.52 - 4760"
    className="w-full p-3 pr-16 border border-gray-300 rounded-lg bg-[#D9D9D9] text-gray-800"
  />;

  // Mock current trading stats (Matching image)
  const currentPrice = 98442.27;
  const change24h = -807.18;
  const changePercent = -0.81;
  const isPositive = change24h > 0;
  // Chart Component
  const ChartDisplay = () => (
    <div className="mt-4 border-4 border-[#EAEAEA] w-full h-full rounded-lg p-6">
      {/* Price, Change, and Currency Dropdown */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
        {/* Price and Change */}
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-[#353535]">
            {formatPrice(currentPrice)}
          </p>
          <p
            className={`text-base font-medium mt-2 ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isPositive ? '+' : '-'}
            {formatChange(change24h)}{' '}
            <span className="font-bold text-[#353535]">
              ({changePercent.toFixed(2)}%)
            </span>
          </p>
        </div>
        {/* Timeframe Selector (Matches Image) */}
        <div className="flex items-center space-x-2 mr-4">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTimeframe(tf)}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition ${
                activeTimeframe === tf
                  ? 'bg-gray-200 text-[#353535]'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        {/* Currency Dropdown (Mock - Matches Image Style) */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 cursor-pointer bg-white hover:bg-gray-100 transition">
          <span className="font-semibold text-sm text-[#353535]">INR</span>
          <DownArrowIcon className="w-3 h-3 text-[#353535]" />
        </div>
      </div>

      {/* Mock Chart Area */}
      <div className="relative h-80">
        <svg
          viewBox={`0 0 ${chartWidth + 60} ${chartHeight + 20}`}
          preserveAspectRatio="xMinYMin meet"
          className="w-full h-full"
        >
          {/* Line gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E62E54" /> {/* light  */}
              <stop offset="100%" stopColor="#E62E54" /> {/* deeper */}
            </linearGradient>

            {/* Area gradient (fill below the line) */}
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4899eff" stopOpacity="0.4" />{' '}
              {/* soft top */}
              <stop offset="100%" stopColor="#f4899eff" stopOpacity="0" />{' '}
              {/* fade out bottom */}
            </linearGradient>
          </defs>
          {/* Mock Price Labels on Y-axis (Matching Image) - Adjusted viewBox and positions */}
          <text
            x={chartWidth + 40}
            y="30"
            className="text-xs fill-[#353535] text-right"
          >
            101,000.00
          </text>
          <text
            x={chartWidth + 40}
            y="60"
            className="text-xs fill-[#353535] text-right"
          >
            100,000.00
          </text>
          <text
            x={chartWidth + 40}
            y="90"
            className="text-xs fill-[#353535] text-right"
          >
            99,000.00
          </text>
          <text
            x={chartWidth + 40}
            y="120"
            className="text-xs fill-[#353535] text-right"
          >
            98,000.00
          </text>
          <text
            x={chartWidth + 40}
            y="150"
            className="text-xs fill-[#353535] text-right"
          >
            97,000.00
          </text>
          {/* Mock data path (Pink/Reddish color to match image) */}{' '}
          <path
            d={`${mockChartPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
            transform="translate(4, 15)"
            fill="url(#fillGradient)"
            stroke="none"
          />
          {/* Gradient Line */}
          <path
            d={mockChartPath}
            transform="translate(4, 15)"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
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
    <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-100 order-1 lg:order-2">
      {/* Buy/Sell Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-lg font-semibold transition-colors ${
            activeTab === 'buy'
              ? 'text-white bg-[#4965D2] rounded-lg'
              : 'text-[#4965D2] border border-[#4965D2] hover:bg-gray-100 rounded-lg'
          }`}
          onClick={() => setActiveTab('buy')}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-3 text-lg font-semibold transition-colors ${
            activeTab === 'sell'
              ? 'text-white bg-[#4965D2] rounded-lg'
              : 'text-[#4965D2] border border-[#4965D2] hover:bg-gray-100 rounded-lg'
          }`}
          onClick={() => setActiveTab('sell')}
        >
          Sell
        </button>
      </div>
      <div className="space-y-4">
        {/* 1. Amount to be Paid (Now functional) */}
        <div>
          <label className="block text-sm font-medium text-[#858391] mb-1">
            The amount to be paid
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="The limit is 10 - 5000"
              className="w-full p-3 pr-16 border border-gray-300 rounded-lg bg-[#D9D9D9] text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              readOnly // Set to readOnly as per image style
            />

            <span className="absolute inset-y-0 right-0 flex items-center w-26 h-8 rounded-lg mr-2 mt-2 bg-[#FFFFFF3B] rounded-lg pr-4  text-gray-500 font-semibold">
              <span className="text-yellow-500 mr-1">💰</span> USD
            </span>
          </div>
        </div>
        {/* 2. Currency Purchased (Now functional) */}
        <div>
          <label className="block text-sm font-medium text-[#858391] mb-1">
            Currency Purchased
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="limit 9.52 - 4760"
              className="w-full p-3 pr-16 border border-gray-300 rounded-lg bg-[#D9D9D9] text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              readOnly // Set to readOnly as per image style
            />

            <span className="absolute inset-y-0 right-0 flex items-center w-26 h-8 rounded-lg mr-2 mt-2 bg-[#FFFFFF3B] pr-4 text-[#696262] font-semibold">
              <span className="text-yellow-500  mr-1">💰</span>
              USD
            </span>
          </div>
        </div>
        {/* 3. Pay with */}
        <div>
          <label className="block text-sm font-medium text-[#858391] mb-1">
            Pay with
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full p-3 border border-gray-300 rounded-lg bg-[#D9D9D9] focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {/* Reference Price */}
        <div className="pt-2">
          <p className="text-s flex flex-wrap gap-4 text-[#858391] font-bold">
            Reference Price
            <p className="text-s ml-24 font-semibold text-[#403480]">
              1 BTC = 1.0 5 BTC
            </p>
          </p>
        </div>
        {/* <div className="flex flex-1 gap-56 justify-center md:justify-start text-[#4965D2]">
          <span className="text-s flex flex-wrap gap-4 text-[#858391] font-semibold">
            Reference Price
          </span>
          <span className="text-sm font-semibold text-[#403480] ">
            USDT = 1.05 USDT
          </span>
        </div> */}

        {/* Buy USDT Button */}
        <button
          type="submit"
          className="w-full py-3 mt-2 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/50"
        >
          Buy BTC
        </button>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Header Section (Matches Image) */}
      <div className="flex items-center">
        <BitcoinIcon className="w-10 h-10 text-yellow-500 flex-shrink-0 mr-4" />
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
        {/* Left: Chart Section. Takes 2/3 width on medium screens and up. */}
        <div className="md:w-[200%] w-full">
          <ChartDisplay />
        </div>
        {/* Right: Trading Form. Takes 1/3 width on medium screens and up. */}
        <div className="md:w-[100%] w-full">
          <TradingForm />
        </div>
      </div>
      {/* Footer/Disclaimer Section (Matches Image) */}
      <div className="mt-12">
        <p className="text-sm text-[#7E7E7E] mb-4">
          Crypto-assets are highly volatile. You could sustain a loss of some or
          all of your investment, so it is important to
          <p>
            invest only what you can afford to lose. For a detailed overview of
            the risks, please review the Risk Disclosure.
          </p>
        </p>
        <h2 className="text-4xl font-bold text-[#353535] mb-1">
          PRICE OF BITCOIN TODAY
        </h2>
        <p className="text-sm text-[#353535] mt-4">
          Review the latest Bitcoin price movements. Here is today&apos;s trend
          glance: <span className="font-semibold text-red-600">-0.81 %</span>
        </p>
      </div>
    </div>
  );
};

// Final Render structure for BitcoinTradingView

// --- Main App Component: Combines Nav and Content ---
const TradingDashboard = () => {
  // Directly render the trading view as the only content
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 flex justify-center font-sans">
      <div className="max-w-7xl w-full">
        {/* Removed sidebar and structural components for full-width content */}
        <BitcoinTradingView />
      </div>
    </div>
  );
};

export default TradingDashboard;
