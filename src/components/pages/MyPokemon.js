import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import PokeGrid from "../core/PokeGrid";

import { MyPokemonContext } from "../../contexts/MyPokemonContext";

const MyPokemon = () => {
  const { myPokemon } = useContext(MyPokemonContext)

  return (
    <div className="container min-h-screen px-5">
      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center mb-3">
          <FaHeart></FaHeart>
          <h5 className="ml-2">My Pokemon</h5>
        </div>

        <PokeGrid pokemons={myPokemon} origin="my-pokemon"/>
      </div>
    </div>
  );
};

export default MyPokemon;
