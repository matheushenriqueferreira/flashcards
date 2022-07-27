import React, { useEffect, useState } from "react";
import './styles.css'
import { Navbar } from "../../components/Navbar";
import { useSelector } from "react-redux";
import { FlashcardsCollection } from "../../components/flashcardsCollection";
import { useNavigate } from "react-router-dom";
import { firebase, firestore } from '../../firebase/firebase';
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { Modal } from '../../components/Modal';
import { getAuth } from "firebase/auth";

export const Home = () => {
  const { userEmail, userLogged } = useSelector(state => state.user);
  const { refreshPage } = useSelector(state => state.refreshPage);
  const navigate = useNavigate();
  const [flashcardCollection, setFlashcardCollection] = useState([]);

  const handleClickFlashcard1 = () => {
    const homeContainer2 = document.querySelector('.homeContainer2');
    const homeContainer3Yellow = document.querySelector('.homeContainer3Yellow');
    const whiteArrow = document.querySelector('.fa-right-long');
    const homeFlashcard1 = document.querySelector('#homeFlashcard1');
    const homeFlashcard2 = document.querySelector('#homeFlashcard2');
    homeFlashcard1.style.cursor = 'auto';
    homeContainer2.style.opacity = '0';
    homeContainer3Yellow.style.opacity = '0';
    whiteArrow.style.opacity = '1';
    homeFlashcard2.style.opacity = '1';
  }

  
  useEffect(() => {
    if(userLogged === true) {
      const myCollections = [];
      getAuth(firebase);//Caso A pagina seja recarregada ele carrega as informações de autenticação
      const db = collection(firestore, 'flashcardCollection');
      const q = query(db, where("userEmail", "==", userEmail));//Query para trazer do bd apenas flshcardsCollection que estejam atreladas ao email do user
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            ...doc.data(),
            id: doc.id  
          }
          myCollections.push(data);
        })
        setFlashcardCollection(myCollections);
      });
    }
  }, [refreshPage])

  return(
    <>
      <Navbar page={'Home'} />
      {
        userLogged === false ?
        <main className="homeMain">
          <div className="homeContainer1">
            <h1>Mind Booster</h1>
            <span>Treine a sua memória com Flash Cards!</span>
          </div>
          <div className="homeContainer2">
            <span>Como se chama carro em inglês?</span>
          </div>
          <div className="homeContainer3">
            <div className="homeContainer3Yellow">
              <span>Clique no cartão para descobrir</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div>
              <div className="homeFlashcards" id="homeFlashcard1" onClick={() => handleClickFlashcard1()}>
                <span>Carro</span>
              </div>
              <i className="fa-solid fa-right-long"></i>
              <div className="homeFlashcards" id="homeFlashcard2">
                <span>Carro</span>
                <hr></hr>
                <span>Car</span>
              </div>
            </div>
          </div>
        </main>
        :
        <main className="homeMainLogged">
          <div className="homeContainer1Logged">
            <button onClick={() => navigate('/newCollection')} type="button">Nova Coleção</button>
          </div>
          <div className="homeContainer2Logged">
            {
              flashcardCollection.map((item, index) => <FlashcardsCollection key={item.id + index} id={item.id} collectionName={item.collectionName} collectionDescription= {item.collectionDescription} collectionImageUrl={item.collectionImageUrl} />)
            }
          </div>
          <Modal title={'Exclusão'} text={'Tem certeza que deseja remover essa coleção? Isso excluirá todos os cartões contidos nela.'}  />
        </main>
      }
    </>
  );
}