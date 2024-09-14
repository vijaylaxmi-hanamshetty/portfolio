export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="relative 
      py-10 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 bg-gray-900 text-white"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-start mb-8 lg:mb-0 lg:w-1/2">
          <p className="text-base md:text-lg font-semibold mb-2">
            Hey, I'm Vijaylaxmi
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-blue-500">Web</span> <br />
            Developer
          </h1>
          <p className="text-base md:text-md mb-6">
            A web developer builds and maintains websites, handling everything
            from designing the user interface and coding the site's
            functionality to ensuring it works across different devices and
            browsers.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get In Touch
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="./img/hero_img.png"
            alt="Hero Section"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
