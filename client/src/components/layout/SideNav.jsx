import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../ui/Button.jsx';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = true;
  const latestImage = 'https://picsum.photos/200/300';
  const userAvatar = 'https://avatars.dicebear.com/api/avataaars/1.svg';
  const userName = 'Jane Doe';

  return (
    <>
      <aside
        className={`fixed top-0 right-0 flex flex-col justify-between items-center h-full w-40 bg-gray-700 text-gray-200 p-4 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <Link to="/" className="flex items-center text-2xl font-bold mb-6">
            <h1>
              Camify <span className="text-sm text-gray-400">v1.0</span>
            </h1>
          </Link>
        </div>

        {isLoggedIn && (
          <div className="flex items-center mb-6">
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-xl font-semibold">{userName}</p>
          </div>
        )}

        <div className="flex flex-col w-full text-center">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="rounded-sm p-1 bg-gray-600 border-2 border-transparent hover:bg-gray-800 hover:border-gray-500 m-1"
              >
                Profile
              </Link>
              <Link
                to="/"
                className="rounded-sm p-1 bg-gray-600 border-2 border-transparent hover:bg-gray-800 hover:border-gray-500 m-1"
              >
                New Click
              </Link>
              <Button className="bg-gray-900 border-2 border-transparent hover:bg-gray-800 hover:border-gray-500 m-1 rounded-md">
                Logout
              </Button>
            </>
          ) : (
            <Button variant="primary" className="rounded-md block mb-6">
              Login / Register
            </Button>
          )}
        </div>

        {isLoggedIn && (
          <Link
            to="/gallery"
            className="block mb-6 rounded-md p-1 border-2 border-transparent hover:border-gray-500"
          >
            <img
              src={latestImage}
              alt="Latest Capture"
              className="w-24 h-24 object-cover rounded-md"
            />
          </Link>
        )}
      </aside>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-0 ${
          isOpen ? 'right-40' : 'right-0'
        } border-2 border-indigo-800 border-r-0 p-4 transition-all duration-300 transform rounded-l-full`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        )}
      </Button>
    </>
  );
};

export default SideNav;
