import { useRef, useState } from "react";
import logoPoke from "../../assets/logo.png";
import searchIcon from "../../assets/SearchIcon.png";
import Search from "../Search";
import { Link } from "react-router-dom";

interface NavbarProps {
  searchIconProps: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ searchIconProps }) => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchIconClick = () => {
    setIsSearch(!isSearch);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  return (
    <nav className="px-5 py-1 max-w-screen-sm flex justify-between items-center bg-base-color border-b-2 border-solid border-gray-700">
      <Link to={"/"}>
        <img src={logoPoke} alt="Logo" />
      </Link>
      {isSearch ? (
        <Search inputRef={inputRef} />
      ) : (
        searchIconProps && (
          <img src={searchIcon} alt="Search" onClick={handleSearchIconClick} />
        )
      )}
    </nav>
  );
};

export default Navbar;

// {searchIconProps && <img src={searchIcon} alt="Search" />}
