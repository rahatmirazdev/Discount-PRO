import { useState, useEffect } from "react";
import myImage from "../assets/rahat.png";
import bg from "../assets/stacked-waves-haikei.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDev = () => {
  const [activeCategory, setActiveCategory] = useState("education");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderContent = () => {
    switch (activeCategory) {
      case "education":
        return <Education />;
      case "socialLinks":
        return <SocialLinks />;
      case "collegeInfo":
        return <CollegeInfo />;
      default:
        return <Education />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto px-4 py-8 gap-4">
      <div
        className="w-full md:w-1/4 p-4 bg-[#1B263B] text-white rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-right"
      >
        
        <img
          src={myImage}
          alt="Rahat Ahmed Miraz"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-indigo-600/100 p-1"
        />
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Rahat Ahmed Miraz
        </h2>
        <p className="text-center text-black mb-4">rahatmiraz.dev@gmail.com</p>
        <hr className="border-gray-500 mb-4" />
        <div className="flex flex-col space-y-2">
          <button
            className={`btn hover:bg-black hover:text-white text-black ${
              activeCategory === "socialLinks"
                ? "bg-[#1B263B] text-white"
                : "bg-transparent"
            }`}
            onClick={() => setActiveCategory("socialLinks")}
          >
            Programming Hero
          </button>
          <button
            className={`btn hover:bg-black hover:text-white text-black ${
              activeCategory === "education"
                ? "bg-[#1B263B] text-white"
                : "bg-transparent"
            }`}
            onClick={() => setActiveCategory("education")}
          >
            Education
          </button>
          <button
            className={`btn hover:bg-black hover:text-white text-black ${
              activeCategory === "collegeInfo"
                ? "bg-[#1B263B] text-white"
                : "bg-transparent"
            }`}
            onClick={() => setActiveCategory("collegeInfo")}
          >
            Acquired Skills
          </button>
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md" data-aos="fade-left">
        {renderContent()}
      </div>
    </div>
  );
};

const Education = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-[#1B263B]">Education</h2>
    <p className="text-gray-700 pl-7">
      Styding Diploma in Electronics Engineering at{" "}
      <b>Sylhet Polytechnic Institute</b>.
    </p>
  </div>
);

const SocialLinks = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-[#1B263B]">
      Batch info in Programming Hero
    </h2>
    <p className="text-gray-700 pl-7">
      Student ID is <b>WEB10-2168</b>.
    </p>
  </div>
);

const CollegeInfo = () => (
  <div className="">
    <h2 className="text-2xl font-bold mb-4 text-[#1B263B]">
      Already Acquired Skills Below
    </h2>
    <ul className="pl-9 list-disc text-gray-700 space-y-2">
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        HTML
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        CSS
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        JavaScript
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        React
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        Git
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        GitHub
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        Netlify
      </li>
      <li className="hover:text-[#1B263B] transition-colors duration-300">
        Stripe
      </li>
    </ul>
    <p className="text-gray-700 mt-4">
      And also explored some other technologies like Bootstrap, Tailwind CSS,
      Firebase, Next.js, etc.
    </p>
  </div>
);

export default AboutDev;