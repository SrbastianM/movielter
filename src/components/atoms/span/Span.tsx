import React from "react";

export interface SpanProps {
  text: string;
  className?: string;
}

const Span : React.FC<SpanProps>= ({className = "", text}) => {
  return (<span className={`text-sm text-gray-700 ${className}`}>${text}</span>)
}


export default Span;