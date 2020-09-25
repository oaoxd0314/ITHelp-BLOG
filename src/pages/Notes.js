import React from "react";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Note from "../components/Note";

export default function Notes() {
  let article = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
  ];

  let Notes = [
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
