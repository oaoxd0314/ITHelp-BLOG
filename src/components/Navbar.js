import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="navbar">
      <section>
        <h1>Chris's blog</h1>
        <div className="path">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          |
          <h2>
            <Link to="/About">About</Link>
          </h2>
          |
          <h2>
            <Link to="/Notes">Code Notes</Link>
          </h2>
        </div>
      </section>
    </div>
  );
}
