import React from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from "react-router-dom";

export const Play = () => {
  const { userLogged } = useSelector(state => state.user);
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="playMain">
          <div>
            
          </div>
          <div>

          </div>
          <div>

          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}