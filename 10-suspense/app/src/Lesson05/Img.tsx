import React from "react";
import wrapPromise from "../utils/wrapPromise";

const imgCache: { [key: string]: any } = {};

export const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = function () {
      // setting height & width seems to be necessary for a stable loading experience
      // divide by 2 to optimize for retina screens
      // @ts-ignore
      resolve({ src, height: this.height / 2, width: this.width / 2 });
    };
    img.onerror = (err) => reject(err);
  });
};

const Img = ({ src, alt }: any) => {
  let imgResource = imgCache[src];
  if (!imgResource) {
    imgResource = wrapPromise(preloadImage(src));
    imgCache[src] = imgResource;
  }
  const img = imgResource.read();
  return <img src={img.src} alt={alt} width={img.width} height={img.height} />;
};

export default Img;
