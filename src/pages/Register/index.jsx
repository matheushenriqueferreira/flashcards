import React from "react";
import { Navbar } from "../../components/Navbar";

export const Register = () => {
  return(
    <>
      <Navbar page={'Register'} btnText={'Entrar'} btnLink={'/login'}/>
      <main className="registerMain">
        
      </main>
    </>
  );
}