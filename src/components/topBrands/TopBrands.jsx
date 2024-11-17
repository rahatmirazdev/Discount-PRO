import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const TopBrands = () => {
  const [brandLogos, setBrandLogos] = useState([]);

  useEffect(() => {
    fetch("/coupons.json")
      .then((response) => response.json())
      .then((data) => setBrandLogos(data));
  }, []);

  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Top Brands</h2>
      <Marquee pauseOnHover={true} gradient={false}>
        {brandLogos.map((brand) => (
          <NavLink key={brand._id} to={`/brand/${brand._id}`} className="mx-7">
            <img src={brand.brand_logo} alt={brand.brand_name} className="h-8 w-auto mx-8" />
          </NavLink>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;