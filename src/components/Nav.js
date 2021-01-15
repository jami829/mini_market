import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "../css/Nav.scss";

function Nav() {
  const [count, setCount] = useState(0);
  return (
    <div id="nav">
      <span id="title">
        <span id="name">Potter's Market</span>
      </span>
      <div id="menu">
        <NavLink to="/" className="item_list_container">상품리스트</NavLink>
        <NavLink to="/shoppingcart" className="item_list_container">
          장바구니 <span id="nav-item-counter"> {count} </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav;