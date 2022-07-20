import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

export const Navbar = ({ page, btnText, btnLink }) => {
  const navigate = useNavigate();
  return(
    <header className="navbarHeader">
      <nav>
        <div>
          <i className="fa-solid fa-brain"></i>
          <span>QI Labs</span>
        </div>
        <div className="navbarButtons">
          {
            page === "Home" ?
            <>
              <button onClick={() => navigate('/register')} type="button">Cadastre-se</button>
              <button onClick={() => navigate('/login')} type="button">Entrar</button>
            </>
            :
            page === "Register" || page === "Login" ?
            <>
              <button onClick={() => navigate(btnLink)} type="button">{btnText}</button>
            </>
            :
            null
          }
        </div>
      </nav>
    </header>
  );
}