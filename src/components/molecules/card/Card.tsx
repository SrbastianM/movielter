import React from "react";
import Image from "../../atoms/image/Image";
import Label from "../../atoms/label/Label";
import Span from "../../atoms/span/Span";

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string
}

const Card : React.FC<CardProps> = ({title, description, imageSrc}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-4">
      <Image src={imageSrc} alt={title} rounded className="w-full h-40"/>
      <div className="mt-4">
        <Label text={title} className="text-xl size-2 font-bold text-gray-900 dark:text-black"/>        
        <Span text={description} className="text-gray-600 mt-2 block"/>
      </div>
    </div>
  );  
}

export default Card;