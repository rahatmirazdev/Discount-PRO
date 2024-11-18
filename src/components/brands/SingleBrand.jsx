import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const SingleBrand = ({ brand, handleViewCoupons }) => {
  return (
    <div
      className="bg-[#e6e6e6] shadow-sm rounded-tr-3xl rounded-bl-3xl p-8"
      style={{
        backgroundImage: `url(${brand.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-4">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="h-16 w-auto m-4 ml-0"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {brand.brand_name}
          </h2>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span>{brand.rating}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{brand.description}</p>
      <div className="flex justify-between items-center">
        <button
          className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none"
          onClick={() => handleViewCoupons(brand._id)}
        >
          View Coupons
        </button>
        {brand.isSaleOn && (
          <span className="text-red-500 font-extrabold mr-4 animate-bounce">
            Sale is on!
          </span>
        )}
      </div>
    </div>
  );
};
SingleBrand.propTypes = {
  brand: PropTypes.shape({
    bg: PropTypes.string,
    brand_logo: PropTypes.string,
    brand_name: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    _id: PropTypes.string,
    isSaleOn: PropTypes.bool,
  }).isRequired,
  handleViewCoupons: PropTypes.func.isRequired,
};

export default SingleBrand;
