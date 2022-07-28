import React, { useEffect, useState } from "react";
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';

export const Collection = () => {
  const { userLogged } = useSelector(state => state.user);
  const { id, name } = useSelector(state => state.collection);
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState([]); 
  
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
  }, []);

  return(
    <>
      <Navbar />
      {
        userLogged === true && id !== '' ?
        <main className="collectionMain">
          <div className="collectionMainTitle">
            <span>Coleção - {name}</span>
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
            <button onClick={() => navigate('/newCard')} type="button" className="collectionMainBtnStyle">Novo cartão</button>
          </div>
          <div className="collectionMainCards">
            {
              flashcards.map((item, index) => <Card key={item.id + index} id={item.id} front={item.front} back={item.back}/>)
            }
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