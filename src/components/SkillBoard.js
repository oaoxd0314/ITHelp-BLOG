import React from "react";

export default function SkillBoard({ children, pic }) {
  return (
    <div className="board">
    <img alt=" " src={pic} />
      {children}
    </div>
  );
}
