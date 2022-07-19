import React from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'

export const Login = () => {
  return(
    <>
      <Navbar page={'Login'} btnText={'Cadastre-se'} btnLink={'/login'} />
      <main className="loginMain">
        
      </main>
    </>
  );
}