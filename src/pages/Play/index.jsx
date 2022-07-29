import React, { useEffect, useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from "react-router-dom";

export const Play = () => {
  const { userLogged } = useSelector(state => state.user);
  const [btnValue, setBtnValue] = useState('Virar');
  const { front, back } = useSelector(state => state.play);
  const [cont, setCont] = useState(0); 

  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="playMain">
          <div className="playTitle">
            <span>{`Cartão ${cont + 1}/${front.length}`}</span>
          </div> 
          <div className="playFlashcard">
          <div className="playFlashcardContent">
            <div>
              <span>{front[cont]}</span>
            </div>
            {
              btnValue === 'Próximo' &&
              <>
                <hr/>
                <div>
                  <span>{back[cont]}</span>
                </div>
              </>
            }
          </div>
          </div>
          <div className="playBtn">
            <button type="button">{btnValue}</button>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}