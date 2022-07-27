import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import './styles.css';

export const EditCollection = () => {
  const { userLogged } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [collectionImage, setCollectionImage] = useState();
  const [imageName, setImageName] = useState('Escolha uma imagem para a coleção criada...');
  const [imageSelectionProgress, setImageSelectionProgress] = useState('0');
  const [loading, setLoading] = useState('');

  return(
    <>
      <Navbar />
    {
      userLogged === true ?
      <main className="editCollectionMain">
        <div className="editCollectionTitle">
          <span>Editar Coleção</span>
        </div>
        <div className="editCollectionData">
          <span className="editCollectionSubtitle">Atualize os dados necessários da coleção</span>
          <div className="editCollectionInput">
            <div>
              <label>Nome coleção</label>
              <input onChange={(e) => setCollectionName(e.target.value)} value={collectionName} id="inputCollectionName" type={'text'} placeholder='Insira o nome da coleção' autoComplete="Off" />
            </div>
            <div>
              <label>Descrição</label>
              <textarea onChange={(e) => setCollectionDescription(e.target.value)} value={collectionDescription} id="textareaCollectionDetails"  placeholder='Descreva os detalhes da coleção' autoComplete="Off"/>
            </div>
            <div>
              <label>Imagem</label>
              <div id="inputFileContainer">
                <span>{imageName}</span>
                <label htmlFor="editCollectionInputFile">Upload</label>
                <input onChange={(e) => setCollectionImage(e.target.files[0])} id="editCollectionInputFile" type={'file'} accept={'.png, .jpeg, .jpg'} />
              </div>
            </div>
            <fieldset className="editCollectionProgress" disabled>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Success example" style={{width: `${imageSelectionProgress}%`}} aria-valuenow={imageSelectionProgress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div>
                <button className="editCollectionBtnCancel" onClick={() => setCollectionImage(undefined)}>
                  <i className="fa-solid fa-ban"></i>
                </button>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="editCollectionBtn">
          {
            collectionName !== '' && collectionDescription !== '' && imageSelectionProgress === '100' && loading === '' ?
            <button type="button" onClick={() => handleRegisterCollection()}>Salvar</button>
            :
            loading === 'Loading' ?
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            :
            <button type="button" disabled>Salvar</button>
          }
        </div>
      </main>
      :
      <Navigate to={'/'}/>
    }
    </>
  );
}