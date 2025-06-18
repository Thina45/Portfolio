import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start"></div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              href={socialImg.url}
              className="icon"
              target="_blank"
              key={socialImg.url}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Thinakaran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
