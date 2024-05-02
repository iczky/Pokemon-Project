/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import PokemonListContext from "./PokemonListContext";

export interface PokemonDetails {
  name: string;
  id: number;
  health: number;
  attack: number;
  defense: number;
  spriteFront: string;
  artworkFront: string;
  types: string;
}

interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonContextType {
  pokemon: PokemonDetails[];
  loading: boolean;
}

const MAX_LIMIT: number = 2000;
export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [pokemonsDetail, setPokemonsDetail] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const storedPokemons = localStorage.getItem("pokemons");
        if (storedPokemons) {
          setPokemonsDetail(JSON.parse(storedPokemons));
          setLoading(false);
        } else {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${MAX_LIMIT}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch");
          }
          const data = await response.json();
          console.log(data);

          const pokemonDetailsData = data.results.map(
            async (result: Pokemon) => {
              const detailData = await fetch(`${result.url}`);

              const { name, id, stats, types } = await detailData.json();

              const hp = stats.find(
                (stat: any) => stat.stat.name === "hp"
              )?.base_stat;
              const attack = stats.find(
                (stat: any) => stat.stat.name === "attack"
              )?.base_stat;
              const defense = stats.find(
                (stat: any) => stat.stat.name === "defense"
              )?.base_stat;

              const spriteFront = data.sprites.front_default;

              const artworkFront =
                data.sprites.other["official-artwork"].front_default;

              const [{ type }] = types;

              return {
                name,
                id,
                hp,
                attack,
                defense,
                spriteFront,
                artworkFront,
                type,
              };
            }
          );

          const pokemonDetails = await Promise.all(pokemonDetailsData);
          setPokemonsDetail(pokemonDetails);
          localStorage.setItem("pokemon", JSON.stringify(pokemonDetails));
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const value: PokemonContextType = {
    pokemon: pokemonsDetail,
    loading: loading,
  };

  return (
    <PokemonListContext.Provider value={value}>
      {children}
    </PokemonListContext.Provider>
  );
};
