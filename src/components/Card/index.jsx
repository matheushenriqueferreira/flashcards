import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editCard, deleteCard } from '../../redux/flashcardSlice';
import './styles.css';

export const Card = ({id, front, back}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return(
    <div className="componentCard">
      <div className="componentCardName">
        <span>{front}</span>
      </div>
      <div className="componentCardBtn">
        <div className="componentCardIconPencil">
          <i onClick={() => {
            dispatch(editCard({id: id, front: front, back: back})),
            navigate('/editCard')
          }} className="fa-solid fa-pencil"></i>
        </div>
        <div className="componentCardIconTrash">
          <i onClick={() => dispatch(deleteCard({id: id}))} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}