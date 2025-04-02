import React from "react";

export interface InputProps{
  value?: string,
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}


const Input: React.FC<InputProps> = ({value, onChange, placeholder = "Search", className = ""}) => {
  return (
    <>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}/>
    </>
  )
}


export default Input; 