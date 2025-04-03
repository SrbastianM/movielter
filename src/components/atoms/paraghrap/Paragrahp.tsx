import React from "react";

export interface ParagraphsProps {
  text?: string;
  color?: string;
  fontSize?: string;
  fontWeight: "normal" | "bold" | "lighter";
}

const Paragraphs : React.FC<ParagraphsProps> = ({text, color =" black", fontSize="text-base", fontWeight="font-normal"}) => {
  return (
    <p className={`${color} ${fontSize} ${fontWeight}`}>{text}</p>
  )
}

export default Paragraphs;