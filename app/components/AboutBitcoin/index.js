import React from 'react';

const AboutBitcoin = () => {
  return (
    <div className="bg-[#4965D2] text-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-4xl font-bold mb-6">
          ABOUT <br /> BITCOIN (BTC)
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mt-2">
          Bitcoin is the most popular cryptocurrency, both in terms of
          mainstream awareness as well as buy and sell volume. It is based on an
          open-source technology and operates with no central authority. This
          means that nobody owns or controls the network, and everyone can take
          part. Bitcoin was conceived in 2008 by a person or group going by the
          name Satoshi Nakamoto, whose real identity is still unknown.
          Bitcoin&apos;s supply is limited to a fixed number of 21,000,000
          units.
        </p>
      </div>
    </div>
  );
};

export default AboutBitcoin;
