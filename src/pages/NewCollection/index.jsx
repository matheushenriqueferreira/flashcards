import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { firebase, firestore } from '../../firebase/firebase';
import { collection, doc, setDoc } from "firebase/firestore";
import { v1 as uuidv1 } from 'uuid'; //timestamp UUID
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import './styles.css';

export const NewCollection = () => {
  const { userEmail, userLogged } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState('');
  const [collectionDescription, setCollectionDescription] = useState('');
  const [collectionImage, setCollectionImage] = useState();
  const [collectionImageUrl, setCollectionImageUrl] = useState('');
  const [imageName, setImageName] = useState('Escolha uma imagem para a coleção criada...');
  const [imageUploadProgress, setImageUploadProgress] = useState('0');
  const [uuid] = useState(uuidv1());
  const flashcardCollection = collection(firestore, 'flashcardCollection');
  const storage = getStorage(firebase);
  const flashcardCollectionImage = ref(storage, `flashcardCollectionImage/${userEmail}/${uuid}`);

  const handleRegisterCollection = () => {
    const data = {
      userEmail,
      collectionName, 
      collectionDescription,
      collectionImageUrl//Url da imagem que foi salva no storage do firebase
    }
    
    setDoc(doc(flashcardCollection, uuid), data)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  useEffect(() => {
    const fildset = document.querySelector('.newCollectionProgress');
    const btnCancel = document.querySelector('.newCollectionBtnCancel');
    setImageUploadProgress('0');
    if(collectionImage !== undefined) {//Para evitar erro caso o usuário clicar no input type:file e cancelar
      /* setImageName(collectionImage.name) abaixo insere o nome da imagem selecionada na 
      <div id="inputFileContainer">
      --> <span>{imageName}</span> <--
      .
      .
      .
      </div>
      */
     fildset.removeAttribute('disabled');
     btnCancel.removeAttribute('disabled');
     setImageName(collectionImage.name);
     setImageUploadProgress('100');
    }
    else {
      fildset.setAttribute('disabled', '');
      btnCancel.setAttribute('disabled', '');
      setImageName('Escolha uma imagem para a coleção criada...');
    }
  }, [collectionImage])

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
                  <label htmlFor="newCollectionInputFile">Upload</label>
                  <input onChange={(e) => setCollectionImage(e.target.files[0])} id="newCollectionInputFile" type={'file'} accept={'.png, .jpeg, .jpg'} />
                </div>
              </div>
              <fieldset className="newCollectionProgress" disabled>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-label="Success example" style={{width: `${imageUploadProgress}%`}} aria-valuenow={imageUploadProgress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div>
                  <button className="newCollectionBtnCancel" onClick={() => setCollectionImage(undefined)}>
                    <i className="fa-solid fa-ban"></i>
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="newCollectionBtn">
            {
              collectionName !== '' && collectionDescription !== '' && collectionImageUrl !== '' ?
              <button type="button" onClick={() => handleRegisterCollection()}>Cadastrar</button>
              :
              <button type="button" disabled>Cadastrar</button>
            }
          </div>
        </main>
        :
        <Navigate to={'/'} />
      }
    </>
  );
}