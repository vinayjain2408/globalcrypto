import { LoginNav, SignupPage } from '@/components';
import MultiLevelDropdown from '@/components/Dropdown';
import React from 'react';

function index() {
  return (
    <div>
      <LoginNav />
      <SignupPage />
      <MultiLevelDropdown />
    </div>
  );
}

export default index;
