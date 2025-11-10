import React from "react";
import { Search } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import f3 from "../../assets/clothes/f3.jpg";
import f2 from "../../assets/clothes/f2.jpg";
import f6 from "../../assets/clothes/f6.jpg";
import f4 from "../../assets/clothes/f4.jpg";
import suitM1 from "../../assets/clothes/suit/suitM1.webp";
import suitM2 from "../../assets/clothes/suit/suitM2.webp";
import suitM3 from "../../assets/clothes/suit/suitM3.webp";
import suitM4 from "../../assets/clothes/suit/suitM4.webp";
import suitM5 from "../../assets/clothes/suit/suitM5.webp";
import suitM6 from "../../assets/clothes/suit/suitM6.webp";


export const ConnectLandingPagee: React.FC = () => {
  const landingPageTopImage = [f3, f2, f6, f4];
  const suitClothes = [suitM1,suitM2,suitM3,suitM4,suitM5,suitM6];

  // const [showSearch,setShowSearch] = useState(false);
  return (
    <>
      <div className="flex mx-[80px] h-[70px] mt-[40px] border-[2px] border-l-0 border-r-0">
        <div className="flex w-1/3 text-[22px] text-primary items-center">
          <p>Let's Connect</p>
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="flex text-[22px] text-primary gap-[45px] items-center">
            <p>Home</p>
            <p>Product</p>
            <p>About Us</p>
            <p>Overview</p>
            <p>Blog</p>
          </div>
          <div className="flex gap-[70px]">
            <div className="flex items-center my-[10px] px-[12px] border-[2px] rounded-[28px]">
              <Search/>
            </div>
            <div className="flex items-center text-[22px] text-primary my-[10px] px-[12px] border-[2px] rounded-[28px]">
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-[80px]">
        <div className="flex flex-col font-sans text-[44px]/[62px] mt-[50px] text-primary">
          <p>Join us - connect with style,</p>
          <p>
            <span className="font-[500] text-[62px]">create</span> with passion,
            and
          </p>
          <div className="flex items-center gap-[6px]">
            <p>celebrate yourself</p>
            <MoveRight size={45} />
            <div className="flex items-center text-[22px] rounded-[24px] h-[45px] text-accent bg-secondary px-[10px]">
              Contact us
            </div>
          </div>
        </div>
        <div className="text-primary ">
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="grid grid-cols-4 mx-[80px] gap-[20px] my-[50px]">
        {landingPageTopImage.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Image ${idx}`}
            className="rounded-[16px] h-[420px] w-full"
          />
        ))}
      </div>
      <div>
        <div className="flex justify-center text-[28px] text-primary font-[500]"><p>Our Top Selling Products</p></div>
        <div className="grid grid-cols-4">
          <div>
            <Swiper
              modules={[Autoplay,Navigation,Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{delay:2000, disableOnInteraction:false}}
              pagination={{clickable:true}}
              navigation={true}
            >
              {suitClothes.map((img,idx)=>(
                <SwiperSlide
                  key={idx}
                >
                  <img
                    src={img}
                    alt={`suitCLothes-${idx}`}
                    className="w-full h-full"
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
