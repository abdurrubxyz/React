import React from "react";
import mountain from '../assets/mountain.jpg'

// (Props) - Props
const Hello = (Props) => {
  return (
    <>
      <div className="card">
        <img src={mountain} alt="" />
        <h1 className="title">{Props.title}</h1>
        <p className="para">{Props.para}</p>
      </div>
    </>
  );
};

export default Hello;
