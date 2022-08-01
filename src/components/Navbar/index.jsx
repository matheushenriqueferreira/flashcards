import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import { logout } from "../../redux/userSlice";
import { getAuth, signOut } from "firebase/auth";

export const Navbar = ({ page, btnText, btnLink }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const { userLogged } = useSelector(state=> state.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logout());
    }).catch((error) => {
      alert(error.code);
    });
  }

  useEffect(() => {
    if(userLogged === true) {
      const auth = getAuth();
      setUserName(auth.currentUser.displayName);
    }
  }, [userLogged]);

  return(
    <header className="navbarHeader">
      <div className="navbarNav">
        <div className="navbarNavLogo" onClick={() => navigate('/')}>
          <i className="fa-solid fa-brain"></i>
          <span>QI Labs</span>
        </div>
        <div className="navbarButtons">
          {
            page === "Register" || page === "Login" ?
              <button onClick={() => navigate(btnLink)} type="button">{btnText}</button>
            :
            page === "Home" && userLogged === false ?
            <>
              <button onClick={() => navigate('/register')} type="button">Cadastre-se</button>
              <button onClick={() => navigate('/login')} type="button">Entrar</button>
            </>
            :
            <>
              <div className="navbarUserName">
                <i className="fa-solid fa-circle-user"></i>
                <span>{userName}</span>
              </div>
              <button onClick={() => navigate('/')} type="button">Minhas Coleções</button>
              <button onClick={() => handleSignOut()} type="button">Sair</button>
            </>
          }
        </div>
      </div>
    </header>
  );
}