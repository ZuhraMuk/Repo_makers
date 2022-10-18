import React, { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  // const [time, setTime] = useState(new Date().getMinutes());
  // console.log(time);
  const [time, setTime] = useState(false);
  console.log(useState());

  console.log(time);

  return (
    <div className={time ? "night" : "day"}>
      <button onClick={() => setTime(!time)}>click</button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      mollitia, explicabo, architecto perferendis assumenda suscipit praesentium
      laborum recusandae animi unde dolores molestiae harum nemo voluptas! Atque
      dignissimos aliquid nam tempora odio harum culpa aperiam ab fuga nihil ex,
      voluptatem adipisci cumque. Minima odio eos rerum ratione libero! Iste
      amet quaerat illum vero dolore! Ducimus dignissimos nobis delectus
      voluptate sint, eveniet deserunt perferendis blanditiis fuga, beatae
      doloribus aut perspiciatis enim eligendi molestiae vel itaque temporibus
      similique quo quisquam sit consectetur praesentium quaerat nemo. Odio
      dicta tempore voluptatem, blanditiis, perspiciatis nulla mollitia
      accusantium a spernatur est vitae ab officia, soluta expedita ut
      repudiandae?
    </div>
  );
};

export default DayNight;
