import React from 'react';
import { Link } from "gatsby";

const Navbar = () => (
  <nav>
    <div className="nav-content">
      <Link to="/" className="logo">
        My Company
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;