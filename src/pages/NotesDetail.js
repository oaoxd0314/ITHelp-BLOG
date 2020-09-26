import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Title from "../components/Title";

export default function NotesDetail() {
  let article = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
  ];

  const Notes = [
    {
      title: "Lorem", //大標
      subtitle: "ipsum dolor sit", // 副標
      date: "2020/09/24", // 日期
      overview: "consectetur adipiscing elit. Donec pretium ante erat", //概述
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
    },
    {
      title: "TITLE2",
      subtitle: "ipsum dolor sit",
      date: "2020/09/25",
      overview: "consectetur adipiscing elit. Donec pretium ante erat",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
    },
    {
      title: "TITLE3",
      subtitle: "ipsum dolor sit",
      date: "2020/09/26",
      overview: "consectetur adipiscing elit. Donec pretium ante erat",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
    },
  ];

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
