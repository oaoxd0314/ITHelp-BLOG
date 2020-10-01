import React from "react";
import InfoBoard from "../components/InfoBoard";
import FeaturedBoard from "../components/FeaturedBoard";
import Banner from "../components/Banner";
import Article from "../components/Article";
import SkillBoard from "../components/SkillBoard";
import pic from "../images/side1.jpg";
import pic2 from "../images/side2.jpeg";
import { useSelector  } from "react-redux";

// home.js

export default function Home() {

  const article = useSelector((state) => state.Note.article);
  const skill = useSelector((state) => state.Note.skill);

  return (
    <div>
      <FeaturedBoard title="FeaturedBoard" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={pic} className="board">
        <Article article={article} title="About Me" className="subtitle" />
      </InfoBoard>
      <SkillBoard pic={pic2}>
        <Article article={skill} title="Skill" className="subtitle" />
      </SkillBoard>
    </div>
  );
}
