import React from "react";

// css
import "../css/ItemListContainer.scss";

// components
import Item from "../components/Item";


function ItemListContainer({ items }) {  // props를 구조분해 할당해 items만 가져와 파라미터에 삽입한 것.
  // console.log("asdf", props)
  // console.log("items", items.id)
  const handleClick = () => {

  }
  return (
    <div id="ItemListContainer_container">
      <div id="ItemListContainer_body">
        <div id="ItemListContainer_title">상품 리스트</div>
        {items.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default ItemListContainer;