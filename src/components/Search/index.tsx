import { useState } from "react";
import { usePokemonContext } from "../../hooks/PokemonListContext";
import { Link } from "react-router-dom";
import { PokemonDetails } from "../../hooks/PokemonProvider";

interface SearchProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({ inputRef }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const context = usePokemonContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      const filteredPokemon = context?.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      // const filteredPokemon: PokemonDetails[] = context?.pokemons.map((pokemon) => {
      //   return pokemon
      // });

      const limitedFilteredPokemon = filteredPokemon?.slice(0, 10);
      console.log(limitedFilteredPokemon);

      setFilteredPokemonList(limitedFilteredPokemon);
      setShowDropdown(true);
    } else {
      setFilteredPokemonList([]);
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        className="py-2 pl-4 rounded-lg border-solid border-bg-bar-hp border-2"
        placeholder="Search..."
        onChange={handleInputChange} // Call the onBlur callback from props
      />
      {showDropdown && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {filteredPokemonList.map((pokemon, index) => (
            <Link to={`/detail/${pokemon.name}`} key={index}>
              <li className="border-solid border-2 border-b-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
                {pokemon.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
