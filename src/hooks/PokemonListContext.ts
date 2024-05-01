import { createContext, useContext } from "react";
import { Pokemon } from "./usePokemonList";

export const PokemonListContext = createContext<Pokemon[]>([]);

export const usePokemonContext = () => useContext(PokemonListContext);
