import { toast } from "react-hot-toast";
import { useEffect, useContext } from "react";
import { MyPokemonContext } from "../../contexts/MyPokemonContext";

const PokeRelease = ({ pokemon, nickname, onClose, onRelease }) => {
  const { myPokemon, setMyPokemon } = useContext(MyPokemonContext);

  useEffect(() => {}, []);

  const releasePokemon = () => {
    onRelease();

    setMyPokemon(myPokemon.filter((pokemon) => pokemon.nickname !== nickname));

    toast.success(`${nickname} have been released to the wild!`);
  };

  return (
    <>
      <div
        className="fixed z-50 inset-0 modal-catch w-full h-full"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="fixed z-50 inset-0 overflow-y-auto poke-catch">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all w-96 m-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="p-10">
              <div className="flex items-center justify-center flex-col">
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
                    className="mx-auto mb-5"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon.id}.png`}
                    alt={pokemon.pokemon.name}
                  ></img>
                </div>
                <h4 className="mb-1 text-gray-500">Are you sure?</h4>
                <p className="text-center">
                  You're gonna release{" "}
                  <span className="capitalize">
                    {nickname
                      ? nickname
                      : pokemon.pokemon.name.replaceAll("-", " ")}
                  </span>{" "}
                  to the wild.
                </p>
                <div className="text-center mt-5">
                  <button
                    type="button"
                    className="btn btn-red capitalize"
                    onClick={() => releasePokemon()}
                  >
                    Release{" "}
                    <span className="capitalize">
                      {nickname
                        ? nickname
                        : pokemon.pokemon.name.replaceAll("-", " ")}
                    </span>
                    !
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-5">
                <h6
                  className="text-poke-red cursor-pointer transition duration-300 transform hover:-translate-y-1"
                  onClick={() => onClose()}
                >
                  Back
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeRelease;
