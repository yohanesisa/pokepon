import { FaTimesCircle } from "react-icons/fa";

const PokeDetailContent = ({ loading, pokemon, nickname, origin, onClose, onCatch, onRelease }) => {
  return (
    <>
      <div className="fixed z-50 inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all w-96 m-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {loading ? (
              <>
                <div className="py-32 flex justify-center">
                  <img
                    src="images/poke-ball-icon.svg"
                    alt="header-icon"
                    className="w-7 animate-spin"
                  />
                </div>
              </>
            ) : pokemon ? (
              <>
                {pokemon ? (
                  <>
                    <div
                      className={`bg-opacity-80 bg-type-${pokemon.pokemon.types[0].type.name} bg-contain`}
                      style={{
                        backgroundImage: `url("/images/poke-ball-transparent-bg.png")`,
                      }}
                    >
                      <div className="p-5 pb-3 flex items-center justify-between">
                        <h5 className="text-white">
                          #{pokemon.pokemon.id.toString().padStart(3, "0")}
                        </h5>
                        <FaTimesCircle
                          className="ml-auto text-white text-xl cursor-pointer"
                          onClick={() => onClose()}
                        />
                      </div>

                      <div className="px-5">
                        <h1 className="text-white mb-5 text-5xl capitalize">
                          {nickname ? nickname : pokemon.pokemon.name.replaceAll("-", " ")}
                        </h1>
                        <div
                          style={{
                            minWidth: "200px",
                            minHeight: "200px",
                          }}
                        >
                          <img
                            style={{
                              width: "200px",
                              height: "200px",
                            }}
                            className="mx-auto"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon.id}.png`}
                            alt={pokemon.pokemon.name}
                          ></img>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl -mt-10 px-5 py-10">
                        <div className="pt-0 pb-5">
                          <div className="mb-2 text-center flex justify-center">
                            {pokemon.pokemon.types.map((type, index) => (
                              <div
                                key={index}
                                className={`m-2 bg-poke-green px-3 py-1 rounded-full flex bg-opacity-90 bg-type-${type.type.name}`}
                              >
                                <img
                                  src={`icons/${type.type.name}.svg`}
                                  alt={type.type.name}
                                  className="w-3"
                                ></img>
                                <p
                                  className={`font-lato text-xs font-bold text-white capitalize ml-1`}
                                >
                                  {type.type.name}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="mb-5">
                            <h5 className="mb-2">About</h5>
                            <div className="table">
                              <div className="table-row-group">
                                <div className="table-row">
                                  <div className="table-cell">
                                    <p className="text-gray-500 mb-2">
                                      Species
                                    </p>
                                  </div>
                                  <div className="table-cell pl-4">
                                    <p className="text-gray-800 mb-2 capitalize">
                                      {pokemon.pokemon.species.name}
                                    </p>
                                  </div>
                                </div>
                                <div className="table-row">
                                  <div className="table-cell">
                                    <p className="text-gray-500 mb-2">Weight</p>
                                  </div>
                                  <div className="table-cell pl-4">
                                    <p className="text-gray-800 mb-2">
                                      {pokemon.pokemon.weight / 10} kg
                                    </p>
                                  </div>
                                </div>
                                <div className="table-row">
                                  <div className="table-cell">
                                    <p className="text-gray-500 mb-2">height</p>
                                  </div>
                                  <div className="table-cell pl-4">
                                    <p className="text-gray-800 mb-2">
                                      {pokemon.pokemon.height / 10} m
                                    </p>
                                  </div>
                                </div>
                                <div className="table-row">
                                  <div className="table-cell">
                                    <p className="text-gray-500 mb-2">
                                      Base Experience
                                    </p>
                                  </div>
                                  <div className="table-cell pl-4">
                                    <p className="text-gray-800 mb-2">
                                      {pokemon.pokemon.base_experience}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-5">
                            <h5 className="mb-2">Moves</h5>
                            <div className="-m-1 flex flex-wrap">
                              {pokemon.pokemon.moves.map((move, index) => (
                                <div
                                  key={index}
                                  className={`m-1 border bg-white px-3 py-1 rounded-full group transition duration-300 hover:bg-type-${pokemon.pokemon.types[0].type.name} hover:border-2`}
                                >
                                  <p className="font-lato text-xs font-bold text-gray-500 capitalize group-hover:text-white">
                                    {move.move.name.replaceAll("-", " ")}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {origin === "pokedex" && (
                          <>
                            <div className="text-center mb-7">
                              <button
                                type="button"
                                className="btn capitalize"
                                onClick={() => onCatch()}
                              >
                                Catch{" "}
                                {pokemon.pokemon.name.replaceAll("-", " ")}!
                              </button>
                            </div>
                          </>
                        )}
                        {origin === "my-pokemon" && (
                          <>
                            <div className="text-center mb-7">
                              <button
                                type="button"
                                className="btn btn-red capitalize"
                                onClick={() => onRelease()}
                              >
                                Release{" "}
                                {nickname ? nickname : pokemon.pokemon.name.replaceAll("-", " ")}!
                              </button>
                            </div>
                          </>
                        )}

                        <div className="flex justify-center">
                          <h6
                            className="text-poke-red cursor-pointer transition duration-300 transform hover:-translate-y-1"
                            onClick={() => onClose()}
                          >
                            Back
                          </h6>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDetailContent;
