import React from 'react';

const CryptoPortfolio = () => {
  const categories = ['Popular', 'Rewards', 'Stablecoins', 'Newly listed'];

  const cryptoAssets = [
    // I've kept the crypto logos for better visuals
    {
      name: 'TRON',
      symbol: 'TRX',
      price: '$0.34',
      change: '',
      icon: '/images/Tron.png',
    },
    {
      name: 'Dogecoin',
      symbol: 'DOGE',
      price: '$0.21',
      change: '+8.90%',
      icon: '/images/DOGECOIN.png',
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: '$2.58',
      change: '+6.88%',
      icon: '/images/XPR.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$4,103.91',
      change: '',
      icon: '/images/Eth.png',
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$114,539.00',
      change: '+2.51%',
      icon: '/images/bitcoin.png',
    },
    {
      name: 'Shiba Inu',
      symbol: 'SHIB',
      price: '$0.000011',
      change: '+7.45%',
      icon: '/images/Shiba.png',
    },

    {
      name: 'Stellar',
      symbol: 'XLM',
      price: '$0.34',
      change: '+5.81%',
      icon: '/images/Stellar.png',
    },
    {
      name: 'Axie Infinity Shards',
      symbol: '',
      price: '$1.74',
      change: '+9.81%',
      icon: '/images/Axie Infinity Shards.png',
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: '$96.94',
      change: '+1.02%',
      icon: '/images/Litecoin.png',
    },
    {
      name: 'Pepe',
      symbol: 'PEPE',
      price: '$0.00000076',
      change: '+11.56%',
      icon: '/images/Pepe.png',
    },
    {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      price: '$540.29',
      change: '+3.03%',
      icon: '/images/Bitcoin Cash.png',
    },
    {
      name: 'Uniswap',
      symbol: 'UNI',
      price: '$6.68',
      change: '+9.22%',
      icon: '/images/Uniswap.png',
    },
  ];

  // Function to apply different size classes
  const getCardSize = (index) => {
    // These indices will get a slightly taller card
    const tallerIndices = [0, 5, 8, 10];

    // These indices will get a slightly shorter card
    const shorterIndices = [2, 4, 7, 11];

    if (tallerIndices.includes(index)) {
      return 'h-20 p-4'; // Taller height, more padding
    } else if (shorterIndices.includes(index)) {
      return 'h-20 p-2.5'; // Shorter height, less padding
    } else {
      return 'h-20 p-3'; // Default height
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] p-4 sm:p-8 pb-0">
      <div className="max-w-7xl mx-auto pt-12 pb-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#4965D2] mb-10 sm:mb-16">
          Build your crypto portfolio
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex space-x-2 p-1 bg-[#686B821F] rounded-full shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    index === 0
                      ? 'bg-[#4965D2] text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Crypto Assets Grid (Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {cryptoAssets.map((asset, index) => (
            <div
              key={index}
              // Dynamically apply height and padding classes here!
              className={`fflex flex-col justify-between items-start rounded-xl shadow-lg border border-[#4965D2]
             transition-transform duration-300 hover:scale-[1.03] cursor-pointer text-white
             bg-[#4965D2] p-4 h-28 ${getCardSize(index)}`}
            >
              {/* Asset Icon and Name/Symbol */}
              <div className="flex items-center w-full space-x-2">
                {/* Icon */}
                <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-[#4965D2]">
                  <img
                    src={asset.icon}
                    alt={`${asset.name} logo`}
                    className="w-8 h-8 rounded-full"
                  />
                </div>

                {/* Name + Symbol inline */}
                <div className="flex items-center space-x-2 font-semibold text-sm">
                  <span className="truncate text-s text-[#FFFFFF]">
                    {asset.name}
                  </span>
                  <span className="text-ls text-[#FFFFFF] font-medium">
                    {asset.symbol}
                  </span>
                </div>
              </div>

              {/* Price and Change */}
              <div className="w-full flex items-center justify-center ml-4 space-x-2">
                <div className="text-sm font-semibold text-[#FFFFFF]">
                  {asset.price}
                </div>
                {asset.change && (
                  <div
                    className={`text-sm font-semibold ${
                      asset.change.startsWith('+')
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {asset.change}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoPortfolio;
