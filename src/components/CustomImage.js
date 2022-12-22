import React from "react";
import EmptyImg from "assets/images/emptyImg.jpg";

const CustomImage = ({ src, name, ...rest }) => {
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
