import React from "react";

// css
import "../css/item.scss";

export default function Item({ item }) {
  console.log("asdf", item)
  return (
    <div key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name} />
      <span className="item-name">{item.name}</span>
      <span className="item-price">{item.price}</span>
      <button>장바구니 담기</button>
    </div>
  )
}