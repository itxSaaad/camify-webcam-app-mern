import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageListItem({ image, index }) {
  return (
    <>
      <img src={image} alt="Gallery" className="w-full" />
      {index === 5 && (
        <Link
          to="/gallery"
          className="absolute inset-0 flex items-center justify-center bg-indigo-500 bg-opacity-50 text-white text-lg font-medium transition duration-300 opacity-70 hover:opacity-100"
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
};

export default ImageListItem;
