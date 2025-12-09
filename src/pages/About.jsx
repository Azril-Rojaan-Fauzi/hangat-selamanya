import AboutText from "../components/AboutText";
import Profile from "../components/Profile";

const About = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl overflow-hidden pt-24 md:pt-17">
      <div className="page-wrapper flex flex-col py-4 md:flex-row">
        <Profile />
        <AboutText />
      </div>
    </div>
  );
};

export default About;
