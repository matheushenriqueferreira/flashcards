import React from "react";
import './styles.css';


export const FlashcardsCollection = () => {
  return(
    <div id="flashcardsCollection">
      <div>
        <i className="fa-solid fa-pencil"></i>
      </div>
      <div>
        <img className="collectionImage" src={''} alt={'Imagem que ilustra a coleção criada'}/>
      </div>
      <div>
        <span>Nome da Coleção</span>
      </div>
      <div>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
}