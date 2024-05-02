const Dropdown = () => {
  return (
    <div className="absolute top-8 left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 text-left">
      <p className="border-solid border-2 border-b-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
        Health
      </p>
      <p className="border-solid border-2 border-b-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
        Attack
      </p>
      <p className="border-solid border-2 border-b-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
        Defence
      </p>
    </div>
  );
};

export default Dropdown;
