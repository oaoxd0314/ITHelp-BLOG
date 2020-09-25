import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

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
            <Link className="btn-primary" to={`/rooms/${title}`}>
              看更多
            </Link>
          </div>
        );
      })}
    </div>
  );
}
