import React from 'react';

export default function LoginPage() {
  return (
    <nav className="flex justify-between items-center py-4 px-9 bg-[#FFFFFF]">
      {/* Left side: Logo */}
      <img src="/images/logo.png" alt="logo" />

      {/* Right side: Buttons */}
      <div className="flex gap-4 ml-auto">
        <button className="border border-[#4965D2] rounded-full px-6 py-1 text-[#4965D2] font-semibold">
          Log in
        </button>
        <button className="border border-[#4965D2] bg-[#4965D2] text-white rounded-full px-6 py-1 font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
}
