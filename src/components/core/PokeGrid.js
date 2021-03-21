import { useRef } from "react";
import PokeGridItem from "./PokeGridItem";
import PokeDetail from "./PokeDetail";

import { FaHeartBroken } from "react-icons/fa";

const PokeGrid = ({ pokemons, origin, loading }) => {
  const pokeDetailRef = useRef();

  return (
    <>
      <div className="relative min-h-96">
        {loading ? (
          <div className="absolute bg-white bg-opacity-90 w-full h-full loading flex items-center justify-center">
            <img
              src="/images/poke-ball-icon.svg"
              alt="header-icon"
              className="w-7 mx-32 animate-spin"
            />
          </div>
        ) : pokemons.length ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {pokemons.map((pokemon, index) => (
              <PokeGridItem
                key={index}
                pokemon={pokemon}
                onClick={(name, nickname) => pokeDetailRef.current.openPokeDetail(name, nickname)}
              />
            ))}
          </div>
        ) : (
          <div className="h-96 flex items-center justify-center flex-col">
            <FaHeartBroken className="text-4xl text-gray-400 mb-2" />
            <p>No Pokemon Available.</p>
          </div>
        )}
      </div>

      <PokeDetail ref={pokeDetailRef} origin={origin} />
    </>
  );
};

PokeGrid.defaultProps = {
  pokemons: [],
};

export default PokeGrid;
