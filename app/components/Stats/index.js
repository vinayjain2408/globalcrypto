import React from 'react';

// Reusable SVG Icon Components
// eslint-disable-next-line react/prop-types
const HandHoldingCoinIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <image
      href="/images/SafeInvestment.png" // <-- your PNG file
      x="0"
      y="0"
      width="24"
      height="24"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
const StackWithArrowsIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <image
      href="/images/Higher Returns.png" // <-- your PNG file
      x="0"
      y="0"
      width="24"
      height="24"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
const WalletIcon = ({ className = 'w-10 h-10 md:w-12 md:h-12' }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <image
      href="/images/Easy Withdrawal.png" // <-- your PNG file
      x="0"
      y="0"
      width="24"
      height="24"
    />
  </svg>
);

// Define the feature data structure
const features = [
  {
    icon: HandHoldingCoinIcon,
    title: 'Safe Investment',
    description: (
      <>
        Earn higher returns with confidence
        <br />
        secure and through our
        <br />
        trusted plans.
      </>
    ),
  },
  {
    icon: StackWithArrowsIcon,
    title: 'Higher Returns',
    description: (
      <>
        Maximize your wealth with
        <br />
        our high-return investment
        <br />
        opportunities
      </>
    ),
  },
  {
    icon: WalletIcon,
    title: 'Easy Withdrawal',
    description: (
      <>
        Withdraw your funds instantly
        <br />
        with just a few clicks Enjoy
        <br />
        without any delays.
      </>
    ),
  },
];

// Feature Card component
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 sm:p-8">
    <div className="mr-8 mb-4 opacity-90">
      {/* Increased icon size class */}
      <Icon className="w-10 h-10 md:w-12 md:h-12" />
    </div>
    <h3 className=" text-xl mr-6 md:text-2xl font-semibold mb-3 text-[#FFFFFF]">
      {title}
    </h3>
    <p className=" text-s text-bottom leading-relaxed max-w-xs mx-auto">
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
