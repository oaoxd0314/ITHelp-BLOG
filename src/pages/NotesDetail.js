import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Title from "../components/Title";
import { useSelector } from "react-redux";
export default function NotesDetail() {

  const article = useSelector((state) => state.Note.article);
  const Notes = useSelector((state) => state.Note.Notes);

  // 接收 param
  let { param } = useParams({});
  // 設定 state
  const [note, setNote] = useState([]);

  //使用 filter 找到要的內容
  useEffect(() => {
    setNote(...Notes.filter((item) => item.title === { param }.param));
  }, []);

  return (
    <div>
      <FeaturedBoard title="Note Title" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={null}>
        <section className="note">
          <Title title={note.title} className="subtitle" />
          <div className="note-datetime">by Chris {note.date}</div>
          <div className="note-area">
            <p className="note-chapter">chapter 1</p>
            <article className="note-article">{note.article}</article>
            <article className="note-article">{note.article}</article>
            <p className="note-bold">粗體</p>
            <p className="note-slash">斜體</p>
          </div>
        </section>
      </InfoBoard>
    </div>
  );
}
