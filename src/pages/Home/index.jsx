import React from "react";
import './styles.css'
import { Navbar } from "../../components/Navbar";

export const Home = () => {
  
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

  return(
    <>
      <Navbar page={'Home'} />
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
    </>
  );
}