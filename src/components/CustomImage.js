import React from "react";
import LazyLoadImage from "react-lazy-load-image-component";
// import { encode } from "blurhash";
import EmptyImg from "assets/images/emptyImg.jpg";

const CustomImage = ({ src, name, ...rest }) => {
  // const placeholder = encode(src, 200, 200);

  return (
    <img
      loading="lazy"
      src={src}
      className="h-[200px] w-full object-cover"
      alt={name}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = EmptyImg;
      }}
      {...rest}
    />
  );
};

export default CustomImage;
