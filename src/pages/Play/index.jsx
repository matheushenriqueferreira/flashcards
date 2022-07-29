import React, { useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate, useNavigate } from "react-router-dom";

export const Play = () => {
  const { userLogged } = useSelector(state => state.user);
  const [btnValue, setBtnValue] = useState('Virar');
  const { front, back } = useSelector(state => state.play);
  const [count, setCount] = useState(0); 
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleClickButton = () => {
    switch(btnValue) {
      case 'Virar':
        setBtnValue('Próximo');
        if((count + 1) === front.length) {
          setBtnValue('Finalizar');
        }
      break;
      case 'Próximo':
          setCount(count + 1);
          setBtnValue('Virar');
      break;
      case 'Finalizar':
        setLoading('Loading');
        setTimeout(() => {
          navigate('/collection');
        }, 1000);
      break;
    }
  }

  return(
    <>
      <Navbar />
      {
        userLogged === true && (front.length > 0) ?//Se o usuário estiver logado e somente acessivel se clicar no btnJogar da page collection
        <main className="playMain">
          <div className="playTitle">
            <span>{`Cartão ${count + 1}/${front.length}`}</span>
          </div> 
          <div className="playFlashcard">
          <div className="playFlashcardContent">
            <div>
              <span>{front[count]}</span>
            </div>
            {
              (btnValue === 'Próximo' || btnValue === 'Finalizar') &&
              <>
                <hr/>
                <div>
                  <span>{back[count]}</span>
                </div>
              </>
            }
          </div>
          </div>
          <div className="playBtn">
            {
              loading === '' ?
              <button onClick={() => handleClickButton()} type="button">{btnValue}</button>
              :
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}