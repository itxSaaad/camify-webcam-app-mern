function ImageScreen() {
  const image = 'https://picsum.photos/300/200';
  return (
    <section className="bg-indigo-500 flex flex-col justify-center items-center min-h-screen p-10">
      <div className="bg-white w-11/12 flex flex-row justify-between items-center rounded-lg shadow-lg p-4">
        <aside className="w-1/4 border-r-2 border-r-indigo-600 h-full">
          <h1 className="text-2xl">Edit Photo</h1>
        </aside>
        <main className="w-3/4">
          <img src={image} className="w-full" />
        </main>
      </div>
    </section>
  );
}

export default ImageScreen;
