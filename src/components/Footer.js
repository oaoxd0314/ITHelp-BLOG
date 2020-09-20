import React from "react";

export default function footer() {
  return (
    <div className="footer">
      <div className="text">
        <h1>Chris's Blog</h1>
        <div className="copyright">
          {"Copyright © Chris Wang "}
          {new Date().getFullYear()}
          {"."}
        </div>
      </div>
    </div>
  );
}
