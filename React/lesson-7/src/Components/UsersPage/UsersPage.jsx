import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UsersPage = () => {
  const [pokArr, setPokArr] = useState([]);
  async function getPokemon() {
    const { data } = await axios("https://pokeapi.co/api/v2/pokemon");
    // console.log(data);
    setPokArr(data.results);
  }
  // getPokemon();
  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokArr);
  return (
    <>
      <ul>
        {pokArr.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
