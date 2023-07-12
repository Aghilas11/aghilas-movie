import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="home-page">
      <ul>
        <NavLink to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink to="/coup-de-coeur">
          <li>Coup de coeur</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
