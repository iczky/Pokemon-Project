import { createContext, useContext } from "react";
import { PokemonContextType } from "./PokemonProvider";

export const PokemonListContext = createContext<PokemonContextType | undefined>(
  undefined
);

export const usePokemonContext = () => useContext(PokemonListContext);

export default PokemonListContext;
