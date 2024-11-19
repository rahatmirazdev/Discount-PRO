import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import thinkingImage from "../../assets/thinking1.jpg";
import bg from "../../assets/bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="my-24 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-7 py-8 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:px-8" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
        <p className="text-lg text-white mb-4 opacity-65">
          We offer the best deals on your favorite brands, ensuring you save
          money on every purchase. Our platform is user-friendly and provides a
          seamless shopping experience. Join us and start saving today!
        </p>
        <ul className="text-white">
          <li className="mb-2 flex items-center gap-3">
            <FaCheck />
            Exclusive discounts on top brands
          </li>
          <li className="mb-2 flex items-center gap-3">
            <FaCheck />
            Easy-to-use platform
          </li>
          <li className="mb-2 flex items-center gap-3">
            <FaCheck />
            Secure and reliable
          </li>
          <li className="mb-2 flex items-center gap-3">
            <FaCheck />
            Excellent customer support
          </li>
        </ul>
      </div>
      <div className="w-full md:w-[500px] md:h-[500px]" data-aos="fade-left">
        <img
          src={thinkingImage}
          alt="Why Choose Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;