import { lazy } from "react";

const lazyLoaderWithDealy = (importPromise) => {
  return lazy(async () => {
    const [moduleExports] = await Promise.all([
      importPromise,
      new Promise((resolve) => setTimeout(resolve, 300)),
    ]);
    return moduleExports;
  });
};

const isCorrectUrl = (url) => {
  return typeof url === "string" && Number.isInteger(parseInt(url));
};

export { lazyLoaderWithDealy, isCorrectUrl };
