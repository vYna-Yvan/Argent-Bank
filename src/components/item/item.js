import React from "react";
import "./item.css";

const item = ({ itemTitle, content, imageSrc, altTxt }) => {
  return (
    <div className="item-box">
      <img className="item-icon" src={imageSrc} alt={altTxt} />
      <h2 className="item-title">{itemTitle}</h2>
      <p>{content}</p>
    </div>
  );
};

export default item;
