import React, { useState } from "react";

const Users = () => {
  const [logged, setLogged] = useState(false);
  console.log(logged);
  let obj1 = {
    color: "red",
    fontSize: "40px",
    backgroundColor: "pink",
  };
  let obj2 = {
    color: "brown",
    fontSize: "60px",
    backgroundColor: "yellow",
  };
  const [style, setStyle] = useState(obj1);

  return (
    <>
      <h1 style={style}>Welcome {logged ? "Mirdin" : "User"}!</h1>
      <button
        onClick={() => {
          setLogged(true);
        }}>
        Click
      </button>
      <button onClick={() => setStyle(obj1)}>style-1</button>
      <button onClick={() => setStyle(obj2)}>style-2</button>
    </>
  );
};

export default Users;
