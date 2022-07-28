import React from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from "react-router-dom";

export const NewCard = () => {
  const { userLogged } = useSelector(state => state.user);
  const { name } = useSelector(state => state.collection);
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
                  <input type={'text'} autoFocus autoComplete="off" />
                </div>
              </div>
              <hr />
              <div className="newCardFlashcardConte">
                <span>Verso</span>
                <div>
                  <input type={'text'} autoComplete="off" />
                </div>
              </div>
            </div>
            <div className="newCardBtn">
              <button type={'button'}>Cadastrar </button>
            </div>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}