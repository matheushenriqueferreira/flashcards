import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate } from 'react-router-dom';

export const EditCollection = () => {
  const { userLogged } = useSelector(state => state.user);

  return(
    <>
      <Navbar />
    {
      userLogged === true ?
      <main className="editCollectionMain">

      </main>
      :
      <Navigate to={'/'}/>
    }
    </>
  );
}