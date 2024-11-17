import { useEffect, useState } from "react";

const BrandsOnSell = () => {
  const [brandsOnSale, setBrandsOnSale] = useState([]);

  useEffect(() => {
    fetch("/coupons.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredBrands = data.filter(brand => brand.isSaleOn);
        setBrandsOnSale(filteredBrands);
      });
  }, []);

  return (
    <div className="my-24 max-w-[1440px] mx-auto px-2 my-24">
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-8">Brands on Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brandsOnSale.map((brand) => (
          <div key={brand._id} className="bg-white shadow-md rounded-lg p-4">
            <img src={brand.brand_logo} alt={brand.brand_name} className="h-16 w-auto mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{brand.brand_name}</h3>
            <p className="text-gray-600 mb-2">Category: {brand.category}</p>
            <p className="text-gray-600">Total Coupons: {brand.coupons.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;