import { useSelector } from 'react-redux';

import Loader from '../Loader';
import Message from '../Message';

import ImageList from './ImageList';

function ImageGalleryCard() {
  const capture = useSelector((state) => state.capture);
  const { loading, captureListError, captureList } = capture;

  let latestImage = '';
  if (captureList && captureList.length > 0) {
    latestImage = captureList[captureList.length - 1];
  }
  return (
    <aside className="bg-white w-full sm:w-3/4 rounded-lg shadow-lg p-4 sm:ml-4">
      <h2 className="text-2xl font-bold">Photos</h2>
      <p className="text-gray-600">
        You have <span className="font-bold">{captureList.length}</span> photos
      </p>

      {captureListError && <Message>{captureListError}</Message>}

      {loading ? (
        <Loader />
      ) : captureList.length === 0 ? (
        <div className="flex flex-col justify-center items-center border-y-2 border-y-indigo-700 p-2 mt-4">
          <h2 className="text-2xl font-bold">No Media</h2>
          <p className="text-lg text-gray-500">
            You have not captured any media yet.
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 break-all">
            Your latest photo is{' '}
            <span className="font-bold">
              <a
                href={latestImage.imageUrl}
                className="text-indigo-500 hover:text-indigo-600"
              >
                {latestImage.imageUrl}
              </a>
            </span>
          </p>

          <ImageList gallery={captureList} />
        </>
      )}
    </aside>
  );
}

export default ImageGalleryCard;
