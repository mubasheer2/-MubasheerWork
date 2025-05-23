import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://www.instagram.com/iam_skmubbi/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/mubasheer-shaikh-00b1992b4", icon: <FaLinkedinIn /> },
  { href: "https://github.com/mubasheer2", icon: <FaGithub/> },
  { href: "https://api.whatsapp.com/send?phone=917738514592", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;