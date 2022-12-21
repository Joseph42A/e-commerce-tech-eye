import React, { Suspense } from "react";
import { lazyLoaderWithDealy } from "utils";
import Loader from "./Loader";

const CustomImage = lazyLoaderWithDealy(import("./CustomImage"));

const CustomImageLazy = ({ src, name, ...rest }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <CustomImage src={src} name={name} {...rest} />
    </Suspense>
  );
};

export default CustomImageLazy;
