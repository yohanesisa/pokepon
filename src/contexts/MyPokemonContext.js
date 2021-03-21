import { useReducer, useEffect, createContext } from "react";

const reducer = (state, action) => {
  return action;
};

const initialState = [];

const localState = JSON.parse(localStorage.getItem("myPokemon"));

const MyPokemonContext = createContext();

function MyPokemonProvider(props) {
  const [myPokemon, setMyPokemon] = useReducer(
    reducer,
    localState || initialState
  );

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  return (
    <MyPokemonContext.Provider value={{ myPokemon, setMyPokemon }}>
      {props.children}
    </MyPokemonContext.Provider>
  );
}

export { MyPokemonContext, MyPokemonProvider };
