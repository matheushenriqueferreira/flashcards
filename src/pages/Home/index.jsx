import React from "react";
import './styles.css'
import { Navbar } from "../../components/Navbar";

export const Home = () => {
  return(
    <>
      <Navbar/>
      <main className="homeMain">
        <div>
          <h1>Mind Booster</h1>
          <span>Treine a sua memória com Flash Cards!</span>
        </div>
      </main>
    </>
  );
}