const About = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper flex flex-col py-4 md:flex-row">
        <div className="px-6">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white p-2 md:p-3">
            <figure className="h-full">
              <img
                src="/assets/profile.jpg"
                alt=""
                className="aspect-3/2 h-full object-cover object-top"
              />
            </figure>
            <figcaption className="bottom-0 w-full bg-white p-2 text-black">
              <p className="font-secondary text-center text-base md:text-xl lg:text-2xl">
                Adhy Wicaksana Pratama
              </p>
              <p className="md text-center text-xs font-extralight lg:text-base">
                Photographer / Editor
              </p>
            </figcaption>
          </div>
        </div>

        <div className="flex h-full w-full flex-col justify-center px-6 md:gap-6">
          <h3 className="hidden text-center text-xs md:block md:text-start lg:text-base">
            | Who we are |
          </h3>
          <p className="py-3 text-center text-sm/8 font-light md:text-start lg:text-2xl/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            perspiciatis doloribus voluptatem quod corrupti quia labore incidunt
            tempore dolorum officia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
