import React from 'react';
 { Link } from "gby";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="-section about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footer-section links">
        <h2>Links</h2>
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
    </div>
    <div className="footer-bottom">
      <p>Copyright © 2023 My Company. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;