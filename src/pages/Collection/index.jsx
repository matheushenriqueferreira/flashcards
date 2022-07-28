import React from "react";
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Card } from "../../components/Card";

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
          <fieldset className="flashcardSearch">
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div>
              <input id="inputFlashcardSearch" type={'text'} placeholder={'Busque por um elemento'} />
            </div>
          </fieldset>
          <div className="btnNewCard">
            <button type="button" className="collectionMainBtnStyle">Novo cartão</button>
          </div>
          <div className="collectionMainCards">
            <Card />
            <Card />
          </div>
          <div className="btnPlay">
            <button type="button" className="collectionMainBtnStyle">Jogar!</button>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}