import { useState } from "react";
import arrowSort from "../../assets/Arrow-sort.png";
import Dropdown from "./Dropdown";

interface SortProps {
  handleSingleView: () => void;
  handleDoubleView: () => void;
}

const Sort: React.FC<SortProps> = ({ handleSingleView, handleDoubleView }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prev: boolean) => !prev);
  };

  return (
    <div className="flex justify-between px-5 py-3 bg-base-color max-w-screen-sm">
      <div
        className="flex justify-between gap-[102px] px-2 py2 rounded-lg bg-bg-bar-hp items-center relative"
        onClick={handleDropDown}>
        <p className="font-lato text-base text-base-id-poke w-fit">Sort by</p>
        <img src={arrowSort} alt="arrow down" />
        {showDropDown && <Dropdown />}
      </div>
      {/* <ToggleView /> */}
      <div className="flex py-2 px-3 rounded-lg bg-view-toggle text-white gap-2">
        <p onClick={handleSingleView}>Single</p>
        <p onClick={handleDoubleView}>Double</p>
      </div>
    </div>
  );
};

export default Sort;
