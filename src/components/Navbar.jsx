import React from 'react';

const Navbar = ({ header1, header2 }) => (
  <header>
    <nav>
      <a id="hiofNav">{header1}</a>
      <a id="userNav">{header2}</a>
    </nav>
  </header>
);

export default Navbar;
