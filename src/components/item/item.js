import React from "react";
import "./item.css";
import ChatIcon from "../../assets/icon/icon-chat.png";
import MoneyIcon from "../../assets/icon/icon-money.png";
import SecurityIcon from "../../assets/icon/icon-security.png";

const Item = ({ itemTitle, content, imageSrc, altTxt }) => {
  return (
    <div className="item-box">
      <img className="item-icon" src={imageSrc} alt={altTxt} />
      <h2 className="item-title">{itemTitle}</h2>
      <p>{content}</p>
    </div>
  );
};

const data = [
  {
    itemTitle: "You are our #1 priority",
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    imageSrc: ChatIcon,
    altTxt: "chat-icon",
  },
  {
    itemTitle: "More savings means higher rates",
    content:
      "The more you save with us, the higher your interest rate will be!",
    imageSrc: MoneyIcon,
    altTxt: "money-icon",
  },
  {
    itemTitle: "Security you can trust",
    content:
      "We use top of the line encryption to make sure your data and money are always safe.",
    imageSrc: SecurityIcon,
    altTxt: "security-icon",
  },
];

const ItemList = () => (
  <div className="item-list">
    {data.map((item, index) => (
      <Item
        key={index}
        itemTitle={item.itemTitle}
        content={item.content}
        imageSrc={item.imageSrc}
        altTxt={item.altTxt}
      />
    ))}
  </div>
);
export default ItemList;
