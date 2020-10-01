import React from "react";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Note from "../components/Note";
import { useSelector } from "react-redux";
export default function Notes() {

  const article = useSelector((state) => state.Note.article);
  const Notes = useSelector((state) => state.Note.Notes);


  return (
    <div>
      <FeaturedBoard title="Code Notes" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={null}>
        <Note note={Notes} title="Notes" className="subtitle" />
      </InfoBoard>
    </div>
  );
}
