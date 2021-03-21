import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";

import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../queries/PokemonQueries";

import { FaBook } from "react-icons/fa";
import PokeGrid from "../core/PokeGrid";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState({});
  const [limit ] = useState(18);
  const [offset, setOffset] = useState(0);

  const [fetchPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  useEffect(() => {
    fetchPokemons();

    if (data) {
      setPokemons(data.pokemons);
    }
  }, [data]);

  const paginationChanged = (page) => {
    let selected = page.selected;
    setOffset(Math.ceil(selected * limit));
    fetchPokemons();

    if (data) {
      setPokemons(data.pokemons);
    }
  };

  return (
    <div className="container min-h-screen px-5">
      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center mb-3">
          <FaBook></FaBook>
          <h5 className="ml-2">Pokedex</h5>
        </div>
        <PokeGrid pokemons={pokemons.results} loading={loading} origin="pokedex" />

        <div className="text-center pt-5 pb-3">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(pokemons.count/limit)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={paginationChanged}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
