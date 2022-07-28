import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { Navigate } from 'react-router-dom';
import './styles.css';

export const EditCard = () => {
  const { userLogged } = useSelector(state => state.user);
  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="editCardMain">
          
        </main>
        :
        <Navigate to={'/collection'} />
      }
    </>
  );
}