import React, { useState } from 'react';
import {
  FaBitcoin,
  FaBriefcase,
  FaLayerGroup,
  FaExchangeAlt,
} from 'react-icons/fa';

export default function Navbar() {
  const [showInvest, setShowInvest] = useState(false);
  const [activeItem, setActiveItem] = useState('Cryptocurrencies');

  const investItems = [
    {
      title: 'Cryptocurrencies',
      desc: 'Buy, sell & swap cryptocurrencies',
      icon: <FaBitcoin className="text-primary-100 text-xl" />,
    },
    {
      title: 'ETFs*',
      desc: 'Invest in ETFs 24/7',
      icon: <FaBriefcase className="text-primary-100 text-xl" />,
    },
    {
      title: 'Leverage',
      desc: 'Go Long or Short on top cryptocurrencies',
      icon: <FaExchangeAlt className="text-primary-100 text-xl" />,
    },
    {
      title: 'Crypto Indices',
      desc: "The world's first real crypto index",
      icon: <FaLayerGroup className="text-primary-100 text-xl" />,
    },
  ];

  const topCryptos = [
    { name: 'Bitcoin', symbol: 'BTC', color: 'text-orange-500' },
    { name: 'Ethereum', symbol: 'ETH', color: 'text-gray-500' },
    { name: 'Solana', symbol: 'SOL', color: 'text-purple-500' },
    { name: 'Dogecoin', symbol: 'DOGE', color: 'text-yellow-500' },
    { name: 'Shiba Inu', symbol: 'SHIB', color: 'text-red-500' },
    { name: 'XRP', symbol: 'XRP', color: 'text-black' },
    { name: 'Vision', symbol: 'VSN', color: 'text-green-600' },
  ];

  return (
    <nav className="relative flex justify-between items-center py-4 px-9 bg-white shadow-md">
      {/* Logo */}
      <img src="/images/logo.png" alt="logo" className="h-10" />

      {/* Nav Links */}
      <ul className="flex justify-center items-center space-x-6">
        <li
          className="text-[#4965D2] font-medium relative cursor-pointer"
          onMouseEnter={() => setShowInvest(true)}
          onMouseLeave={() => setShowInvest(false)}
        >
          Invest
          {/* Dropdown */}
          {showInvest && (
            <div
              className="absolute top-6 left-0 bg-white text-black shadow-lg rounded-lg py-6 px-4 flex space-x-12 w-[600px] z-50"
              onMouseEnter={() => setShowInvest(true)}
              onMouseLeave={() => setShowInvest(false)}
            >
              {/* Left Column */}
              <div className="w-1/2 border-r pr-6">
                <h3 className="font-bold text-primary-100 mb-3">INVEST IN:</h3>
                <ul className="space-y-2">
                  {investItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center p-2 rounded-md cursor-pointer ${
                        activeItem === item.title ? 'bg-gray-100' : ''
                      }`}
                      onMouseEnter={() => setActiveItem(item.title)}
                    >
                      <div>{item.icon}</div>
                      <div className="ml-2">
                        <p className="font-semibold text-sm text-primary-100">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="w-1/2">
                {activeItem === 'Cryptocurrencies' ? (
                  <>
                    <h3 className="font-bold text-primary-100 mb-3">
                      TOP CRYPTOCURRENCIES:
                    </h3>
                    <ul className="space-y-2">
                      {topCryptos.map((coin, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className={`flex items-center space-x-2`}>
                            <div
                              className={`w-2 h-2 rounded-full ${coin.color}`}
                            ></div>
                            <span>{coin.name}</span>
                          </span>
                          <span className="text-gray-400">{coin.symbol}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-primary-100 text-xs mt-4 cursor-pointer font-semibold">
                      See all Cryptocurrencies
                    </p>
                  </>
                ) : (
                  <div className="flex justify-center items-center h-full text-gray-400 text-sm">
                    Hover “Cryptocurrencies” to view details
                  </div>
                )}
              </div>
            </div>
          )}
        </li>

        <li className="text-[#4965D2] cursor-pointer">
          Trading
          <button className="border border-[#E0D607] text-xs bg-[#E0D607] text-white rounded-full ml-1 px-1 py-[1px] font-semibold">
            New
          </button>
        </li>
        <li className="text-[#4965D2] cursor-pointer">PMS</li>
        <li className="text-[#4965D2] cursor-pointer">Experts Pick</li>
        <li className="text-[#4965D2] cursor-pointer">Blogs</li>
        <li className="text-[#4965D2] cursor-pointer">About</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-3">
        <button className="border border-[#4965D2] rounded-full px-5 py-1 text-[#4965D2] font-semibold">
          Log in
        </button>
        <button className="border border-[#4965D2] bg-[#4965D2] text-white rounded-full px-5 py-1 font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
}

// import React from 'react';

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center py-4 px-9 bg-[#FFFFFF] text-white">
//       {/* <div className="text-xl font-bold">GLOBAL CRYPTO</div> */}
//       <img src="/images/logo.png" alt="logo" />
//       <ul className="border border-[#4965d2] flex justify-center items-center space-x-5 rounded-3xl p-2">
//         <li className="text-[#4965D2] cursor-rounded-full bg-white px-4 py-1">
//           Invest
//         </li>
//         <li className="text-[#4965D2] cursor-pointer">
//           Trading
//           <button className="border border-[#E0D607] text-xs bg-[#E0D607] text-[#FFFFFF] rounded-full ml-1 px-1 py-0 font-semibold">
//             New
//           </button>
//         </li>
//         <li className="text-[#4965d2] cursor-pointer ">PMS</li>
//         <li className="text-[#4965D2] cursor-pointer ">Experts Pick</li>
//         <li className="text-[#4965d2] cursor-pointer ">Blogs</li>
//         <li className="text-[#4965d2] cursor-pointer ">About</li>
//         <li></li>
//       </ul>
//       <div className="space-x-4">
//         <button className="border border-[#4965D2] rounded-full px-6 py-1 text-[#4965D2] font-semibold">
//           Log in
//         </button>
//         <button className="border border-[#4965D2] bg-[#4965D2] text-[#FFFFFF] rounded-full px-6 py-1 font-semibold">
//           Sign up
//         </button>
//       </div>
//     </nav>
//   );
// }
