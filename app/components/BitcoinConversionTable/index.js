import React from 'react';

const BitcoinConversionTable = () => {
  // Data for the EUR to BTC conversion header row
  const eurToBtcData = [
    { eur: 1, btc: 0.00001016 },
    { eur: 5, btc: 0.00005079 },
    { eur: 10, btc: 0.000102 },
    { eur: 15, btc: 0.000152 },
    { eur: 20, btc: 0.000203 },
    { eur: 25, btc: 0.000254 },
  ];

  // Data for the 1 BTC to various currency conversions
  const btcToCurrencyData = [
    { currency: 'Euro (EUR)', code: 'EUR', value: '98,442.27' },
    { currency: 'US Dollar (USD)', code: 'USD', value: '114,757.35' },
    { currency: 'Swiss Franc (CHF)', code: 'CHF', value: '91,058.84' },
    {
      currency: 'British Pound Sterling (GBP)',
      code: 'GBP',
      value: '86,159.23',
    },
    { currency: 'Turkish Lira (TRY)', code: 'TRY', value: '4,815,093.04' },
    { currency: 'Polish Zloty (PLN)', code: 'PLN', value: '418,829.06' },
    { currency: 'Hungarian Forint (HUF)', code: 'HUF', value: '38,234,808.17' },
    { currency: 'Czech Koruna (CZK)', code: 'CZK', value: '2,393,877.27' },
    { currency: 'Swedish Krona (SEK)', code: 'SEK', value: '1,075,778.41' },
    { currency: 'Danish Krone (DKK)', code: 'DKK', value: '735,310.66' },
    { currency: 'Romanian Leu (RON)', code: 'RON', value: '500,511.49' },
    { currency: 'Bulgarian Lev (BGN)', code: 'BGN', value: '192,534.47' },
  ];

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto bg-[#FFFFFF] shadow-xl rounded-lg overflow-hidden">
        {/* Title */}
        <h1 className="text-xl sm:text-3xl font-bold p-4 sm:p-6 text-[#353535] tracking-wide">
          BITCOIN CONVERSION TABLE
        </h1>

        {/* EUR to BTC Conversion Header */}
        <div className="bg-[#4965D2] text-[#FFFFFF] p-4 sm:p-5 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {eurToBtcData.map((item) => (
            <div key={item.eur} className="text-center">
              <p className="text-sm sm:text-base text-[#EDEDED] font-semibold">
                {item.eur} EUR
              </p>
              <p className="text-s sm:text-s font-semibold mt-1">{item.btc}</p>
              <p className="text-s sm:text-s font-semibold">BTC</p>
            </div>
          ))}
        </div>

        {/* BTC to Currency Conversion List/Table */}
        <div className="divide-y-2 divide-[#EDEDED] mx-4 sm:mx-8">
          {btcToCurrencyData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 sm:p-4 text-sm sm:text-base hover:bg-gray-50 transition duration-150"
            >
              {/* Left Side: Conversion Description */}
              <div className="text-[#353535] text-sm sm:text-sm font-semibold ">
                1 Bitcoin (BTC) to {item.currency} ({item.code})
              </div>

              {/* Right Side: Converted Value */}
              <div className="font-medium text-right text-[#353535]">
                {item.code} {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitcoinConversionTable;
