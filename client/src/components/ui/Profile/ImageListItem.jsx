import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageListItem({ image, index, totalImages }) {
  return (
    <>
      <Link to={`/gallery/${image._id}`}>
        <img
          src={image}
          alt="Gallery"
          className="p-1 rounded-lg border-2 border-transparent hover:border-indigo-500"
        />
      </Link>
      {index === 5 && totalImages > 6 && (
        <Link
          to="/gallery"
          className="absolute inset-0 flex items-center justify-center bg-indigo-500 text-white text-lg rounded-lg bg-opacity-40 hover:bg-opacity-70"
        >
          See More
        </Link>
      )}
    </>
  );
}

ImageListItem.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
};

export default ImageListItem;
