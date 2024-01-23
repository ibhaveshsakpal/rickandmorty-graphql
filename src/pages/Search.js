import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [search, setSearch] = useState("");
  const [getCharacterLocations, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name: search,
      },
    }
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl text-center pb-5">
        Search for character locations
      </h2>
      <div className="flex flex-row justify-center pb-5">
        <input
          className="border p-1.5 shadow-lg rounded-md w-2/3"
          type="text"
          placeholder="search locations by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={() => getCharacterLocations()}
          className="p-1.5 ml-2 bg-blue-500 rounded-md text-white"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col justify-center items-center pt-2">
        {search ? (
          <div className="w-2/3">
            {error && <p>Something went wrong!</p>}
            {loading && <p>Loading...</p>}
            {data?.characters?.results.length > 0 ? (
              <ul className="">
                {search && (
                  <h4 className="text-xl font-semibold py-4">
                    showing results for {search ? `"${search}"` : ""}
                  </h4>
                )}
                {data.characters.results.map((char, index) => (
                  <li key={index} className="border p-4">
                    {char.location.name}
                  </li>
                ))}
              </ul>
            ) : (
              !loading && (
                <h3 className="text-xl text-gray-500">No results found</h3>
              )
            )}
          </div>
        ) : (
          <h3 className="text-xl text-gray-500">No results found</h3>
        )}
      </div>
    </div>
  );
}
