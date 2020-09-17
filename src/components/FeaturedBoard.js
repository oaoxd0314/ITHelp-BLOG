import React from "react";
import Title from "./Title";

export default function FeaturedBoard({ children, title,className }) {
  return (
    <div className="featuredboard">
      <div className="coverboard">
      <Title title={title} className={className}/>
      {children}
      </div>
    </div>
  );
}
