import React from "react";


export default function InfoBoard({ children,pic}) {
  return (
    <div className="board">
      {children}
      <img alt=" " src={pic} />
    </div>
  );
}
