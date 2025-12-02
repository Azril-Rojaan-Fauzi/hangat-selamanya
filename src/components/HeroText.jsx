import { useEffect, useState } from "react";

const HeroText = () => {
  const texts = ["hangat", "selamanya", "visual"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-full w-full px-6 md:px-0">
      <div className="relative flex h-full flex-col items-center justify-center gap-6">
        <h1 className="z-10 text-center text-5xl font-bold text-yellow-300 uppercase lg:text-8xl">
          {texts[index]}
        </h1>
        <div className="absolute bottom-10">
          <p className="text-center text-xs font-light text-yellow-300">
            For anyone who wants their warmest moments to last forever
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
