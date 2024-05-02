import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
// import usePokemonList from "../../hooks/usePokemonList";
// import LoadingIndicator from "./LoadingIndicator";
import { usePokemonContext } from "../../hooks/PokemonListContext";
import Sort from "./Sort";
import CardSingle from "../../components/Card/CardSingle";
import { useState } from "react";

const HomePage = () => {
  const context = usePokemonContext();
  const limitedPokemonList = context?.pokemon.slice(0, 20);

  const [singleView, setSingleView] = useState(false);

  const handleSingleView = () => {
    if (!singleView) {
      setSingleView(true);
    } else {
      setSingleView(false);
    }
  };
  const handleDoubleView = () => {
    if (!singleView) {
      setSingleView(true);
    } else {
      setSingleView(false);
    }
  };

  // if (loading) {
  //   return <LoadingIndicator />;
  // }

  return (
    <>
      <Navbar searchIconProps={true} />
      <Sort
        handleSingleView={handleSingleView}
        handleDoubleView={handleDoubleView}
      />
      {singleView ? (
        <div className="px-5 py-4 max-w-screen-sm h-full grid grid-cols-2 gap-4 overflow-y-auto bg-base-color">
          {limitedPokemonList?.map((pokemon, index) => (
            <Link to={`/detail/${pokemon.name}`} key={index}>
              <Card name={pokemon.name} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-5 py-4 max-w-screen-sm h-full flex flex-col gap-4 overflow-y-auto bg-base-color">
          {limitedPokemonList?.map((pokemon, index) => (
            <Link to={`/detail/${pokemon.name}`} key={index}>
              <CardSingle name={pokemon.name} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;

// {singleView ? (
//   <CardSingle name={pokemon.name} />
// ) : (
//   <Card name={pokemon.name} />
// )}
