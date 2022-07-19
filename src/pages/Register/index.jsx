import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'

export const Register = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPassword, setUserRepeatPassword] = useState('');
  const [msgRepeatPassword, setMsgRepeatPassword] = useState('');

  const handleRepeatPassword = (repeatPassword) => {
    if(repeatPassword === '') { 
      setMsgRepeatPassword('');
    }
    else if(repeatPassword !== userPassword) {
      setMsgRepeatPassword('Error');
    }
    else {
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
            <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} type={'password'} />
            <span>Use ao menos 8 caracteres contendo letras, números e ao menos um caracter especial</span>
          </div>
          <div>
            <label>Repetir a senha</label>
            <input id="registerRepPass" onChange={(e) => {
              setUserRepeatPassword(e.target.value),
              handleRepeatPassword(e.target.value)
            }} value={userRepeatPassword} type={'password'} />
            { msgRepeatPassword === 'Error' && <span>Senha não consefere</span>}
          </div>
          <div className="registerBtn">
            <button type="button">Cadastrar</button>
          </div>
        </div>
      </main>
    </>
  );
}