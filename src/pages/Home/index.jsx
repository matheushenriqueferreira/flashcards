import React from "react";
import './styles.css'
import { Navbar } from "../../components/Navbar";

export const Home = () => {
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
          <div className="homeYellow">
            <span>Clique no cartão para descobrir</span>
            <i className="fa-solid fa-arrow-trend-down"></i>
          </div>
          <div>
            <div className="homeFlashcards" id="homeFlashcard1">
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