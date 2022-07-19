import React from "react";
import './styles.css'
import { Navbar } from "../../components/Navbar";


export const Home = () => {
  return(
    <>
      <Navbar/>
      <main>
        <h1>Olá mundo</h1>
      </main>
    </>
  );
}