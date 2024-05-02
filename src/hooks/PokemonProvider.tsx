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

export interface PokemonContextType {
  pokemons: PokemonDetails[];
  loading: boolean;
}

const MAX_LIMIT: number = 2000;

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedPokemonData = localStorage.getItem("pokemonData");
        if (storedPokemonData) {
          // If data is found in localStorage, set it to state
          const parsedData = JSON.parse(storedPokemonData);
          setPokemons(parsedData);
          setLoading(false);
        } else {
          // If no data is found in localStorage, fetch from API
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${MAX_LIMIT}`
          );
          const data = await response.json();
          const pokemonList: PokemonDetails[] = await Promise.all(
            data.results.map(async (pokemon: any) => {
              const pokemonResponse = await fetch(pokemon.url);
              const pokemonData = await pokemonResponse.json();
              return {
                name: pokemonData.name,
                id: pokemonData.id,
                health: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                spriteFront: pokemonData.sprites.front_default,
                artworkFront:
                  pokemonData.sprites.other["official-artwork"].front_default,
                types: pokemonData.types[0].type.name,
              };
            })
          );
          setPokemons(pokemonList);
          setLoading(false);
          // Save fetched data to localStorage
          localStorage.setItem("pokemonData", JSON.stringify(pokemonList));
        }
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {};
  }, []);

  return (
    <PokemonListContext.Provider value={{ pokemons, loading }}>
      {children}
    </PokemonListContext.Provider>
  );
};

export default PokemonListContext;

// export const PokemonProvider: React.FC<{ children: JSX.Element }> = ({
//   children,
// }) => {
//   const [pokemonsDetail, setPokemonsDetail] = useState<PokemonDetails[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const storedPokemons = localStorage.getItem("pokemons");
//         if (storedPokemons) {
//           setPokemonsDetail(JSON.parse(storedPokemons));
//           setLoading(false);
//         } else {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon?limit=${MAX_LIMIT}`
//           );
//           if (!response.ok) {
//             throw new Error("Failed to fetch");
//           }
//           const data = await response.json();
//           console.log(data);

//           const pokemonDetailsData = data.results.map(
//             async (result: Pokemon) => {
//               const detailData = await fetch(`${result.url}`);

//               const { name, id, stats, types } = await detailData.json();

//               const hp = stats.find(
//                 (stat: any) => stat.stat.name === "hp"
//               )?.base_stat;
//               const attack = stats.find(
//                 (stat: any) => stat.stat.name === "attack"
//               )?.base_stat;
//               const defense = stats.find(
//                 (stat: any) => stat.stat.name === "defense"
//               )?.base_stat;

//               const spriteFront = data.sprites.front_default;

//               const artworkFront =
//                 data.sprites.other["official-artwork"].front_default;

//               const [{ type }] = types;

//               return {
//                 name,
//                 id,
//                 hp,
//                 attack,
//                 defense,
//                 spriteFront,
//                 artworkFront,
//                 type,
//               };
//             }
//           );

//           const pokemonDetails = await Promise.all(pokemonDetailsData);
//           setPokemonsDetail(pokemonDetails);
//           localStorage.setItem("pokemon", JSON.stringify(pokemonDetails));
//         }
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchPokemons();
//   }, []);

//   const value: PokemonContextType = {
//     pokemons: pokemonsDetail,
//     loading: loading,
//   };

//   return (
//     <PokemonListContext.Provider value={value}>
//       {children}
//     </PokemonListContext.Provider>
//   );
// };
