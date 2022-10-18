import React from "react";
import "./SideBar.css";

const SideBar = props => {
  // if (props.place === "left") {     // Вариант 1
  //   return (
  //     <div className="sidebar" style={{ backgroundColor: "green" }}>
  //       SideBar
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="sidebar" style={{ backgroundColor: "purple" }}>
  //       SideBar
  //     </div>
  //   );
  // }

  return (
    <div
      className={props.place === "left" ? "example1" : "example2"} //Вариант 3
      // style={{ backgroundColor: props.place === "left" ? "green" : "purple" }} // Вариант 2
    >
      SideBar
    </div>
  );
};

export default SideBar;
