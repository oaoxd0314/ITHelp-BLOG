import React, { useState} from "react";

import Title from "./Title";

export default function Article({ article,title,className }) {

  const [text,setText]= useState(article)


  return (
    <div className="article">
      <Title title={title} className={className} />
      {text.map((item,index)=>{
        if(text.length>1){
          return <section key={index}><p >{item}</p></section>
        }
          return <article key={index}>{item}</article>
      })}
    </div>
  );
}
