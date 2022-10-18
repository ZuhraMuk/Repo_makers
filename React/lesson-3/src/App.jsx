import React from "react";
import DayNight from "./Components/DayNight/DayNight";
import SideBar from "./Components/Sidebar/SideBar";
import Users from "./Components/Users/Users";

const App = () => {
  return (
    // <div style={{ display: "flex", justifyContent: "space-between" }}>
    //   <SideBar place="left" />
    //   <SideBar place="right" />
    // </div>
    <>
      {/* <Users /> */}
      <DayNight />
    </>
  );
};

export default App;
