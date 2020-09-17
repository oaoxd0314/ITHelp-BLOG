import React from "react";
import "./App.css";
import FeaturedBoard from "./components/FeaturedBoard";
import Footer from "./components/Footer";
import InfoBoard from "./components/InfoBoard";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Article from "./components/Article";
import SkillBoard from "./components/SkillBoard"
import pic from "./images/side1.jpg";
import pic2 from "./images/side2.jpeg";

export default function App() {
  let article =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.";

  return (
    <div>
      <Navbar />
      <FeaturedBoard title="FeaturedBoard" className="title">
        <Banner article={article} />
      </FeaturedBoard>
      <InfoBoard pic={pic} >
        <Article article={article} title="About Me" className="subtitle"/>
      </InfoBoard>
      <SkillBoard pic={pic2} >
        <Article article={article} title="Skill" className="subtitle"/>
      </SkillBoard>
      <Footer />
    </div>
  );
}
