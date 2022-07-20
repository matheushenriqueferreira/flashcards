import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPassword, setUserRepeatPassword] = useState('');
  const [msgRepeatPassword, setMsgRepeatPassword] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  
  const handlePassword = (password) => {
    const input = document.getElementById('password');
    console.log(password)
    if(password !== '') {
      if(String(password).length <8) {
        input.style.border = '#e60000 2px solid';
        setMsgPassword('Error')
      }
      else {
        input.style.border = 'none';
        setMsgPassword('');
      }
    }
    else {
      input.style.border = 'none';
      setMsgPassword('');
      //Caso o usuário limpar o input de senha, automaticamente limpará o campo repetir senha
      document.getElementById('repeatPassword').style.border = 'none';
      setMsgRepeatPassword('');
      setUserRepeatPassword('');
    }
  }

  const handleRepeatPassword = (repeatPassword) => {
    const input = document.getElementById('repeatPassword');
    if(repeatPassword === '') { 
      input.style.border = 'none';
      setMsgRepeatPassword('');
    }
    else if(repeatPassword !== userPassword) {
      input.style.border = '#e60000 2px solid'
      setMsgRepeatPassword('Error');
    }
    else {
      input.style.border = 'none';
      setMsgRepeatPassword('');
    }
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
            <input onChange={(e) => setUserName(e.target.value)} value={userName} type={'text'} placeholder='Insira o seu nome completo'/>
          </div>
          <div>
            <label>E-mail</label>
            <input onChange={(e) => setUserEmail(e.target.value)} value ={userEmail} type={'text'} placeholder='Insira o seu e-mail' />
          </div>
          <div>
            <label>Senha</label>
            <input onChange={(e) => {
              setUserPassword(e.target.value),
              handlePassword(e.target.value)
            }} value={userPassword} id={'password'} type={'password'} placeholder='Insira uma senha'/>
            { msgPassword === 'Error' && <span>Use ao menos 8 caracteres contendo letras, números e ao menos um caracter especial</span> }
          </div>
          <div>
            <label>Repetir a senha</label>
            <input id="repeatPassword" onChange={(e) => {
              setUserRepeatPassword(e.target.value),
              handleRepeatPassword(e.target.value)
            }} value={userRepeatPassword} type={'password'} />
            { msgRepeatPassword === 'Error' && <span>Senha não confere</span>}
          </div>
          <div className="registerBtn">
            <button type="button">Cadastrar</button>
          </div>
        </div>
      </main>
    </>
  );
}