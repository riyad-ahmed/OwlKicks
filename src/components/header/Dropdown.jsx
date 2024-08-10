// src/components/header/Dropdown.jsx
import { Menu } from '@headlessui/react';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dropdown({ handleLogOut }) {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center space-x-2">
              <CiUser className="text-2xl ml-3" />
            </Menu.Button>

            {open && (
              <Menu.Items
                static
                className="absolute right-0 mt-4 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/MyProfile"
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        My Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/account"
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Login/SignUp
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogOut}
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

export default Dropdown;
