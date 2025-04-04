import React from "react";

export interface InputProps{
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}


const Input: React.FC<InputProps> = ({value, onChange, placeholder = "Search", className = "", id="search"}) => {
  return (
    <>
      <input id={id} type="text" value={value} onChange={onChange} placeholder={placeholder} className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}/>
    </>
  )
}


export default Input; 