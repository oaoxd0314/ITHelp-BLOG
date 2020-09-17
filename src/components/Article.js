import React from "react";
import Title from "./Title";

export default function Article({ article,title,className }) {
  return (
    <div className="article">
      <Title title={title} className={className} />
      <article>{article}</article>
    </div>
  );
}
