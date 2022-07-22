import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'
import { firebase } from "../../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPassword, setUserRepeatPassword] = useState('');
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [msgRepeatPassword, setMsgRepeatPassword] = useState('');

  const handleName = (name) => {
    if(name !== '') {
      if(String(name).length <= 3 || name.match(/[0-9]/) || name.match(/([~,!,@,#,$,%,^,&,*,\-,_,+,=,?,>,<,\.,\/,\\,\(,\),\{,\},\;,\:,\",¨,\º])/)) {
        setMsgName('Error');
      }
      else {
        setMsgName('Ok');
      }
    }
    else {
      setMsgName('');
    }
  }

  const handleEmail = (email, inputStyle) => {
    if(email !== '') {
      if(/[a-zA-Z]+[0-9]*\b@[a-zA-Z]+(\.com\.br|\.com$)$/.test(email)) {
        setMsgEmail('Ok');
        inputStyle.border = '0';
      }
      else {
        setMsgEmail('Error');
        inputStyle.border = '#e60000 2px solid';
      }
    }
    else {
      setMsgEmail('');
      inputStyle.border = '0';
    }
  }

  const handlePassword = (password, inputStyle) => {
    if(password !== '') {
      if(String(password).length > 7 && password.match(/([0-9])/) && password.match(/([a-zA-Z])/) && password.match(/([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/)) {
        inputStyle.border = '0';
        setMsgPassword('Ok');
      }
      else {
        inputStyle.border = '#e60000 2px solid';
        setMsgPassword('Error');
      }
    }
    else {
      inputStyle.border = '0';
      setMsgPassword('');
    }
    
    if(userRepeatPassword !== '') {
      /*Caso o usuário fazer qualquer alterção no input de senha
      e o input repeatPassword estiver preenchido, ele será resetado*/
      document.getElementById('repeatPassword').style.border = '0';
      setMsgRepeatPassword('');
      setUserRepeatPassword('');
    }
  }

  //Exibe ou oculta o password ao clicar
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
    }
  }

  const handleRepeatPassword = (repeatPassword, inputStyle) => {
    if(repeatPassword === '') { 
      inputStyle.border = '0';
      setMsgRepeatPassword('');
    }
    else if(repeatPassword !== userPassword) {
      inputStyle.border = '#e60000 2px solid'
      setMsgRepeatPassword('Error');
    }
    else {
      inputStyle.border = '0';
      setMsgRepeatPassword('Ok');
    }
  }

  

  const handleRegisterUser = async () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((response) => {
        alert(response.user.email);
      })
      .catch((error) => {
        switch(error.code) {
          case 'auth/invalid-email':
            alert('E-mail inválido.');
          break;
          case 'auth/email-already-in-use':
            alert(`O E-mail: ${userEmail} já está em uso.`);
          break;
          default: alert(error.code);
        }
      });
  }

  return(
    <>
      <Navbar page={'Register'} btnText={'Entrar'} btnLink={'/login'}/>
      <main className="registerMain">
        <div className="registerContainer1">
          <h1>Cadastre-se</h1>
          <span>Com a sua conta, você poderá gerenciar suas coleções de flashcards.</span>
        </div>
        <div className="registerContainer2">
          <div>
            <label>Nome</label>
            <input onChange={(e) => {
              setUserName(e.target.value)
              handleName(e.target.value)
            }} value={userName} type={'text'} placeholder='Insira o seu nome completo'/>
            { msgName === 'Error' && <span>Use ao menos 4 caracteres contendo apenas letras</span> }
          </div>
          <div>
            <label>E-mail</label>
            <input onChange={(e) => {
              setUserEmail(e.target.value),
              handleEmail(e.target.value, e.target.style)
            }} value ={userEmail} type={'text'} placeholder='you@email.com' />
            { msgEmail === 'Error' && <span>E-mail inválido</span> }
          </div>
          <div>
            <label>Senha</label>
            <input onChange={(e) => {
              setUserPassword(e.target.value),
              handlePassword(e.target.value, e.target.style)
            }} value={userPassword} id={'password'} type={'password'} min={8} placeholder='Insira uma senha'/>
            <div className="homePasswordContent">
              <div>
                { msgPassword === 'Error' && <span>Use ao menos 8 caracteres contendo letras, números e ao menos um caracter especial</span> }
              </div>
              <i id="showHidePassword" className="fa-solid fa-eye-slash" onClick={() => handleShowPassword()}></i>
            </div>
          </div>
          <div>
            <label>Repetir a senha</label>
            <input id="repeatPassword" onChange={(e) => {
              setUserRepeatPassword(e.target.value),
              handleRepeatPassword(e.target.value, e.target.style)
            }} value={userRepeatPassword} type={'password'} />
            { msgRepeatPassword === 'Error' && <span>Senha não confere</span>}
          </div>
          <div className="registerBtn">
            {
              msgName === 'Ok' && msgEmail === 'Ok' && msgPassword === 'Ok' && msgRepeatPassword === 'Ok' ?
              <button type="button" onClick={() => handleRegisterUser()}>Cadastrar</button>
              :
              <button type="button" disabled>Cadastrar</button>
            }
          </div>
        </div>
      </main>
    </>
  );
}