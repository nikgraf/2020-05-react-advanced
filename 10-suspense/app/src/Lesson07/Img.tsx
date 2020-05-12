import React from "react";
import wrapPromise from "../utils/wrapPromise";

const imgCache: { [key: string]: any } = {};

export const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => resolve({ src });
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
