import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AuthModal from '../components/ui/Auth/AuthModal';
import Button from '../components/ui/Button';

function ImageScreen() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const image = 'https://picsum.photos/300/200';

  return (
    <section className="bg-indigo-500 flex flex-col justify-center items-center min-h-screen p-10">
      {userInfo ? (
        <>
          <Link to={'/gallery'}>
            <Button
              variant="outline"
              type="button"
              className="mb-4 rounded-lg shadow-lg flex flex-row items-center"
            >
              <IoIosArrowBack />
              Back
            </Button>
          </Link>
          <div className="bg-white flex flex-col items-center rounded-lg shadow-lg p-2">
            <img src={image} alt="Captured" className="rounded-lg" />
          </div>
        </>
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

export default ImageScreen;
