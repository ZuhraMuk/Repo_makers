import React from "react";
import "./Navbar.css";

const Navbar = props => {
  console.log(props);
  props.func("hi");
  // let sum = 0;
  // function func() {
  //   let num1 = +prompt("Ведите первое число");
  //   let num2 = +prompt("Ведите второе число");
  //   sum = num1 + num2;
  //   console.log(sum);
  // }
  // func();

  return (
    <nav>
      <div className="nav__left">{props.logo}</div>
      <div className="nav__center">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Buy</li>
        </ul>
      </div>
      <div className="nav__right">
        <img
          src="http://img.new.livestream.com/accounts/000000000050d3ad/07aed7cf-7690-48e5-b1e2-8347b1d78bbd.png"
          width={40}></img>
      </div>
    </nav>
  );
};

export default Navbar;

