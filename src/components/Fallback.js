import React from "react";

import Lottie from "react-lottie";
import * as animationData from "assets/lottie/loading.json";

const Fallback = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fallBack">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Fallback;
