import React from "react";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";
import InfoBoard from "../components/InfoBoard";
import Experience from "../components/Experience";
import Article from "../components/Article";
import { useSelector } from "react-redux";

export default function About() {
  const article = useSelector((state) => state.Note.article);
  const experience = useSelector((state) => state.Note.experience);

  //about me
  return (
    <div>
      <FeaturedBoard title="About Me" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={null}>
        <Experience
          experience={experience}
          title="Experence"
          className="subtitle"
        />
      </InfoBoard>
      <InfoBoard pic={null}>
        <Article
          article={article}
          title="Something Else"
          className="subtitle"
        />
      </InfoBoard>
    </div>
  );
}
