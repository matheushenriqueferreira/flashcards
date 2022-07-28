import React, { useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import { useNavigate } from  'react-router-dom';

export const NewCard = () => {
  const { userLogged } = useSelector(state => state.user);
  const { id, name } = useSelector(state => state.collection);
  const [cardValue1, setCardValue1] = useState('');
  const [cardValue2, setCardValue2] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleRegisterFlashcard = () => {
    setLoading('Loading');
    const db = collection(firestore, 'flashcards');
    const data = {
      flashcardCollectionId: id,
      front: cardValue1,
      back: cardValue2
    }
    addDoc(db, data)
      .then(() => {
        navigate('/collection');
      })
      .catch((error) => {
        setLoading('Loading');
        alert(error.code);
      })
  }

  return(
    <>
      <Navbar />
      {
        userLogged === true && name !== '' ?//Além do user estar logado ele tem que acessar essa página somente a partir do botão Novo Cartão
        <main className="newCardMain">
          <div className="newCardTitle">
            <span>Coleção - {name}</span>
          </div>
          <div className="newCardContainer">
            <div className="newCardSubtitle">
              <span>Preencha os dados da frente e do verso do flashcard</span>
            </div>
            <div className="newCardFlashcard">
              <div className="newCardFlashcardConte">
                <span>Frente</span>
                <div>
                  <input onChange={(e) => setCardValue1(e.target.value)} value={cardValue1} type={'text'} autoFocus autoComplete="off" />
                </div>
              </div>
              <hr />
              <div className="newCardFlashcardConte">
                <span>Verso</span>
                <div>
                  <input onChange={(e) => setCardValue2(e.target.value)} value={cardValue2} type={'text'} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="newCardBtn">
              {
                cardValue1 !== '' && cardValue2 !== '' && loading === '' ?
                <button onClick={() => handleRegisterFlashcard()} type={'button'}>Cadastrar</button>
                :
                loading === 'Loading' ?
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                :
                <button type={'button'} disabled>Cadastrar</button>
              }
            </div>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}