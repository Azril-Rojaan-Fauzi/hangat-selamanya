import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between pt-10">
      <Link>
        <button className="cursor-pointer text-xs uppercase md:text-base">
          instagram
        </button>
      </Link>
      <Link>
        <button className="cursor-pointer text-xs uppercase md:text-base">
          book now
        </button>
      </Link>
    </div>
  );
};

export default Footer;
