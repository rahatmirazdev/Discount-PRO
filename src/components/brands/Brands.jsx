import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SingleBrand from "./SingleBrand";
import bg from "../../assets/stacked-waves-haikei.svg";

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
          <SingleBrand key={brand._id} brand={{ ...brand, bg }} handleViewCoupons={handleViewCoupons} />
        ))}
      </div>
    </div>
  );
};

export default Brands;