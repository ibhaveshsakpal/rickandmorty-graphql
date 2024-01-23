import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export const Character = () => {
  const params = useParams();
  const { error, loading, data } = useCharacter(params.id);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="character p-10">
      <div className="flex justify-center pt-10">
        <div>
          <img
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-600"
            src={data.character.image}
            alt={data.character.name}
          />
        </div>
        <div className="ml-10">
          <div>
            <label className="text-lg font-semibold">Name: </label>
            <h3 className="inline"> {data.character.name}</h3>
          </div>
          <div>
            <label className="text-lg font-semibold">Id: </label>
            <h3 className="inline"> {data.character.id}</h3>
          </div>
          <div>
            <label className="text-lg font-semibold">Gender: </label>
            <h3 className="inline"> {data.character.gender}</h3>
          </div>
          <div>
            <label className="text-lg font-semibold">Status: </label>
            <h3 className="inline"> {data.character.status}</h3>
          </div>
          <div>
            <label className="text-lg font-semibold">Location: </label>
            <h3 className="inline"> {data.character.location.name}</h3>
          </div>
          <div>
            <label className="text-lg font-semibold">Episodes: </label>
            {data.character.episode &&
              data.character.episode.map((episode, index) => (
                <ul className="ml-10" key={index}>
                  <li className="list-disc">{episode.name}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
