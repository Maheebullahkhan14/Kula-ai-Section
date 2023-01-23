import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Nav = () => {
  return (
    <>
      <div className="Nav">
        <div className="Nav-links">
          <img src={Logo}></img>
          <ul>
            <li className="Product">
              Product <i class="fa-solid fa-chevron-down"></i>
              <ul className="Productul">
                <li>Kula Outreach</li>
                <li>Kula Outreach</li>
              </ul>
            </li>

            <li>Our Story</li>
            <li className="Resources">
              Resources <i class="fa-solid fa-chevron-down"></i>
            </li>
          </ul>
        </div>
        <button>Book a Demo</button>
      </div>
    </>
  );
};

export default Nav;
