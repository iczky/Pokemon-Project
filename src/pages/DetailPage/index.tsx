import Navbar from "../../components/Navbar";
import StatCard from "./StatCard";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { pokemonDetails } = usePokemonDetails(id);
  return (
    <>
      <Navbar searchIconProps={false} />
      <div className="max-w-screen-sm px-7 py-7 bg-base-color flex flex-col text-left gap-2">
        <h2 className="text-lg font-lato text-base-id-poke">
          {`# ${pokemonDetails?.id}`}
        </h2>
        <img src={pokemonDetails?.artworkFront} alt="Pokemon Image" />
        <div className="flex justify-between items-center text-white font-lato text-4xl">
          <h1 className="">{pokemonDetails?.name}</h1>
          <img src={pokemonDetails?.spriteFront} alt="Sprite Pokemon" />
        </div>
        <StatCard
          defense={pokemonDetails?.defense}
          health={pokemonDetails?.health}
          attack={pokemonDetails?.attack}
        />
      </div>
    </>
  );
};

export default DetailPage;
