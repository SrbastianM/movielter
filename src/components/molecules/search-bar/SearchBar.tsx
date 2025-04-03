import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import React from "react";

export interface SearchBarProps {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar : React.FC<SearchBarProps>= ({value, onChange}) => {
  return  (
    <div className="flex flex-col gap-2">
      <Label className="text-xl" text="What movie do you want?" htmlTo="search"/>
      <Input id="search" value={value} onChange={onChange}/>
    </div>
  );  
}

export default SearchBar;