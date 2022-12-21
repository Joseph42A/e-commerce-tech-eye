import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import CustomImageLazy from "./CustomImageLazy";

const SliderComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fronttask.techeyeco.com/api/ClientSide/GetGroup?GroupProductType=FrontPageSlider"
      )
      .then((response) => setData(response.data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section>
      <Slider {...settings}>
        {data.map(
          (item) =>
            item.attachment && (
              <div key={item.id}>
                <CustomImageLazy
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  name="test"
                  src={`https://fronttask.techeyeco.com${item.attachment.replace(
                    /\\\\/g,
                    "/"
                  )}`}
                />
              </div>
            )
        )}
      </Slider>
    </section>
  );
};

export default SliderComponent;
