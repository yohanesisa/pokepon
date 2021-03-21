import { Link, useLocation } from "react-router-dom";
import { FaBook, FaHeart } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <header className="container p-5">
          <div className="bg-white rounded-full p-3 flex items-center">
            <img src="/images/poke-ball-icon.svg" alt="header-icon" className="w-7" />
            <h3 className="ml-2 mr-auto">Pokepon</h3>
            <div
              className={
                `text-gray-400 px-2 ${location.pathname === "/pokedex" ? "text-gray-800" : location.pathname}`
              }
            >
              <Link to="/pokedex">
                <FaBook></FaBook>
              </Link>
            </div>
            <div
              className={
                `text-gray-400 px-2 ${location.pathname === "/my-pokemon" ? "text-gray-800" : location.pathname}`
              }
            >
              <Link to="/my-pokemon">
                <FaHeart></FaHeart>
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
