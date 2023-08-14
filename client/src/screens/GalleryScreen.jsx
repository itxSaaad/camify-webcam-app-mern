import { Link } from 'react-router-dom';

function GalleryScreen() {
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
      <div className="bg-white w-11/12 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold">Your Media</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4">
          {gallery.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Link
                to={`/gallery/${image._id}`}
                className="p-1 border-2 border-transparent hover:border-indigo-500"
              >
                <img src={image} alt="Gallery" className="w-full" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryScreen;
