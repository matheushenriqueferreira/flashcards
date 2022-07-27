import React from "react";
import { useDispatch } from "react-redux";
import { deleteCollection, editCollection } from "../../redux/collectionSlice";
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const FlashcardsCollection = ({id, collectionName, collectionDescription, collectionImageUrl}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return(
    <div id="flashcardsCollection">
      <div>
        <i className="fa-solid fa-pencil" onClick={() => {{
          dispatch(editCollection({id: id, name: collectionName, description: collectionDescription, imageUrl: collectionImageUrl}))
          navigate('/editCollection')
        }}}></i>
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