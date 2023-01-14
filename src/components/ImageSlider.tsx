import React from "react";
import data from "../data/data.json";
import useSizeWidth from "../hooks/useSizeWidth";
import { Link } from "react-router-dom";

import "swiper/css/navigation";
import "swiper/css";

import { Navigation, Autoplay } from "swiper";

type ImageSliderType = {
  id: number;
  image: string;
  title: string;
  desc: string;
  price: number;
  category: string;
}[];
import { Swiper, SwiperSlide } from "swiper/react";
const ImageSlider = () => {
  const trendData: ImageSliderType = [
    { ...data.headphone[0] },
    { ...data.headphone[1] },
    { ...data.laptop[0] },
    { ...data.laptop[1] },
    { ...data.laptop[2] },
    { ...data.mobile[0] },
    { ...data.mobile[1] },
  ];
  const size = useSizeWidth();

  return (
    <Swiper
      loop
      autoplay={{ delay: 2500 }}
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
    >
      {trendData.map((item) => (
        <SwiperSlide key={item.title}>
          <Link to={`/store/${item.category}/${item.id}`}>
            <img
              style={{
                width: "100%",
                height: size > 500 ? "500px" : "300px",
                objectFit: "contain",
              }}
              src={item.image}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
