const Footer = () => {
  return (
    <div className="flex justify-between pt-10">
      <a
        target="_blank"
        href="https://www.instagram.com/hangatselamanya/"
        rel="noopener noreferrer"
      >
        <button className="cursor-pointer text-xs uppercase md:text-base">
          instagram
        </button>
      </a>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=6281398301813&text&type=phone_number&app_absent=0&utm_source=ig"
        rel="noopener noreferrer"
      >
        <button className="cursor-pointer text-xs uppercase md:text-base">
          book now
        </button>
      </a>
    </div>
  );
};

export default Footer;
