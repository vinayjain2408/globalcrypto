// import React from 'react';

// const cryptocurrencies = [
//   { name: 'Bitcoin', symbol: 'BTC', icon: '/images/bitcoin.png' },
//   { name: 'Ethereum', symbol: 'ETH', icon: '/images/Eth.png' },
//   { name: 'USD Coin', symbol: 'USDC', icon: '/images/Eth.png' },
//   { name: 'Binance Coin', symbol: 'BNB', icon: '/images/Eth.png' },
//   { name: 'Solana', symbol: 'SOL', icon: '/images/Eth.png' },
//   { name: 'Chainlink', symbol: 'LINK', icon: '/images/Eth.png' },
//   { name: 'XRP', symbol: 'XRP', icon: '/images/XPR.png' },
//   { name: 'Dogecoin', symbol: 'DOGE', icon: '/images/Eth.png' },
//   { name: 'Cardano', symbol: 'ADA', icon: '/images/Eth.png' },
//   { name: 'Avalanche', symbol: 'AVAX', icon: '/images/Eth.png' },
//   { name: 'Tron', symbol: 'TRX', icon: '/images/Tron.png' },
//   { name: 'Shiba Inu', symbol: 'SHIB', icon: '/images/Shiba.png' },
// ];

// // eslint-disable-next-line react/prop-types
// const CryptoCard = ({ name, symbol, icon }) => (
//   <div className="flex items-center space-x-4 ml-20 p-4 rounded-lg">
//     <img src={icon} alt={`${name} logo`} className="w-12 h-12" />
//     <div>
//       <p className="text-[#353535] text-Inter font-bold">{name}</p>
//       <p className="text-[#7E7E7E] font-semibold text-sm">{symbol}</p>
//     </div>
//   </div>
// );

// const RelatedCryptocurrencies = () => {
//   return (
//     <div className="bg-[#FFFFFF] p-6 sm:p-10 pb-0 mb-0 font-inter">
//       <h1 className="text-3xl sm:text-4xl font-bold text-[#353535] ml-20 mb-8">
//         EXPLORE RELATED <br /> CRYPTOCURRENCIES
//       </h1>

//       <div className="mb-8">
//         <h2 className="text-xl ml-20 font-bold text-[#353535] mb-2">
//           HIGH MARKET CAP CRYPTO
//         </h2>
//         <p className="text-[#7E7E7E] ml-20 text-s font-semibold">
//           Cryptocurrencies with the highest market capitalisation
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {cryptocurrencies.map((crypto, index) => (
//           <CryptoCard key={index} {...crypto} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedCryptocurrencies;
