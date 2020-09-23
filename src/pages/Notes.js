import React from "react";
import Banner from "../components/Banner";
import FeaturedBoard from "../components/FeaturedBoard";

export default function Notes() {
  let article = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend.",
  ];
  return (
    <FeaturedBoard title="About Me" className="title">
      <Banner article={article} />
    </FeaturedBoard>
  );
}
