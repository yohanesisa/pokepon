import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { MyPokemonContext } from "./contexts/MyPokemonContext";

import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import Welcome from "./components/pages/Welcome";
import Pokedex from "./components/pages/Pokedex";
import MyPokemon from "./components/pages/MyPokemon";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  const [myPokemon, setMyPokemon] = useState([]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div
          className="App bg-auto bg-center bg-repeat bg-fixed"
          style={{
            backgroundImage: `url("/images/poke-ball-seamless-bg.jpg")`,
          }}
        >
          <Toaster />

          <Header></Header>

          <MyPokemonContext.Provider value={{ myPokemon, setMyPokemon }}>
            <Route path="/" exact component={Welcome} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/my-pokemon" component={MyPokemon} />
          </MyPokemonContext.Provider>

          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
