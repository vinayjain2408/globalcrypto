import React, { useState } from 'react';
import { FaBitcoin, FaChartLine, FaCoins, FaLayerGroup } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const investItems = [
    {
      title: 'Cryptocurrencies',
      icon: <FaBitcoin className="text-[#4965D2] text-lg h-8 w-8" />,
      submenu: [
        {
          name: 'Bitcoin',
          icon: <FaBitcoin className="text-orange-400 h-8 w-8" />,
        },
        {
          name: 'Ethereum',
          icon: <FaChartLine className="text-gray-500 h-8 w-8" />,
        },
        {
          name: 'Solana',
          icon: <FaCoins className="text-purple-500 h-8 w-8" />,
        },
        {
          name: 'Dogecoin',
          icon: <FaCoins className="text-yellow-500 h-8 w-8" />,
        },
        {
          name: 'Shibu Inu',
          icon: <FaCoins className="text-red-500 h-8 w-8" />,
        },
        { name: 'XRP', icon: <FaCoins className="text-black h-8 w-8" /> },
        {
          name: 'Vision',
          icon: <FaCoins className="text-green-500 h-8 w-8" />,
        },
      ],
    },
    {
      title: 'ETFs*',
      icon: <FaChartLine className="text-[#4965D2] text-lg h-8 w-8" />,
    },
    {
      title: 'Leverage',
      icon: <MdTrendingUp className="text-[#4965D2] text-lg h-8 w-8" />,
    },
    {
      title: 'Crypto Indices',
      desc: "The World's First Real Crypto Index",
      icon: <FaLayerGroup className="text-[#4965D2] text-lg h-8 w-8" />,
    },
  ];

  return (
    <nav className="bg-white text-[#4965D2] px-10 py-3 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <img src="/images/logo.png" alt="logo" className="h-10" />

      {/* Nav Links */}
      <ul className="flex items-center space-x-8 font-medium text-[15px]">
        {/* INVEST */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => {
            setOpenMenu(false);
            setOpenSubmenu(false);
          }}
        >
          Invest
          {openMenu && (
            <div className="absolute left-0 top-7 bg-white rounded-xl shadow-lg py-4 w-56 z-50">
              {investItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenSubmenu(item.title)}
                  onMouseLeave={() => setOpenSubmenu(false)}
                >
                  <div className="px-4 py-2 hover:bg-gray-50 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-gray-700 text-lg font-medium">
                        {item.title}
                      </span>
                    </div>
                    {item.submenu && (
                      <span className="opacity-60 text-lg">›</span>
                    )}
                  </div>

                  {/* Submenu (right side slightly down) */}
                  {item.submenu && openSubmenu === item.title && (
                    <div className="absolute left-[220px] top-[10px] bg-white shadow-lg rounded-xl py-3 w-56 z-50">
                      {item.submenu.map((sub, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
                        >
                          {sub.icon}
                          <span className="text-gray-700 text-lg font-medium">
                            {sub.name}
                          </span>
                        </div>
                      ))}
                      <div className="border-t mt-2 pt-2 text-center text-[13px] text-[#4965D2] font-semibold cursor-pointer hover:underline">
                        See All Cryptocurrencies
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>

        <li className="relative cursor-pointer">
          Trading
          <span className="ml-1 text-[10px] bg-[#E0D607] text-white px-2 py-[1px] rounded-full font-semibold">
            New
          </span>
        </li>
        <li className="cursor-pointer">PMS</li>
        <li className="cursor-pointer">Experts Pick</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">About</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-3">
        <button className="border border-[#4965D2] rounded-full px-5 py-[6px] font-semibold text-[#4965D2] hover:bg-[#f6f7ff] transition">
          Log in
        </button>
        <button className="border border-[#4965D2] bg-[#4965D2] text-white rounded-full px-5 py-[6px] font-semibold hover:bg-[#3f55b5] transition">
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
