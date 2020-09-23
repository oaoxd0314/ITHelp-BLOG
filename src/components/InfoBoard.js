import React from "react";

export default function InfoBoard({className,children,pic}) {
  return (
    <div className={className}>
      {children}
      <img alt=" " src={pic} />
    </div>
  );
}

InfoBoard.defaultProps={
  className:"board-nopic"
}
