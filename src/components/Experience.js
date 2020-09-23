import React from "react";
import Title from "./Title";
import { Timeline, Event } from "react-timeline-scribble";

export default function Experience({ experience, title, className }) {
  return (
    <div className="experience">
      <Title title={title} className={className} />
      <div className="timeline">
        {experience.map((item, index) => {
          return (
            <Timeline key={index}>
              <Event
                interval={item.year}
                title={item.title}
                subtitle={item.subtitle}
              >
                {item.post}
              </Event>
            </Timeline>
          );
        })}
      </div>
    </div>
  );
}
