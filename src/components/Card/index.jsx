import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editCard } from '../../redux/flashcardSlice';
import './styles.css'

export const Card = ({id, front, back}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return(
    <div className="componentCard">
      <div className="componentCardName">
        <span>{front}</span>
      </div>
      <div className="componentCardBtn">
        <div>
          <i onClick={() => {
            dispatch(editCard({id: id, front: front, back: back})),
            navigate('/editCard')
          }} className="fa-solid fa-pencil"></i>
        </div>
        <div>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
}