import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  RefreshCw,
  BookOpen,
  Search,
  Send,
  Volume2,
  Code,
  Grid,
  Gift,
  DollarSign,
  Zap,
  Menu,
  X,
} from 'lucide-react';

// --- Icon Helpers (Using lucide-react for consistency) ---
const BitcoinIcon = (props) => <RefreshCw {...props} />;
const NewsletterIcon = (props) => <BookOpen {...props} />;
const CMCLabsIcon = (props) => <Search {...props} />;
const TelegramBotIcon = (props) => <Send {...props} />;
const AdvertiseIcon = (props) => <Volume2 {...props} />;
const CryptoAPIIcon = (props) => <Code {...props} />;
const SiteWidgetsIcon = (props) => <Grid {...props} />;
const AirdropsIcon = (props) => <Gift {...props} />;
const DiamondRewardsIcon = (props) => <DollarSign {...props} />;
const LearnEarnIcon = (props) => <Zap {...props} />;

// --- Dropdown Item Component ---
// eslint-disable-next-line react/prop-types
const DropdownItem = ({ icon: Icon, label, color }) => (
  <a
    // eslint-disable-next-line react/prop-types
    href={`#${label.toLowerCase().replace(/ /g, '-')}`}
    className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
  >
    <div
      className="p-2 rounded-full"
      style={{ backgroundColor: color, opacity: 0.8 }}
    >
      <Icon size={20} color="white" />
    </div>
    <span className="font-medium">{label}</span>
  </a>
);

// --- Main Navigation Link Component ---
// eslint-disable-next-line react/prop-types
const MainNavItem = ({ label, href }) => (
  <a
    // eslint-disable-next-line react/prop-types
    href={href || `#${label.toLowerCase().replace(/ /g, '-')}`}
    className="block text-gray-700 font-semibold py-3 px-4 hover:bg-gray-100 transition duration-150 ease-in-out"
  >
    {label}
  </a>
);

// --- Main Sidebar Component ---
const SidebarNav = () => {
  // State for Product Dropdown visibility (managed by hover on desktop, click on mobile)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  // State for Mobile Sidebar visibility (for responsiveness)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const products = [
    { icon: BitcoinIcon, label: 'Converter', color: '#7B61FF' },
    { icon: NewsletterIcon, label: 'Newsletter', color: '#3B82F6' },
    { icon: CMCLabsIcon, label: 'CMC Labs', color: '#10B981' },
    { icon: TelegramBotIcon, label: 'Telegram Bot', color: '#3858dbff' },
    { icon: AdvertiseIcon, label: 'Advertise', color: '#2580efff' },
    { icon: CryptoAPIIcon, label: 'Crypto API', color: '#F59E0B' },
    { icon: SiteWidgetsIcon, label: 'Site Widgets', color: '#9CA3AF' },
  ];

  const campaigns = [
    { icon: AirdropsIcon, label: 'Airdrops', color: '#34D399' },
    { icon: DiamondRewardsIcon, label: 'Diamond Rewards', color: '#F97316' },
    { icon: LearnEarnIcon, label: 'Learn & Earn', color: '#3B82F6' },
  ];

  // --- Dropdown Content (Reusable structure) ---
  const DropdownContent = () => (
    <div className="p-3">
      {/* Products Section */}
      <p className="text-xs text-gray-500 font-semibold uppercase mb-2">
        Products
      </p>
      <div className="space-y-1">
        {products.map((item, index) => (
          <DropdownItem key={index} {...item} />
        ))}
      </div>

      {/* Campaigns Section */}
      <p className="text-xs text-gray-500 font-semibold uppercase mb-2 mt-4">
        Campaigns
      </p>
      <div className="space-y-1">
        {campaigns.map((item, index) => (
          <DropdownItem key={index} {...item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex font-sans min-h-screen bg-gray-50">
      {/* --- Mobile Menu Button (Fixed for mobile) --- */}
      <button
        className="lg:hidden p-3 border rounded-md m-4 bg-white shadow-md z-30 fixed top-0 left-0"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- Mobile Backdrop --- */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* --- Sidebar Container (Responsive) --- */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-xl
                  w-64 z-30 transition-transform duration-300 ease-in-out
                  ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                  lg:translate-x-0 lg:static lg:h-auto lg:shadow-none lg:w-64`}
      >
        <nav className="p-0 pt-16 lg:pt-0">
          {' '}
          {/* Add padding top for mobile button clearance */}
          <MainNavItem label="Community" />
          {/* --- 1. Mobile Products Toggle (Click/Tap) --- */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="flex justify-between items-center w-full text-gray-700 font-semibold py-3 px-4 hover:bg-gray-100 transition duration-150 ease-in-out"
            >
              <span>Products</span>
              {isProductsDropdownOpen ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isProductsDropdownOpen
                  ? 'max-h-[800px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <DropdownContent />
            </div>
          </div>
          {/* --- 2. Desktop Products Hover (lg: and up) --- */}
          <div
            className="hidden lg:block relative"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            {/* Desktop Products Trigger Button */}
            <button
              className="flex justify-between items-center w-full text-gray-700 font-semibold py-3 px-4 hover:bg-gray-100 transition duration-150 ease-in-out"
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)} // Click fallback for accessibility
            >
              <span>Products</span>
              {isProductsDropdownOpen ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </button>

            {/* Dropdown Content - Appears on Hover */}
            {isProductsDropdownOpen && (
              <div className="absolute left-full top-0 ml-1 bg-white border border-gray-200 rounded-lg shadow-xl py-4 px-3 w-72 z-40">
                <DropdownContent />
              </div>
            )}
          </div>
          {/* --- End Products Logic --- */}
          <MainNavItem label="CMC Launch" />
        </nav>
      </div>

      {/* --- Main Content Area --- */}
    </div>
  );
};

export default SidebarNav;
