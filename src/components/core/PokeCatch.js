import { toast } from "react-hot-toast";
import { useEffect, useState, useContext } from "react";
import { MyPokemonContext } from "../../contexts/MyPokemonContext";

const PokeCatch = ({ pokemon, onClose, onCatch }) => {
  const [nickname, setNickname] = useState("");
  const [catchLoading, setCatchLoading] = useState(true);
  const [catchStatus, setCatchStatus] = useState(false);
  const { myPokemon, setMyPokemon } = useContext(MyPokemonContext);

  useEffect(() => {
    catchPokemon();

    setTimeout(() => {
      setCatchLoading(false);
    }, 3000);
  }, []);

  const catchPokemon = () => {
    setCatchLoading(true);
    setTimeout(() => {
      setCatchLoading(false);
    }, 2000);

    setCatchStatus(Math.random() < 0.5);
  };

  const savePokemon = () => {
    if (nickname === "") {
      toast.error("Nickname is empty, fill the field and try again!");

      return;
    } else {
      if (myPokemon.find((item) => item.nickname === nickname)) {
        toast.error(`${nickname} already exist, please try other name!`);

        return;
      } else {
        const newPokemon = {
          id: pokemon.pokemon.id,
          name: pokemon.pokemon.name,
          image: pokemon.pokemon.sprites.front_default,
          nickname: nickname,
        };

        setMyPokemon([newPokemon, ...myPokemon]);

        toast.success(
          `${nickname} have been added to your pokemon collection!`
        );

        onCatch();
      }
    }
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
              {catchLoading ? (
                <div className="flex items-center justify-center flex-col">
                  <img
                    src="images/poke-ball-icon.svg"
                    alt="header-icon"
                    className="w-24 animate-spin mb-5"
                  />
                  <h4 className="mb-1 text-gray-500">
                    Trying catch{" "}
                    <span className="capitalize">
                      {pokemon.pokemon.name.replaceAll("-", " ")}...
                    </span>
                  </h4>
                  <p className="text-center">
                    Throwing a poke ball, but ups you miss a bit.
                  </p>
                </div>
              ) : catchStatus ? (
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
                  <h4 className="mb-1 text-gray-500">
                    You just catched a{" "}
                    <span className="capitalize">
                      {pokemon.pokemon.name.replaceAll("-", " ")}
                    </span>
                    !
                  </h4>
                  <p className="text-center">
                    Give{" "}
                    <span className="capitalize">
                      {pokemon.pokemon.name.replaceAll("-", " ")}
                    </span>{" "}
                    a name so you won't get confused.
                  </p>
                  <input
                    type="text"
                    placeholder="Write a nickname..."
                    className="my-7 border-b-2 border-poke-red"
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn capitalize"
                      onClick={() => savePokemon()}
                    >
                      Add to Collection!
                    </button>
                  </div>
                </div>
              ) : (
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
                        filter: `grayscale(100%)`,
                      }}
                      className="mx-auto mb-5"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon.id}.png`}
                      alt={pokemon.pokemon.name}
                    ></img>
                  </div>
                  <h4 className="mb-1 text-gray-500">
                    <span className="capitalize">
                      {pokemon.pokemon.name.replaceAll("-", " ")}
                    </span>{" "}
                    just ran away :(
                  </h4>
                  <p className="text-center">
                    Don't worry, you can try to catch it again.
                  </p>
                  <div className="text-center mt-5">
                    <button
                      type="button"
                      className="btn capitalize"
                      onClick={() => catchPokemon()}
                    >
                      Try Again!
                    </button>
                  </div>
                </div>
              )}
              {!catchLoading && (
                <>
                  <div className="flex justify-center mt-5">
                    <h6
                      className="text-poke-red cursor-pointer transition duration-300 transform hover:-translate-y-1"
                      onClick={() => onClose()}
                    >
                      Back
                    </h6>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeCatch;
