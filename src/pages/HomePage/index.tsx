import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import usePokemonList from "../../hooks/usePokemonList";

const HomePage = () => {
  const { pokemonList, loading, error } = usePokemonList();

  return (
    <>
      <Navbar />
      <div className="px-5 py-4 max-w-screen-sm h-full grid grid-cols-2 gap-4 overflow-y-auto bg-base-color">
        {pokemonList.map((pokemon, index) => (
          <Link to={`/detail/${pokemon.name}`}>
            <Card name={pokemon.name} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
