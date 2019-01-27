import React from "react";
import "./style.css";

function CartoonCard(props) {
  return (
      <div  data-id={props.id} onClick={props.onClick} className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
  );
}

export default CartoonCard;
