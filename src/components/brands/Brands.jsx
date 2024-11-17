import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaStar } from "react-icons/fa";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/coupons.json")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCoupons = (brandId) => {
    if (user) {
      navigate(`/brand/${brandId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Brands</h1>
      <input
        type="text"
        placeholder="Search brands..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 mb-8 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 gap-8">
        {filteredBrands.map((brand) => (
          <div key={brand._id} className="bg-[#e6e6e6] shadow-sm rounded-tr-3xl rounded-bl-3xl p-8">
            <div className="mb-4">
              <img src={brand.brand_logo} alt={brand.brand_name} className="h-16 w-auto m-4 ml-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{brand.brand_name}</h2>
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
                <span className="text-red-500 font-extrabold mr-4 animate-bounce">Sale is on!</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;