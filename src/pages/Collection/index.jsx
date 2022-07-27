import React from "react";
import './styles.css';
import { Navbar } from '../../components/Navbar';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const Collection = () => {
  const { userLogged, userEmail } = useSelector(state => state.user);
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="collectionMain">

        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}