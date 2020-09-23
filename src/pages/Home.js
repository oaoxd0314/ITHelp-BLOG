import React from "react";
import InfoBoard from "../components/InfoBoard";
import FeaturedBoard from "../components/FeaturedBoard";
import Banner from "../components/Banner";
import Article from "../components/Article";
import SkillBoard from "../components/SkillBoard"
import pic from "../images/side1.jpg";
import pic2 from "../images/side2.jpeg";
// home.js

export default function Home() {
    let article =["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend."]
    
    const skill =['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet']
  
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
