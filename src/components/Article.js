import React, { useState} from "react";

import Title from "./Title";

export default function Article({article,title,className}) {

  return (
    <div className="article">
      <Title title={title} className={className} />
      {/* changed not using useState now */}
      {article.map((item,index)=>{ 
        if(article.length>1){     
          {/* 判別是否為段落 */}
          return <section key={index}><p >{item}</p></section>
        }
          return <article key={index}>{item}</article>
      })}
    </div>
  );
}
