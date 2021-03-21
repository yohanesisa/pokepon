import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
    >
      <img src="images/pokemon-logo.png" className="w-80" alt="pokemon" />
      <h3 className="mb-10 text-gray-700 text-2x">~ Gashapon ~</h3>
      <Link to="/pokedex">
        <button
          type="button"
          className="btn animate-bounce"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
