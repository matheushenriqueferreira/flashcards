import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import './styles.css';

export const NewCollection = () => {
  const { userLogged } = useSelector(state => state.user);
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [collectionImage, setCollectionImage] = useState('');
  const [imageName, setImageName] = useState('Escolha uma imagem para a coleção criada...');

  const handleImageName = (image) => {
    if(image !== undefined) {//Para evitar erro caso o usuário clicar no input type:file e cancelar
      setImageName(image.name);
    }
    else {
      setImageName('Escolha uma imagem para a coleção criada...');      
    }
  }

  return(
    <>
      <Navbar />
      {
        userLogged === true ?
        <main className="newCollectionMain">
          <div className="newCollectionTitle">
            <span>Nova Coleção</span>
          </div>
          <div className="newCollectionData">
            <span className="newCollectionSubtitle">Preencha os dados referente à coleção a ser criada</span>
            <div className="newCollectionInput">
              <div>
                <label>Nome coleção</label>
                <input onChange={(e) => setCollectionName(e.target.value)} value={collectionName} id="inputCollectionName" type={'text'} placeholder='Insira o nome da coleção' />
              </div>
              <div>
                <label>Descrição</label>
                <textarea onChange={(e) => setCollectionDescription(e.target.value)} value={collectionDescription} id="textareaCollectionDetails"  placeholder='Descreva os detalhes da coleção' />
              </div>
              <div>
                <label>Imagem</label>
                <div id="inputFileContainer">
                  <span>{imageName}</span>
                  <label htmlFor="newCollectionInputFile">Upload</label>
                  <input onChange={(e) => {
                    setCollectionImage(e.target.files[0]),
                    handleImageName(e.target.files[0])
                  }} id="newCollectionInputFile" type={'file'} accept={'.png, .jpeg, .jpg'} />
                </div>
              </div>
            </div>
          </div>
          <div className="newCollectionBtn">
            <button type="button">Cadastrar</button>
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}