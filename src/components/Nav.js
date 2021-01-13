import React from "react";

// css
import "../css/Nav.scss";

function Nav() {
  return (
    <div id="nav">
      <span id="title">
        <span id="name">Potter's Market</span>
      </span>
      <div id="menu">
        <span>상품리스트</span>
        <span>장바구니</span>
      </div>
    </div>
  )
}

export default Nav;