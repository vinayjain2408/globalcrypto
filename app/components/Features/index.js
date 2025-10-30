// import React from 'react';

// const Features = () => {
//   const featureItems = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-10 h-10"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.44-1.688 3.16L12 21.423 4.688 15.16A5.987 5.987 0 013 12c0-1.268.63-2.44 1.688-3.16L12 2.575l7.312 6.224A5.986 5.986 0 0121 12z"
//           />
//         </svg>
//       ),
//       title: 'Regulated',
//       description:
//         'Austria based and European regulated crypto & securities broker platform',
//       linkText: 'Read more',
//       linkHref: '#', // Replace with actual link
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-10 h-10"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v4.5m4.5-1.5h.008v.008H9.75v-.008zm3 0h.008v.008H12.75v-.008z"
//           />
//         </svg>
//       ),
//       title: 'Safe and secure',
//       description:
//         'Funds secured in offline wallets. Fully compliant with European data, IT and money laundering standards.',
//       linkText: 'Read more',
//       linkHref: '#', // Replace with actual link
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-10 h-10"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.5h.008v.008H16.5v-.008zm-3 0h.008v.008H13.5v-.008zm-3 0h.008v.008H10.5v-.008zm-3 0h.008v.008H7.5v-.008zM4.5 7.5H2.25A2.25 2.25 0 000 9.75v4.5A2.25 2.25 0 002.25 16.5h12.25M4.5 7.5v9M19.5 7.5v9M4.5 7.5H2.25m17.25 0H19.5"
//           />
//         </svg>
//       ),
//       title: 'Trusted',
//       description: '7+ million happy users. Excellent Trustpilot rating.',
//       linkText: 'Read reviews',
//       linkHref: '#', // Replace with actual link
//     },
//   ];

//   return (
//     <div className="bg-[#4965D2] py-16 px-4 sm:px-6 lg:px-8 ">
//       <div className="max-w-7xl mx-auto grid text-[#FFFFFF] grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
//         {featureItems.map((item, index) => (
//           <div
//             key={index}
//             className="text-white text-left flex flex-col justify-between"
//           >
//             <div>
//               <div className="mb-4 flex justify-start">{item.icon}</div>
//               <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//               <p className="text-sm font-semibold mt-4 opacity-80">
//                 {item.description}
//               </p>
//             </div>
//             <a
//               href={item.linkHref}
//               className="text-white text-base underline hover:no-underline mt-6"
//             >
//               {item.linkText}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
