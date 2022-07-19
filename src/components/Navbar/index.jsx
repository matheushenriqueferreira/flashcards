import React from "react";
import './styles.css'

export const Navbar = () => {
  return(
    <header className="navbarHeader">
      <nav>
        <div>
          <i className="fa-solid fa-brain"></i>
          <span>QI Labs</span>
        </div>
        <div className="navbarButtons">
          <button type="button">Cadastre-se</button>
          <button type="button">Entrar</button>
        </div>
      </nav>
    </header>
  );
}