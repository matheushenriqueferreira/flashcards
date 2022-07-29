import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from '../../firebase/firebase'
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [msgLogin, setMsgLogin] = useState('')
  const [loading, setLoading] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (email) => {
    if(email !== '') {
      setMsgEmail('Ok');
    }
    else {
      setMsgEmail('');
    }
  }

  const handlePassword = (password) => {
    if(password !== '') {
      setMsgPassword('Ok');
    }
    else {
      setMsgPassword('');
    }
  }

  const handleShowPassword = () => {
    const iconEye = document.getElementById('showHidePassword');
    const inputPassword = document.getElementById('password');
    switch(iconEye.getAttribute('class')) {//Muda o icone de acordo com o nome da class
      case 'fa-solid fa-eye-slash':
        iconEye.className = 'fa-solid fa-eye';
        inputPassword.type = 'text';
      break;
      case 'fa-solid fa-eye':
        iconEye.className = 'fa-solid fa-eye-slash';
        inputPassword.type = 'password';
      break;
      default:
        iconEye.className = 'fa-solid fa-eye-slash';
        inputPassword.type = 'password';
      break;
    }
  }

  const handleLogin = () => {
    setMsgLogin('');
    setLoading('Loading');
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        dispatch(login({ email: userEmail }));
        navigate('/');
      })
      .catch((error) => {
        setLoading('');
        setMsgLogin('Error');
      });
  }

  return(
    <>
      <Navbar page={'Login'} btnText={'Cadastre-se'} btnLink={'/register'} />
      <main className="loginMain">
        <div className="loginContainer1">
          <h1>Login</h1>
        </div>
        <div className="loginContainer2">
          <div>
            <label>E-mail</label>
            <input onChange={(e) => {
              setUserEmail(e.target.value),
              handleEmail(e.target.value)
            }} value={userEmail} type={'text'} placeholder='Insira o seu e-mail' />
          </div>
          <div>
            <label>Senha</label>
            <input onChange={(e) => { 
              setUserPassword(e.target.value),
              handlePassword(e.target.value)
            }} value={userPassword} id="password" type={'password'} placeholder='Insira a sua senha' />
            <div className="loginPasswordContent">
              <div>
                { msgLogin === 'Error' && <span>Senha inválida. Por favor, verifique se o endereço de e-mail e/ou senha são válidos</span>}
              </div>
              <i id="showHidePassword" className="fa-solid fa-eye-slash" onClick={() => handleShowPassword()}></i>
            </div>
          </div>
          <div className="loginBtn">
            {
              loading === 'Loading' ?
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              :
              msgEmail === 'Ok' && msgPassword === 'Ok' ?
                <button type="button" onClick={() => handleLogin()}>Entrar</button>
              :
              <button type="button" disabled>Entrar</button>
            }
          </div>
        </div>
      </main>
    </>
  );
}