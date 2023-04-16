import { useEffect, useState } from "react";
import { fetchAllPlayers } from "./puppies";
import { useNavigate } from "react-router-dom";
import React from "react";

//meant to get  all puppies and show them
export default function Alldogs() {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getdogs() {
      const Plist = await fetchAllPlayers();
      setDogs(Plist);
    }
    getdogs();
  }, []);
  return (
    <div>
      {dogs.map((dog) => {
        return (
          <p
            key={dog.id}
            onClick={() => {
              navigate(`/${dog.id}`);
            }}
          >
            {dog.name}
          </p>
        );
      })}
    </div>
  );
}
