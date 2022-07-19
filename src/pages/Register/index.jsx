import React from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'

export const Register = () => {
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
            <input type={'text'} placeholder='Insira o seu nome completo'/>
          </div>
          <div>
            <label>E-mail</label>
            <input type={'text'} placeholder='Insira o seu e-mail' />
          </div>
          <div>
            <label>Senha</label>
            <input type={'password'} />
            <span>Use ao menos 8 caracteres contendo letras, números e ao menos um caracter especial</span>
          </div>
          <div>
            <label>Repetir a senha</label>
            <input type={'password'} />
            <span>Senha não confere</span>
          </div>
          <div className="registerBtn">
            <button type="button">Cadastrar</button>
          </div>
        </div>
      </main>
    </>
  );
}