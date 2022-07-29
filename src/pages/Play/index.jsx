import React, { useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from "react-router-dom";

export const Play = () => {
  const { userLogged } = useSelector(state => state.user);
  const [btnValue, setBtnValue] = useState('Virar');
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="playMain">
          <div className="playTitle">
            <span>Cartão 1/8</span>
          </div> 
          <div className="playFlashcard">
          <div className="playFlashcardContent">
            <div>
              <span>Brinquedo</span>
            </div>
            {
              btnValue === 'Próximo' &&
              <>
                <hr/>
                <div>
                  <span>Toy</span>
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