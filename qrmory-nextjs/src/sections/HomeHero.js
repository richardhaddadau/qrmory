const HomeHero = () => {
  return (
    <header className="py-40 flex flex-col justify-center items-center w-full min-h-fit bg-qrmory-purple-800 text-white">
      <div className="px-2 sm:px-6 w-full md:max-w-7xl text-center">
        <h1 className="font-header text-3xl sm:text-4xl lg:text-5xl hero-heading">
          Generate an <span>arsenal</span> of QR Codes
        </h1>

        <h3 className="mt-2 text-base sm:text-xl lg:text-2xl tracking-widest drop-shadow-lg">
          Be equipped for anything with QRmory
        </h3>

        <section className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="py-3 px-6 bg-white hover:bg-qrmory-purple-400 rounded text-qrmory-purple-800 hover:text-white font-bold shadow-lg shadow-qrmory-purple-900 hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
            Start Creating
          </button>

          <button className="py-3 px-6 border border-white hover:border-qrmory-purple-400 hover:bg-qrmory-purple-400 rounded text-white font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
            Learn More
          </button>
        </section>
      </div>
    </header>
  );
};

export default HomeHero;
