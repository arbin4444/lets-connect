import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cloth3 from "../../assets/clothes/cloth3.jpg";
import cloth7 from "../../assets/clothes/cloth7.jpg";
import cloth9 from "../../assets/clothes/cloth9.jpg";
import cloth14 from "../../assets/clothes/cloth14.jpg";
import top1 from "../../assets/topProducts/top1.jpg";
import top2 from "../../assets/topProducts/top2.jpg";
import top3 from "../../assets/topProducts/top3.jpg";
import top4 from "../../assets/topProducts/top4.jpg";
import top5 from "../../assets/topProducts/top5.jpg";
import top6 from "../../assets/topProducts/top6.jpg";
import top7 from "../../assets/topProducts/top7.jpg";
import top8 from "../../assets/topProducts/top8.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ConnectLandingPage: React.FC = () => {
  const topProducts = [top1, top2, top3, top4, top5, top6, top7, top8];

  return (
    <>
      {/* Header */}
      <div className="flex">
        <div className="w-1/2">
          <div className="flex justify-around h-[50px] items-center">
            <span className="text-[22px] hover:scale-[1.2] transition-transform duration-200">Home</span>
            <span className="text-[22px] hover:scale-[1.2] transition-transform duration-200">About us</span>
            <span className="text-[22px] hover:scale-[1.2] transition-transform duration-200">Activity</span>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="flex w-1/3 justify-around h-[50px] items-center">
            <span className="text-[22px] hover:scale-[1.2] transition-transform duration-200">Sign In</span>
            <span className="text-[22px] hover:scale-[1.2] transition-transform duration-200">Sign Up</span>
          </div>
        </div>
      </div>

      {/* Fashion Images */}
      <div className="mx-[150px] mt-[40px]">
        <div className="flex justify-center">
          <div>
            <img className="h-[320px] w-[520px]" src={cloth3} alt="suit" />
          </div>
          <div className="flex flex-col justify-center items-center mx-[20px] font-[500] text-[26px] text-[#093e3c]">
            <p>C</p><p>H</p><p>O</p><p>I</p><p>C</p><p>E</p>
          </div>
          <div>
            <img className="h-[320px] w-[520px]" src={cloth7} alt="suit" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[245px] font-[500] text-[26px] my-[10px]">
          <p className="text-[#093e3c]">FASHION</p>
          <p className="text-[#FC4100]">IS</p>
          <p className="text-[#093e3c]">IDENTITY</p>
        </div>
        <div className="flex justify-center">
          <div>
            <img className="h-[465px] w-[560px]" src={cloth9} alt="suit" />
          </div>
          <div className="flex flex-col justify-center items-center font-[500] text-[26px] mx-[20px] text-[#093e3c]">
            <p>Y</p><p>O</p><p>U</p><p>R</p><p>S</p>
          </div>
          <div>
            <img className="h-[465px] w-[560px]" src={cloth14} alt="suit" />
          </div>
        </div>
      </div>

      {/* Top Products Slider */}
      <div className="flex justify-center gap-[166px] mb-[50px]">
        <div className="flex flex-col items-center justify-center text-[#093e3c] font-[500] text-[64px]">
          <p>Join us - connect with style</p>
          <p>create with passion, and</p>
          <p>celebrate yourself</p>
        </div>

        <div>
          <p className="text-[#093e3c] font-[500] text-[50px] text-center mt-[10px]">
            Our Top Products
          </p>

          <div className="w-[400px] h-[500px]">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}           // No extra space between slides
              slidesPerView={1}          // Only one image per slide
              loop={true}                // Infinite loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="w-full h-full"
            >
              {topProducts.map((img, idx) => (
                <SwiperSlide
                  key={idx}
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src={img}
                    alt={`top-product-${idx}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
