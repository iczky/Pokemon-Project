import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { usePokemonContext } from "../../hooks/PokemonListContext";
import StatCard from "./StatCard";

const DetailPage = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const context = usePokemonContext()?.pokemons;

  const filteredPokemon =
    context?.find((pokemon) => pokemon.name === id) || null;
  console.log(filteredPokemon, "=============filtered==============+");

  if (filteredPokemon === null) return <div>Loading...</div>;

  return (
    <>
      <Navbar searchIconProps={false} />
      <div className="max-w-screen-sm px-7 py-7 bg-base-color flex flex-col text-left gap-2">
        <h2 className="text-lg font-lato text-base-id-poke">
          {`# ${filteredPokemon.id}`}
        </h2>
        <img src={filteredPokemon.artworkFront} alt="Pokemon Image" />
        <div className="flex justify-between items-center text-white font-lato text-4xl">
          <h1 className="">{filteredPokemon.name}</h1>
          <img src={filteredPokemon.spriteFront} alt="Sprite Pokemon" />
        </div>
        <StatCard
          defense={filteredPokemon.defense}
          health={filteredPokemon.health}
          attack={filteredPokemon.attack}
        />
      </div>
    </>
  );
};

export default DetailPage;
