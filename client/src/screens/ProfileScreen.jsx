import React from 'react';

import { Link } from 'react-router-dom';
function ProfileScreen() {
  const userAvatar = 'https://avatars.dicebear.com/api/avataaars/1.svg';
  const userName = 'Jane Doe';

  const gallery = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
  ];
  return (
    <section className="bg-indigo-500 flex flex-row justify-center items-center h-screen p-10">
      <aside className="bg-white h-full w-1/4 flex flex-col items-center justify-center rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold">Your Profile</h2>
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full"
        />

        <p className="text-gray-600">
          Welcome back, <span className="font-bold">{userName}</span>
        </p>
        <p className="text-gray-600">
          Your email is{' '}
          <span className="font-bold">
            <a
              href="mailto:jane@example.com"
              className="text-indigo-500 hover:text-indigo-600"
            >
              jane@example.com
            </a>
          </span>
        </p>
      </aside>

      <aside className="bg-white w-3/4 rounded-lg shadow-lg p-4 ml-4">
        <h2 className="text-2xl font-bold">Photos</h2>
        <p className="text-gray-600">
          You have <span className="font-bold">10</span> photos
        </p>
        <p className="text-gray-600">
          Your latest photo is{' '}
          <span className="font-bold">
            <a
              href="https://picsum.photos/200/300"
              className="text-indigo-500 hover:text-indigo-600"
            >
              https://picsum.photos/200/300
            </a>
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {gallery.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img src={image} alt="Gallery" className="w-full" />
              {index === 5 && (
                <Link
                  to="/gallery"
                  className="absolute inset-0 flex items-center justify-center bg-indigo-500 bg-opacity-50 text-white text-lg font-medium transition duration-300 opacity-70 hover:opacity-100"
                >
                  See More
                </Link>
              )}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default ProfileScreen;
