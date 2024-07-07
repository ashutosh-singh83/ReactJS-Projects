import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">location</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>
        <button type="submit">Login</button>
      </nav>
    </>
  );
};

export default Navbar;
