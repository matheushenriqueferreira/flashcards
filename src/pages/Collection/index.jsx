import React from "react";
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const Collection = () => {
  const { userLogged, userEmail } = useSelector(state => state.user);
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="collectionMain">
          <div className="collectionMainTitle">
            <span>Coleção - Objetos</span>
          </div>
          <fildset className="flashcardSearch">
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <input id="inputFlashcardSearch" type={'text'} placeholder={'Busque por um elemento'} />
            </div>
          </fildset>
          <div className="btnNewCard">
            <button type="button" className="collectionMainBtnStyle">Novo cartão</button>
          </div>
          <div className="collectionMainCards">
            <span>Flashcard 1</span>
            <span>Flashcard 2</span>
          </div>
          <div className="btnPlay">
            <button type="button" className="collectionMainBtnStyle">Jogar</button>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}