import React from "react";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Experience from "../components/Experience";
import Article from "../components/Article"

export default function About() {
  let article = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
  ];

  let experience = [
    {
      year: "2016 Sep",
      title: "國立高雄科技大學",
      subtitle: "開始就讀",
      post: "於2016年就讀國立高雄科技大學資訊管理系(原高雄應用科技大學)",
    },
    {
      year: "2017 Dec - 2018 Dec",
      title: "資訊管理系學會",
      subtitle: "任職期間",
      post:
        "在此期間累積多次舉辦多次中小型活動的經驗，包括企劃書撰寫、場地布置、經費估算、流程設計、團隊合作和解決問題等等",
    },
    {
      year: "2018 Jun - 2019 May",
      title: "專題競賽",
      subtitle: "wadon",
      post:
        "採用flutter做跨系統的專案，此專案旨在設計一個資訊流通的平台，讓高科大的活動資訊能夠更容易舉辦和執行。",
    },
    {
      year: "2020 Jun",
      title: "國立高雄科技大學",
      subtitle: "畢業",
      post:
        "於2020年畢業於國立高雄科技大學，熟悉前端網頁架構、撰寫以及部分後端設計和資料庫鑽寫連結。",
    },
  ];
  //about me
  return (
    <div>
      <FeaturedBoard title="About Me" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={null}>
        <Experience experience={experience} title="Experence" className="subtitle" />
      </InfoBoard>
      <InfoBoard pic={null}>
        <Article article={article} title="Something Else" className="subtitle" />
      </InfoBoard>
    </div>
  );
}
