import React from "react";
import { useDispatch } from "react-redux";
import { deleteCollection } from "../../redux/collectionSlice";
import './styles.css';


export const FlashcardsCollection = ({id, collectionName, collectionImageUrl}) => {
  const dispatch = useDispatch();

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
        <i className="fa-regular fa-trash-can" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => dispatch(deleteCollection({id: id, imageUrl: collectionImageUrl}))}></i>
      </div>
    </div>
  );
}