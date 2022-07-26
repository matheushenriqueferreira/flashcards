import React from "react";
import './styles.css';


export const FlashcardsCollection = ({collectionName, collectionImageUrl}) => {
  return(
    <div id="flashcardsCollection">
      <div>
        <i className="fa-solid fa-pencil"></i>
      </div>
      <div>
        <img className="collectionImage" src={collectionImageUrl} alt={'Imagem que ilustra a coleção criada'}/>
      </div>
      <div>
        <span>{collectionName}</span>
      </div>
      <div>
        <i className="fa-regular fa-trash-can" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
      </div>
    </div>
  );
}