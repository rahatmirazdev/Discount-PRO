import Banner from "../components/banner/Banner";
import BrandsOnSell from "../components/BrandsOnSell/BrandsOnSell";
import CustomerTestimonials from "../components/CustomerTestimonials/CustomerTestimonials";
import WhyChooseUs from "../components/whyChoseUs/WhyChoseUs";
import TopBrands from "../components/topBrands/TopBrands";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 overflow-x-hidden">
      <Banner />
      <TopBrands />
      <BrandsOnSell />
      <WhyChooseUs />
      <CustomerTestimonials />
    </div>
  );
};

export default Home;
