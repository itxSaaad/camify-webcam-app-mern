import PropTypes from 'prop-types';

import ImageListItem from './ImageListItem';

function ImageList({ gallery }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
      {gallery.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <ImageListItem index={index} image={image} />
        </div>
      ))}
    </div>
  );
}

ImageList.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default ImageList;
