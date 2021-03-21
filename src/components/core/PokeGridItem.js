const PokeGridItem = ({ onClick, pokemon }) => {
  return (
    <div
      className="rounded-2xl p-2 text-center transition duration-300 hover:shadow-xl transform hover:-translate-y-1"
      onClick={() => onClick(pokemon.name, pokemon.nickname)}
    >
      <div
        style={{
          width: "90px",
          height: "90px",
        }}
        className="mx-auto"
      >
        <img
          style={{
            width: "90px",
            height: "90px",
          }}
          src={pokemon.image}
          alt={pokemon.name}
        ></img>
      </div>

      <h6 className="text-sm text-gray-400">
        #{pokemon.id.toString().padStart(3, "0")}
      </h6>
      <h5 className="text-gray-700 capitalize">{pokemon.nickname ? pokemon.nickname : pokemon.name.replaceAll("-", " ")}</h5>
    </div>
  );
};

export default PokeGridItem;
