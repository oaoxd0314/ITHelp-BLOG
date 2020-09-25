import React from "react";
import Title from "./Title";

export default function Note({ note, title, className }) {
  return (
    <div className="note-container">
      <Title title={title} className={className} />
      {note.map((item, index) => {
        return (
          <div key={index} className="note-overview">
            <h1>title:{item.title}</h1>
            <section>{item.overview}</section>
            <p>{item.date}</p>
            <button className="btn-primary">看更多</button>
          </div>
        );
      })}
    </div>
  );
}
