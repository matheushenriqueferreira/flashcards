import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Navigate } from 'react-router-dom';
import './styles.css';

export const EditCard = () => {
  const { userLogged } = useSelector(state => state.user);
  const { name } = useSelector(state => state.collection);
  const { id, front, back } = useSelector(state => state.flashcard);
  const [cardValue1, setCardValue1] = useState(front);
  const [cardValue2, setCardValue2] = useState(back);
  const [loading, setLoading] = useState('');
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="editCardMain">
          <div className="editCardTitle">
            <span>Coleção - {name}</span>
          </div>
          <div className="editCardContainer">
            <div className="editCardSubtitle">
              <span>Atualize os dados da frente e do verso do flashcard</span>
            </div>
            <div className="editCardFlashcard">
              <div className="editCardFlashcardConte">
                <span>Frente</span>
                <div>
                  <input onChange={(e) => setCardValue1(e.target.value)} value={cardValue1} type={'text'} autoFocus autoComplete="off" />
                </div>
              </div>
              <hr />
              <div className="editCardFlashcardConte">
                <span>Verso</span>
                <div>
                  <input onChange={(e) => setCardValue2(e.target.value)} value={cardValue2} type={'text'} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="editCardBtn">
              {
                cardValue1 !== '' && cardValue2 !== '' && loading === '' ?
                <button onClick={() => handleRegisterFlashcard()} type={'button'}>Cadastrar</button>
                :
                loading === 'Loading' ?
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                :
                <button type={'button'} disabled>Salvar</button>
              }
            </div>
          </div>
        </main>
        :
        <Navigate to={'/collection'} />
      }
    </>
  );
}