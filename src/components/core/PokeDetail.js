import { useState, forwardRef, useImperativeHandle } from "react";

import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON } from "../../queries/PokemonQueries";

import PokeDetailContent from "./PokeDetailContent";
import PokeCatch from "./PokeCatch";
import PokeRelease from "./PokeRelease";

const PokeDetail = forwardRef(({ origin }, ref) => {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalCatch, setShowModalCatch] = useState(false);
  const [showModalRelease, setShowModalRelease] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNickname, setPokemonNickname] = useState(null);

  const [fetchDetailPokemon, { loading, data }] = useLazyQuery(GET_POKEMON, {
    variables: { name: pokemonName },
  });

  useImperativeHandle(ref, () => ({
    openPokeDetail(name, nickname) {
      setShowModalDetail(true);
      setPokemonName(name);
      setPokemonNickname(nickname);
      fetchDetailPokemon();
    },
  }));

  const closePokemonDetail = () => {
    setShowModalDetail(false);
  };

  const catchPokemon = () => {
    setShowModalCatch(true);
  };

  const closeCatchPokemon = () => {
    setShowModalCatch(false);
  };

  const releasePokemon = () => {
    setShowModalRelease(true);
  };

  const closeReleasePokemon = () => {
    setShowModalRelease(false);
  };

  const onReleasePokemon = () => {
    closeReleasePokemon();
    closePokemonDetail()
  };
  return (
    <>
      {showModalDetail && !showModalCatch && !showModalRelease && (
        <>
          <PokeDetailContent
            loading={loading}
            pokemon={data}
            nickname={pokemonNickname}
            origin={origin}
            onClose={() => closePokemonDetail()}
            onCatch={() => catchPokemon()}
            onRelease={() => releasePokemon()}
          />
        </>
      )}

      {showModalCatch && (
        <>
          <PokeCatch
            pokemon={data}
            onClose={() => closeCatchPokemon()}
            onCatch={() => closeCatchPokemon()}
          />
        </>
      )}

      {showModalRelease && (
        <>
          <PokeRelease
            pokemon={data}
            nickname={pokemonNickname}
            onClose={() => closeReleasePokemon()}
            onRelease={() => onReleasePokemon()}
          />
        </>
      )}
    </>
  );
});

export default PokeDetail;
