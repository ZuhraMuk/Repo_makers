import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

const UserDetails = () => {
  const [onePok, setOnePok] = useState(null);

  async function getPokemonDetails() {
    const detailsData = await axios(
      "https://pokeapi.co/api/v2/pokemon/venusaur"
    );
    // console.log(detailsData);
    setOnePok(detailsData);
  }
  //   getPokemonDetails();
  useEffect(() => {
    getPokemonDetails();
  }, []);
  console.log(onePok);
  return (
    <div>
      {onePok ? (
        <>
          <img src={onePok.data.sprites.front_default} alt="" />
          <h2>{onePok.data.name}</h2>
          <h3>{onePok.data.height} см</h3>
        </>
      ) : (
        <PacmanLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default UserDetails;
