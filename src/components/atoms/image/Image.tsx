import React from "react";

export interface ImageProps {
  alt?: string;
  src?: string;
  className?: string;
  shadow?: boolean;
  rounded?: boolean;
}


const Image : React.FC<ImageProps> = ({alt ="", src, className = "", rounded = false, shadow = false}) => {
  return (
    <img src={src} alt={alt} className={
      `w-full h-auto object-cover
      ${rounded ? "rounded-lg" : ""},
      ${shadow ? "shadow-lg" : ""},
      ${className}
      `
    } />
  );
}

export default Image;