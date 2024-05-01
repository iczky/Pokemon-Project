import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import usePokemonList from "../../hooks/usePokemonList";
import { PokemonListContext } from "../../hooks/PokemonListContext";
import LoadingIndicator from "./LoadingIndicator";

const HomePage = () => {
  const { pokemonList, loading } = usePokemonList();
  const limitedPokemonList = pokemonList.slice(0, 20);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <PokemonListContext.Provider value={pokemonList}>
      <Navbar searchIconProps={true} />
      <div className="px-5 py-4 max-w-screen-sm h-full grid grid-cols-2 gap-4 overflow-y-auto bg-base-color">
        {limitedPokemonList.map((pokemon, index) => (
          <Link to={`/detail/${pokemon.name}`} key={index}>
            <Card name={pokemon.name} />
          </Link>
        ))}
      </div>
    </PokemonListContext.Provider>
  );
};

export default HomePage;
