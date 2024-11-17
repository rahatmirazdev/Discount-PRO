import { FaGithub, FaLinkedin } from "react-icons/fa";
import bg from "../../assets/bg.svg";

const Footer = () => {
  return (
    <div
      className="bg-gray-800 text-white py-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2023 Your Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/rahatmirazdev" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rahatahmedmiraz/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;