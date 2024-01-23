import { useNavigate } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl px-4 p-2">Characters List</h1>
      {/* <hr /> */}
      <div className="grid grid-cols-3 pt-5">
        {data.characters.results &&
          data.characters.results.map((char) => (
            <div
              className="border m-4 cursor-pointer hover:scale-110 transition-all duration-100 p-4 shadow-xl max-w-max"
              key={char.id}
              onClick={() => navigate(`/character/${char.id}`)}
            >
              <img src={char.image} alt={char.name} />
              <h4 className="font-semibold text-xl py-2">{char.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};
