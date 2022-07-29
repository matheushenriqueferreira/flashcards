import React, { useEffect, useState } from "react";
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import { Modal } from '../../components/Modal';

export const Collection = () => {
  const { userLogged } = useSelector(state => state.user);
  const { id, name } = useSelector(state => state.collection);
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState([]); 
  const { refreshPage } = useSelector(state => state.refreshPage);

  useEffect(() => {
    if(userLogged === true && id !== '') {
      const myFlashcards = [];
      const q = query(collection(firestore, "flashcards"), where("flashcardCollectionId", "==", id));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            ...doc.data(),
            id: doc.id
          }
          myFlashcards.push(data);
        });
        setFlashcards(myFlashcards);
      });
    }
  }, [refreshPage]);

  return(
    <>
      <Navbar />
      {
        userLogged === true && id !== '' ?
        <main className="collectionMain">
          <div className="collectionMainTitle">
            <span>Coleção - {name}</span>
          </div>
          {
            flashcards.length > 0 ?
            <fieldset className="flashcardSearch">
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <input id="inputFlashcardSearch" type={'text'} placeholder={'Busque por um elemento'} />
              </div>
            </fieldset>
            :
            <fieldset className="flashcardSearch" disabled>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <input id="inputFlashcardSearch" type={'text'} placeholder={'Busque por um elemento'} />
              </div>
            </fieldset>
          }
          <div className="btnNewCard">
            <button onClick={() => navigate('/newCard')} type="button" className="collectionMainBtnStyle">Novo cartão</button>
          </div>
          <div className="collectionMainCards">
            {
              flashcards.map((item, index) => <Card key={item.id + index} id={item.id} front={item.front} back={item.back}/>)
            }
          </div>
          <div className="btnPlay">
            {
              flashcards.length > 0 ?
              <button type="button" className="collectionMainBtnStyle">Jogar!</button>
              :
              <button type="button" className="collectionMainBtnStyle" disabled>Jogar!</button>
            }
          </div>
          <Modal type={'flashcard'} title={'Excluir flashcard'} text={'Tem certeza que deseja remover esse registro?'}/>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}