import PropTypes from 'prop-types';

import ImageList from './ImageList';

function ImageGalleryCard({ gallery }) {
  return (
    <aside className="bg-white sm:w-3/4 rounded-lg shadow-lg p-4 sm:ml-4">
      <h2 className="text-2xl font-bold">Photos</h2>
      <p className="text-gray-600">
        You have <span className="font-bold">{gallery.length}</span> photos
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

      <ImageList gallery={gallery} />
    </aside>
  );
}

ImageGalleryCard.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default ImageGalleryCard;
