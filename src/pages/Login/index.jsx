import React from "react";
import { Navbar } from "../../components/Navbar";
import './styles.css'

export const Login = () => {
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
            <input type={'text'} placeholder='Insira o seu e-mail' />
          </div>
          <div>
            <label>Senha</label>
            <input type={'password'} />
            <span>Senha inválida. Por favor, verifique se o endereço de e-mail e/ou senha são válidos</span>
          </div>
          <div className="loginBtn">
            <button type="button">Entrar</button>
          </div>
        </div>
      </main>
    </>
  );
}