import React from "react";
import "./style.css";

function CartoonCard(props) {
  return (
      <div  className="img-container">
        <img alt={props.name} src={props.image} data-id={props.id} onClick={props.onClick}/>
      </div>
  );
}

export default CartoonCard;
