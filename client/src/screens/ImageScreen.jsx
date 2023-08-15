import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import Button from '../components/ui/Button';

function ImageScreen() {
  const image = 'https://picsum.photos/300/200';

  return (
    <section className="bg-indigo-500 flex flex-col justify-center items-center min-h-screen p-10">
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
    </section>
  );
}

export default ImageScreen;
