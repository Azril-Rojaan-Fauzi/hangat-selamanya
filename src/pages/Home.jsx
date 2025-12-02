import HeroText from "../components/HeroText";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <video
        src="/assets/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="flex h-screen flex-col-reverse md:flex-row md:px-6">
        <HeroText />
      </div>
    </div>
  );
};

export default Home;
