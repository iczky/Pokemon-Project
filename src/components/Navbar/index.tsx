import logoPoke from "../../assets/logo.png";
import searchIcon from "../../assets/SearchIcon.png";

const Navbar = () => {
  return (
    <nav className="px-5 py-1 max-w-screen-sm flex justify-between items-center bg-base-color border-b-2 border-solid border-gray-700">
      <img src={logoPoke} alt="Logo" />
      <img src={searchIcon} alt="Search" />
    </nav>
  );
};

export default Navbar;
