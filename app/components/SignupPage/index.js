/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// Custom Checkbox Component for better styling
// eslint-disable-next-line no-unused-vars
const CustomCheckbox = ({ id, label, checked, onChange }) => (
  <div className="flex items-start mb-4">
    <div className="flex items-center h-5">
      <input
        id={id}
        aria-describedby={id}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={checked}
        onChange={onChange}
      />
    </div>
    <div className="ml-3 text-sm">
      <label
        htmlFor={id}
        className="font-light text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  </div>
);

// Toggle Switch Component
const ToggleSwitch = ({ id, checked, onChange, label, className = '' }) => (
  <div className={`flex items-center justify-between ${className}`}>
    <span className="text-sm font-light text-gray-700 w-3/4">{label}</span>
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        name={id} // Added name for state handling
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  </div>
);
const SignupPage = () => {
  // State for form data (optional, but good practice for a React form)
  const [formData, setFormData] = useState({
    firstName: 'FIRST NAME',
    lastName: 'LAST NAME',
    email: 'abc@gmail.com', // Pre-filled for demo
    password: '******', // Pre-filled for demo
    phoneCountryCode: 'IN',
    phoneNumber: 'XXXXXXXXXX', // Pre-filled for demo
    countryOfResidence: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  const isFormValid = formData.ownBehalfConfirm; // Only main agreement required for button active state

  return (
    <section className="bg-[#FFFFFF] text-white py-20 px-40 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-lg bg-[#FFFFFF] p-6 sm:p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center text-[#353535] mb-6">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#353535]"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*****"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-[#4965D2] text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                required
                // NOTE: Password fields should typically be empty/blank
                // and the value shown as '******' is for visual reference
              />

              {/* Password strength visual indicator (dummy) */}
              <div className="mt-2 flex space-x-1">
                <div className="h-1 flex-1 bg-red-500 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone no
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                {/* Country Code Dropdown */}
                <select
                  id="phoneCountryCode"
                  name="phoneCountryCode"
                  value={formData.phoneCountryCode}
                  onChange={handleChange}
                  className="py-2 pl-3 pr-2 border border-gray-300 bg-white rounded-l-md focus:outline-none focus:ring-blue-500 text-[#ACAAAA] focus:border-blue-500 sm:text-sm transition duration-150"
                >
                  <option value="IN">In</option>
                  <option value="CN">CN</option>
                  <option value="AM">AM</option>
                  <option value="BR">BR</option>
                  <option value="AT">AT</option>
                  {/* You'd typically map a list of countries here */}
                </select>
                {/* <div className="flex items-center p-3 text-gray-500 border-r border-gray-300 bg-gray-50 rounded-l-lg">
                  <span className="mr-1">In</span>
                  <span className="ml-2 font-medium text-gray-700">+91</span>
                </div> */}
                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="XXXXXXXXXX"
                  className="flex-1 block w-full px-3 py-2 border-t border-r border-b border-gray-300 rounded-r-md placeholder-gray-400 text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                  required
                />
              </div>
            </div>
            {/* Country of Residence */}
            <div>
              <label
                htmlFor="countryOfResidence"
                className="block text-sm font-medium text-gray-700"
              >
                Country of residence
              </label>
              <input
                type="text"
                id="countryOfResidence"
                name="countryOfResidence"
                value={formData.countryOfResidence}
                onChange={handleChange}
                placeholder="Country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-[#ACAAAA] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
                required
              />
            </div>
            {/* Footer link */}
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#4965D2] hover:text-blue-500 transition duration-150"
              >
                Can't find your country of residence?
              </a>
            </div>
            {/* Submit Button (Optional - not in screenshot but necessary) */}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4965D2] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 mt-8"
            >
              Sign Up
            </button>

            {/* end of the singup section */}

            <hr className="my-6 border-gray-200" />

            {/* Toggles */}
            <div className="space-y-4 ">
              {/* News Toggle 2*/}
              <ToggleSwitch
                id="newsToggle"
                checked={formData.newsToggle}
                onChange={handleChange}
                label={
                  <>
                    <span className="text-black font-bold">
                      Don't miss a beat! Be the first to hear about the latest
                      news, opportunities and our new products & features.
                    </span>
                  </>
                }
              />
              {/* Risk Acknowledgment Toggle */}
              <ToggleSwitch
                id="riskToggle"
                checked={formData.riskToggle}
                onChange={handleChange}
                label={
                  <>
                    <span className="text-black font-bold">
                      I have read and agree to the{' '}
                    </span>
                    <a
                      href="#"
                      className="text-[#4965D2] font-bold hover:underline"
                    >
                      User Agreement
                    </a>
                    <span className="text-black font-bold">
                      , as well as the product terms related{' '}
                    </span>
                    <a
                      href="#"
                      className="text-[#4965D2] font-bold hover:underline"
                    >
                      E-Token, Payment Services, Financial Service, M-Credit,
                      Index, Savings Plan, Loyalty Programs and Staking
                    </a>
                    <span className="text-black font-bold">
                      , including how staking rewards are distributed.
                    </span>
                  </>
                }
              />
            </div>

            <div className="text-sm mt-4 space-y-3">
              {/* Risk Disclosure */}
              <p className="text-[#353535] font-bold">
                Transactions in crypto-assets involve specific risks, including
                market volatility, and potential loss of capital. To fully
                understand the risks associated with these transactions, review
                the{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Risk Disclosure
                </a>
                .
              </p>

              {/* Confirmation Checkbox (Using a standard input to mimic the image) */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="ownBehalfConfirm"
                  id="ownBehalfConfirm"
                  checked={formData.ownBehalfConfirm}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="ownBehalfConfirm"
                  className="ml-2 text-sm text-[#353535] font-bold"
                >
                  I confirm that I'm acting under my own name and on my own
                  behalf and I consent to receive all communications
                  electronically from Crypto Global.
                </label>
              </div>

              {/* Privacy Notice */}
              <p className="text-[#353535] font-bold pt-2 text-xs">
                Your personal data will be processed in accordance with the{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Crypto Group Privacy Notice Global
                </a>{' '}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                ></a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors ${
                  isFormValid
                    ? 'bg-[#4965D2] hover:bg-blue-700 focus:ring-4 focus:ring-[#4965D2]'
                    : 'bg-[#4965D2] cursor-not-allowed'
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                className="w-full text-[#4965D2] bg-[#FFFFFF] border-2 border-[#4965D2] hover:bg-blue-50 focus:ring-4 focus:ring-[#4965D2] font-medium rounded-lg text-sm px-5 py-2.5 transition-colors"
                onClick={() => console.log('Already have an account clicked')}
              >
                Already have an account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative mt-10 md:mt-0">
        <img
          src="/images/heroImage.png"
          alt="crypto"
          className="mb-12 rounded-lg ml-20 object-cover mb-20 w-[700px]"
        />
      </div>
    </section>
  );
};

export default SignupPage;
