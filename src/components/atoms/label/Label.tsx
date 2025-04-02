import React from "react"

interface LabelProps {
  text: string;
  htmlTo?: string;
  className?: string;
}


const Label : React.FC<LabelProps> = ({text, htmlTo, className = ""}) => {
  return (
    <label 
    htmlFor={htmlTo}
    className={`text-sm font-medium text-gray-700 ${className}`}
        >
          {text}
    </label>
  )
}


export default Label;