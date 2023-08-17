import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AuthModal from '../components/ui/Auth/AuthModal';
import Loader from '../components/ui/Loader';
import Message from '../components/ui/Message';

import { getCaptureById } from '../redux/thunks/captureThunks';

function GalleryScreen() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const capture = useSelector((state) => state.capture);
  const { loading, captureListError, captureList } = capture;

  return (
    <section className="bg-indigo-500 flex flex-col justify-center items-center min-h-screen p-10">
      {userInfo ? (
        loading ? (
          <Loader />
        ) : (
          <div className="bg-white w-11/12 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold">Your Media</h2>

            {captureListError && <Message>{captureListError}</Message>}

            {captureList.length === 0 ? (
              <div className="flex flex-col justify-center items-center border-y-2 border-y-indigo-700 p-2 mt-4">
                <h2 className="text-2xl font-bold">No Media</h2>
                <p className="text-lg text-gray-500">
                  You have not captured any media yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
                {captureList.map((image) => (
                  <div
                    key={image._id}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <Link to={`/gallery/${image._id}`}>
                      <img
                        src={image.imageUrl}
                        alt="Gallery"
                        className="p-1 rounded-lg border-2 border-transparent hover:border-indigo-500"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
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
