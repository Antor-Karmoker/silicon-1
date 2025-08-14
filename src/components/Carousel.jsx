import React from "react";
import leftimg from "../assets/images/leftimg.png";
import middleimg from "../assets/images/iPhone 12 Pro.png";
import rightimg from "../assets/images/rightimg.png";
import CommonHead from "./common/CommonHead";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
        nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIosNew />
  };
  return (
    <>
      <section
        id="carousel"
        className="my-[112px] pt-[80px] pb-[96px] bg-[#F3F6FF]"
      >
        <div className="container">
          <div className="flex justify-center">
            <CommonHead comh2={"How Does It Work?"} />
          </div>
          <div className="carousel-row">
            <div className="w-full mx-auto py-10" style={{ maxWidth: "1200px" }}>
              <Slider {...settings}>
                <div>
                  <img
                    src={leftimg}
                    alt="screen1"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={middleimg}
                    alt="screen2"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={rightimg}
                    alt="screen3"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                  <div>
                  <img
                    src={leftimg}
                    alt="screen3"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                  <div>
                  <img
                    src={middleimg}
                    alt="screen3"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
                 <div>
                  <img
                    src={rightimg}
                    alt="screen3"
                    className="rounded-xl shadow-lg w-full object-cover"
                  />
                </div>
              </Slider>
            </div>
            {/* <div>
                  <img src={leftimg} alt="carousel-img" />
                  <img src={middleimg} alt="carousel-img" />
                  <img src={rightimg} alt="carousel-img" />
                </div> */}

            <div className="pt-[40px]">
              <div className="flex justify-center">
                <h2 className="text-[24px] font-extrabold font-main text-[#131022]">
                  Step 2. Latest transaction history
                </h2>
              </div>

              <div className="flex justify-center pt-[12px]">
                <div className="w-[636px] text-center ">
                  <p className="text-[16px] font-normal font-main text-primary">
                    Enim, et amet praesent pharetra. Mi non ante hendrerit amet
                    sed. Arcu sociis tristique quisque hac in consectetur
                    condimentum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
