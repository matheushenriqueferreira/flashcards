import React from "react";
import { useDispatch } from "react-redux";
import { deleteCollection, editCollection, goToCollectionPage } from "../../redux/collectionSlice";
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
        <img onClick={() => {
          dispatch(goToCollectionPage({id: id, name: collectionName})),
          navigate('/collection')
        }} className="collectionImage" src={collectionImageUrl} alt={'Imagem que ilustra a coleção criada'}/>
      </div>
      <div>
        <span onClick={() => {
          dispatch(goToCollectionPage({id: id, name: collectionName})),
          navigate('/collection')
        }}>{collectionName}</span>
      </div>
      <div>
        <i className="fa-regular fa-trash-can" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => dispatch(deleteCollection({id: id, imageUrl: collectionImageUrl}))}></i>
      </div>
    </div>
  );
}