import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AuthModal from '../components/ui/Auth/AuthModal';

function GalleryScreen() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const gallery = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/200',
  ];
  return (
    <section className="bg-indigo-500 flex flex-col justify-center items-center min-h-screen p-10">
      {userInfo ? (
        <div className="bg-white w-11/12 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold">Your Media</h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <Link to={`/gallery/${image._id}`}>
                  <img
                    src={image}
                    alt="Gallery"
                    className="p-1 rounded-lg border-2 border-transparent hover:border-indigo-500"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <AuthModal
          onClose={() => {
            setIsAuthModalOpen(false);
            navigate('/');
          }}
        />
      )}
    </section>
  );
}

export default GalleryScreen;
