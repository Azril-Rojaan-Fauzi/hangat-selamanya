import profile from "../assets/hangat-selamanya.jpeg";

const About = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper flex flex-col py-4 md:flex-row">
        <div className="px-6">
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:py-10">
            <figure className="relative h-full">
              <img
                src={profile}
                alt=""
                className="h-full rounded-md object-cover"
              />
              <figcaption className="text-primary absolute bottom-0 w-full rounded-b-md bg-black p-2">
                <p className="font-secondary text-center text-base md:text-xl lg:text-2xl">
                  Adhy Wicaksana Pratama
                </p>
                <p className="md text-center text-xs font-extralight lg:text-base">
                  Photographer / Editor
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="flex h-full w-full flex-col justify-center px-6 md:gap-6">
          <h3 className="text-center text-xs md:block md:text-start lg:text-base">
            - Who we are -
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
