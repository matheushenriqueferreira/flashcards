import React from "react";
import './styles.css'

export const Card = () => {
  return(
    <div className="componentCard">
      <div className="componentCardName">
        <span>Árvore</span>
      </div>
      <div className="componentCardBtn">
        <div>
          <i className="fa-solid fa-pencil"></i>
        </div>
        <div>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}