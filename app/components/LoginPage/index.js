/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

// The main component representing the Login/Contact Form card
const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'abc@gmail.com',
    phone: 'XXXXXXXXXX',
    message: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your actual form submission logic here (e.g., API call)
  };

  // Helper Component for a standard input field
  const InputField = ({
    label,
    name,
    placeholder,
    value,
    onChange,
    type = 'text',
    fullWidth = false,
  }) => (
    <div className={fullWidth ? 'w-full' : 'flex-1'}>
      <label
        htmlFor={name}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-[#4965D2] transition duration-150 ease-in-out text-base"
      />
    </div>
  );

  // Helper Component for the complex phone number input
  const PhoneNumberInput = ({ value, onChange }) => (
    <div className="w-full">
      <label
        htmlFor="phone"
        className="block font-sans text-s font-bold text-gray-700 mb-1"
      >
        Phone number
      </label>
      <div className="flex mt-1 border border-#4965D2-300 rounded-lg shadow-sm focus-within:ring-indigo-500 focus-within:border-indigo-500">
        {/* Country Code Dropdown Lookalike */}
        <div className="flex items-center p-3 text-gray-500 border-r border-gray-300 bg-gray-50 rounded-l-lg">
          <span className="mr-1">In</span>
          <ChevronDown size={16} className="text-gray-400" />
          <span className="ml-2 font-medium text-gray-700">+91</span>
        </div>
        {/* Input Field */}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="XXXXXXXXXX"
          value={value}
          onChange={onChange}
          className="flex-1 block w-full px-4 py-3 rounded-r-lg focus:ring-0 focus:border-0 border-none bg-white text-base"
        />
      </div>
    </div>
  );

  return (
    <>
      <section className="bg-[#FFFFFF] text-white py-20 px-40 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
          {/* Standalone Card Container */}
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Content Area */}
            <div className="p-6 sm:p-10 lg:p-16">
              <header className="mb-8">
                <p className="text-lg font-sans font-bold text-[#4965D2] text-center uppercase tracking-wider mb-2">
                  Welcome
                </p>
                <h1 className="text-3xl font-sans font-bold text-center text-[#101828]">
                  Log in
                </h1>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="flex flex-col font-sans text-[#667085] sm:flex-row gap-6">
                  <InputField
                    label="First name"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Last name"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col font-sans text-[#667085] sm:flex-row gap-6">
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col font-sans text-[#667085] sm:flex-row gap-6">
                  <PhoneNumberInput
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* Message (Textarea) */}
                <div className="w-8">
                  <label
                    htmlFor="message"
                    className="font-sans text-sm font-bold text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 w-fh-full focus:border-indigo-500 transition duration-150 ease-in-out text-base"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-center pt-2">
                  <div
                    className={`w-5 h-5 rounded-md border-2 transition-all duration-150 ease-in-out cursor-pointer flex items-center justify-center ${
                      formData.agreed
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'border-gray-300 bg-white'
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, agreed: !prev.agreed }))
                    }
                  >
                    {formData.agreed && (
                      <Check size={14} className="text-white" />
                    )}
                  </div>
                  <label
                    htmlFor="agreed"
                    className="ml-3 font-sans text-s text-[#667085]"
                  >
                    You agree to our friendly
                    <a
                      href="#"
                      className="text-[#4965D2] font-sans hover:text-indigo-700 font-medium"
                    >
                      <u>privacy policy.</u>
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full ml-2 mt-8 px-40 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>{/* login code */}</div>
        <div className="relative mt-10 md:mt-0">
          <img
            src="/images/heroImage.png"
            alt="crypto"
            className="mb-12 rounded-lg ml-20 object-cover mb-20 w-[700px]"
          />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
