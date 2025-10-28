import React from 'react';

// Reusable SVG Icon Components
// eslint-disable-next-line react/prop-types
const HandHoldingCoinIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Hand shape matching the image */}
    <path d="M12 11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zM12 11h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m0-6v-2m0 2c0-2-2-4-4-4h-2a2 2 0 0 0-2 2v4M12 11v-3.5a2.5 2.5 0 0 0-2.5-2.5h-3" />
    <path d="M16 11c0-2-2-4-4-4" />
    {/* Coin within the hand, simplified */}
    <circle cx="12" cy="15" r="2.5" />
    <path d="M12 12.5v5" />
    <path d="M10.5 15h3" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const StackWithArrowsIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Stack of three coins */}
    <path d="M5 10a7 3 0 0 0 14 0" />
    <path d="M5 14a7 3 0 0 0 14 0" />
    <path d="M5 18a7 3 0 0 0 14 0" />
    <path d="M5 10v8" />
    <path d="M19 10v8" />

    {/* Clear upward arrow for growth */}
    <path d="M12 2l4 4-4 4V2" />
    <path d="M12 2v8" />
  </svg>
);

// eslint-disable-next-line react/prop-types
const WalletIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main wallet body (rectangular) */}
    <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
    {/* Wallet flap/detail */}
    <path d="M12 7V3" />
    <path d="M12 7l-5-4" />
    <path d="M12 7l5-4" />
    {/* Coin/Card slot inside */}
    <path d="M19 11H5" />
    <circle cx="17" cy="16" r="1.5" />
  </svg>
);

// Define the feature data structure
const features = [
  {
    icon: HandHoldingCoinIcon,
    title: 'Safe Investment',
    description:
      'Earn higher returns with confidence through our secure and trusted plans.',
  },
  {
    icon: StackWithArrowsIcon,
    title: 'Higher Returns',
    description:
      'Maximize your wealth with our high-return investment opportunities.',
  },
  {
    icon: WalletIcon,
    title: 'Easy Withdrawal',
    description:
      'Withdraw your funds instantly with just a few clicks. Enjoy without any delays.',
  },
];

// Feature Card component
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 sm:p-8">
    <div className="mr-8 text-[#FFFFFF] opacity-90">
      {/* Increased icon size class */}
      <Icon className="w-10 h-10 md:w-12 md:h-12" />
    </div>
    <h3 className=" text-xl mr-8 md:text-2xl font-semibold mb-3 text-[#FFFFFF]">
      {title}
    </h3>
    <p className=" text-s text-left leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </div>
);

// Main App Component
const Stats = () => {
  return (
    <div className="min-h-falf bg-[#4965D2] flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

// import React, { useState, useEffect } from 'react';

// export default function Stats() {
//   const [clients, setClients] = useState(0);
//   const [countries, setCountries] = useState(0);
//   const [volume, setVolume] = useState(0);

//   const maxClients = 1000; // 1k+
//   const maxCountries = 4; // 4+
//   const maxVolume = 100000000; // 10cr = 10,00,00,000

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setClients((prev) =>
//         prev < maxClients ? prev + Math.ceil(maxClients / 100) : maxClients,
//       );
//       setCountries((prev) => (prev < maxCountries ? prev + 1 : maxCountries));
//       setVolume((prev) =>
//         prev < maxVolume ? prev + Math.ceil(maxVolume / 200) : maxVolume,
//       );
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#4965D2] py-10 text-center">
//       <p className="text-[16px] text-[#FFFFFF] mb-8 font-medium">
//         of crypto since{' '}
//         <span className="text-[#FFFFFF] font-semibold">2022</span>
//       </p>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
//         <div>
//           <h2 className="text-4xl font-medium text-[#FFFFFF]">
//             {clients.toLocaleString()}+
//           </h2>
//           <p className="text-[#FFFFFF]">Clients</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-medium text-[#FFFFFF]">{countries}+</h2>
//           <p className="text-[#FFFFFF]">Countries supported</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-medium text-[#FFFFFF]">
//             {volume.toLocaleString()}+
//           </h2>
//           <p className="text-[#FFFFFF]">Quarterly trading volume</p>
//         </div>
//       </div>
//     </section>
//   );
// }
