import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahat Ahmed",
      feedback:
        "I saved a lot on my electronics purchase with the Amazon coupon!",
      photo:
        "https://static.vecteezy.com/system/resources/previews/035/593/770/large_2x/ai-generated-happy-boy-with-school-uniform-ai-generative-free-png.png",
    },
    {
      id: 2,
      name: "Tasnim Ahmed",
      feedback: "The Nike coupon gave me a great discount on running shoes.",
      photo:
        "https://static.vecteezy.com/system/resources/previews/022/484/239/large_2x/fashionable-3d-boy-with-backpack-ideal-for-back-to-school-or-student-designs-transparent-background-free-png.png",
    },
    {
      id: 3,
      name: "Toa Jannat",
      feedback: "I got free delivery on my Uber Eats order using their coupon.",
      photo:
        "https://static.vecteezy.com/system/resources/previews/022/483/785/large_2x/up-up-and-away-with-our-3d-cute-pilot-girl-character-transparent-background-free-png.png",
    },
    {
      id: 4,
      name: "Sabiha Tasnim",
      feedback: "The H&M coupon helped me save 20% on my winter collection.",
      photo:
        "https://static.vecteezy.com/system/resources/previews/022/483/682/large_2x/our-3d-pilot-girl-character-is-ready-for-adventure-transparent-background-free-png.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="my-24">
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        Customer Testimonials
      </h2>
      <div className="max-w-[570px] mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
