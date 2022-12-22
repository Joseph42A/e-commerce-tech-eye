import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import useWindowDimensions from "hooks/useWindowDimensions";
import CustomImageLazy from "./CustomImageLazy";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const xsm = 420;
const RESPONSIVE_SCREEN = 730;

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { width } = useWindowDimensions();
  const [slidePerView, setSlidePerView] = useState(4);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider"
      )
      .then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    // if (width > RESPONSIVE_SCREEN) setSlidePerView(3);
    if (width < RESPONSIVE_SCREEN && width > xsm) setSlidePerView(4);
    if (width < RESPONSIVE_SCREEN && width <= xsm) setSlidePerView(3);
  }, [width]);

  return (
    <div className="product">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {products.map((product) => {
          return (
            !!product.attachment && (
              <SwiperSlide key={product.id}>
                <div>
                  <CustomImageLazy
                    name="test"
                    src={`https://fronttask.techeyeco.com${product?.attachment?.replace(
                      /\\\\/g,
                      "/"
                    )}`}
                  />
                </div>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={slidePerView}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {products.map((product, i) => {
          return (
            !!product.attachment && (
              <SwiperSlide key={product.id}>
                <div>
                  <CustomImageLazy
                    name="test"
                    src={`https://fronttask.techeyeco.com${product?.attachment?.replace(
                      /\\\\/g,
                      "/"
                    )}`}
                  />
                </div>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
