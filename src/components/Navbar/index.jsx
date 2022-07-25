import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import { logout } from "../../redux/userSlice";

export const Navbar = ({ page, btnText, btnLink }) => {
  const navigate = useNavigate();
  const { userLogged } = useSelector(state=> state.user);
  const dispatch = useDispatch();

  return(
    <header className="navbarHeader">
      <div className="navbarNav">
        <div onClick={() => navigate('/')}>
          <i className="fa-solid fa-brain"></i>
          <span>QI Labs</span>
        </div>
        <div className="navbarButtons">
          {
            page === "Register" || page === "Login" ?
              <button onClick={() => navigate(btnLink)} type="button">{btnText}</button>
            :
            page === "Home" && userLogged === 'notLogged' ?
            <>
              <button onClick={() => navigate('/register')} type="button">Cadastre-se</button>
              <button onClick={() => navigate('/login')} type="button">Entrar</button>
            </>
            :
            <>
              <button onClick={() => navigate('')} type="button">Minhas Coleções</button>
              <button onClick={() => dispatch(logout())} type="button">Sair</button>
            </>
          }
        </div>
      </div>
    </header>
  );
}