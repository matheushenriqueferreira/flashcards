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
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}