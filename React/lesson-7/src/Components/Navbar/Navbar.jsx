import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

//todo прочитать про event.PreventDefault()
const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* С помощью тегов a страничка перезагружается */}
        {/* <a href="/home">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/users">
          <li>Users</li>
        </a> */}

        {/* Тег <Link> от react-router-dom */}
        {/* <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link> */}

        {/* <NavLink> от react-router-dom , с добавлением класса active */}
        <NavLink to="/home">
          <li>Главная</li>
        </NavLink>
        <NavLink to="/about">
          <li>О нас</li>
        </NavLink>
        <NavLink to="/users">
          <li>Участники</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
