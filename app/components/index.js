import React from 'react';
import loadable from '../utils/loadable';
import Loading from './Loading';

// Loading - No need to lazy load this component
export { default as Loading } from './Loading';
export { default as TopBar } from './TopBar';

export const Welcome = loadable(() => import('./Welcome'), {
  fallback: <Loading />,
});

export const Modal = loadable(() => import('./Modal'), {
  fallback: <Loading />,
});
export const Footer = loadable(() => import('./Footer'), {
  fallback: <Loading />,
});
export const Navbar = loadable(() => import('./Navbar'), {
  fallback: <Loading />,
});
export const Hero = loadable(() => import('./Hero'), {
  fallback: <Loading />,
});
export const Stats = loadable(() => import('./Stats'), {
  fallback: <Loading />,
});
export const CryptoPortfolio = loadable(() => import('./CryptoPortfolio'), {
  fallback: <Loading />,
});
export const FaqSection = loadable(() => import('./FaqSection'), {
  fallback: <Loading />,
});
export const CryptoInvestmentSection = loadable(
  () => import('./CryptoInvestmentSection'),
  {
    fallback: <Loading />,
  },
);
export const BitcoinLandingSection = loadable(
  () => import('./BitcoinLandingSection'),
  {
    fallback: <Loading />,
  },
);
export const CryptoResellerSection = loadable(
  () => import('./CryptoResellerSection'),
  {
    fallback: <Loading />,
  },
);
export const CryptoPurchasePage = loadable(
  () => import('./CryptoPurchasePage'),
  {
    fallback: <Loading />,
  },
);

export const LoginPage = loadable(() => import('./LoginPage'), {
  fallback: <Loading />,
});
export const LoginNav = loadable(() => import('./LoginNav'), {
  fallback: <Loading />,
});
export const SignupPage = loadable(() => import('./SignupPage'), {
  fallback: <Loading />,
});
export const SidebarNav = loadable(() => import('./SidebarNav'), {
  fallback: <Loading />,
});
export const Dropdown = loadable(() => import('./Dropdown'), {
  fallback: <Loading />,
});
export const TradingDashboard = loadable(() => import('./TradingDashboard'), {
  fallback: <Loading />,
});
