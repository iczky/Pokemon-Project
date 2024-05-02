import { CardProps } from ".";
import usePokemonDetails from "../../hooks/usePokemonDetail";

const CardSingle: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails } = usePokemonDetails(name);

  return (
    <div className="pt-3 pb-2 px-3 flex flex-col gap-2 rounded-lg bg-base-card hover:scale-105 transition cursor-pointer group">
      <div className="flex justify-between font-bold text-base font-lato">
        <p className="text-grass-element ">{pokemonDetails?.types}</p>
        <p className="text-id-single-view">{pokemonDetails?.id}</p>
      </div>
      <img src={pokemonDetails?.artworkFront} alt="Test Pokemon" />
      <p className="font-lato font-bold text-base">{name}</p>
    </div>
  );
};

export default CardSingle;
