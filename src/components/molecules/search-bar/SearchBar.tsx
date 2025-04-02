import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";

const SearchBar = () => {
  return  (
    <div className="flex flex-col gap-2">
      <Label text="What movie do you want?" htmlTo="search"/>
      <Input onChange={(e) => {}}/>
    </div>
  );  
}

export default SearchBar;