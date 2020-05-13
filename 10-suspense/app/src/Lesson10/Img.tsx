import React from "react";
import wrapPromise, { Resource } from "../utils/wrapPromise";

type Image = { src: string; width: number; height: number };
const imgCache: { [key: string]: Resource<Image> } = {};

export const preloadImage = (src: string) => {
  return new Promise<Image>((resolve, reject) => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () =>
      // setting height & width seems to be necessary for a stable loading experience
      // divide by 2 to optimize for retina screens
      resolve({ src, height: img.height / 2, width: img.width / 2 });
    img.onerror = (err) => reject(err);
  });
};

type ImgProps = { src: string; alt: string };

const Img: React.FC<ImgProps> = ({ src, alt }) => {
  let imgResource = imgCache[src];
  if (!imgResource) {
    imgResource = wrapPromise(preloadImage(src));
    imgCache[src] = imgResource;
  }
  const img = imgResource.read();
  return <img src={img.src} alt={alt} width={img.width} height={img.height} />;
};

export default Img;
