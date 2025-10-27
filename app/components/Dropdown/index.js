import React from 'react';
import Dropdown from 'react-multilevel-dropdown';

const MultiLevelDropdown = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Dropdown
        title="Menu"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {/* Level 1 */}
        <Dropdown.Item>Profile</Dropdown.Item>

        <Dropdown.Item>
          Settings
          {/* Level 2 */}
          <Dropdown.Submenu>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Security</Dropdown.Item>
            <Dropdown.Item>
              Advanced
              {/* Level 3 */}
              <Dropdown.Submenu>
                <Dropdown.Item>API Access</Dropdown.Item>
                <Dropdown.Item>Developer Mode</Dropdown.Item>
              </Dropdown.Submenu>
            </Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>

        <Dropdown.Item>
          Help
          <Dropdown.Submenu>
            <Dropdown.Item>FAQ</Dropdown.Item>
            <Dropdown.Item>Contact Support</Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>

        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default MultiLevelDropdown;
