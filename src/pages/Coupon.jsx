import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Coupon = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    fetch("/coupons.json")
      .then((response) => response.json())
      .then((data) => {
        const brandData = data.find((brand) => brand._id === id);
        setBrand(brandData);
      });
  }, [id]);

  if (!user) {
    navigate("/login");
    return null;
  }

  if (!brand) {
    return <div>Loading...</div>;
  }

  const handleCopy = (code) => {
    toast.success(`Copied ${code} to clipboard!`);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <div className="text-center mb-8">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="h-16 w-auto mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">{brand.brand_name}</h1>
        <div className="flex justify-center items-center text-yellow-500">
          <span className="text-2xl">{brand.rating}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brand.coupons.map((coupon) => (
          <div
            key={coupon.coupon_code}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {coupon.coupon_code}
            </h2>
            <p className="text-gray-600 mb-2">{coupon.description}</p>
            <p className="text-gray-600 mb-2">Expires: {coupon.expiry_date}</p>
            <p className="text-gray-600 mb-2">Condition: {coupon.condition}</p>
            <div className="flex justify-between items-center mt-4">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <button className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none">
                  Copy Code
                </button>
              </CopyToClipboard>
              <button
                className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none"
                onClick={() => window.open(brand.shop_link, "_blank")}
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Coupon;
