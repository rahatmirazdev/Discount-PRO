import { useEffect, useState } from "react";
import bannerImgOne from "../../assets/banner/1.png";
import bannerImgTwo from "../../assets/banner/2.png";
import bannerImgThree from "../../assets/banner/3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [bannerImgOne, bannerImgTwo, bannerImgThree];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-[1440px] mx-auto px-2 overflow-hidden my-24">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-9">
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Grabe the <span className="text-[#0e52d1]">best deals</span> <br />
            right now!
          </h1>
          <p className="text-lg text-gray-600">
            You can find the best deals on your favorite brands here. We have
            the best deals on the internet. Dont miss out!
          </p>
          <Link to="/brands" className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none mt-4">
            Grabe the deal
          </Link>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
