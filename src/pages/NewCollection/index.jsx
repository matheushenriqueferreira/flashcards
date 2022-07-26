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
  const [imageName, setImageName] = useState('Escolha uma imagem para a coleção criada...');
  const [imageSelectionProgress, setImageSelectionProgress] = useState('0');
  const [uuid] = useState(uuidv1());//usado para criação da ID uníca do flashcardCollection e também no nome da imagem salva no storage
  const flashcardCollection = collection(firestore, 'flashcardCollection');
  const [loading, setLoading] = useState('');

  const handleRegisterCollection = () => {
    setLoading('Loading');
    const storage = getStorage(firebase)
    const flashcardCollectionImage = ref(storage, `flashcardCollectionImage/${userEmail}/${uuid}`);
    
    const metadata = {//Como a imagem salva no storage é a uuid cria-se metada para slavar o nome real da imagem selecionada
      customMetadata: {
        name: collectionImage.name
      }
    }
    const uploadTask = uploadBytesResumable(flashcardCollectionImage, collectionImage, metadata)
    uploadTask.on('state_changed', null, error => {alert(error.code)}, () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(url => {
          const data = {
            userEmail,
            collectionName,
            collectionDescription,
            collectionImageUrl: url
          }
          setDoc(doc(flashcardCollection, uuid), data)
            .then(() => {
              navigate('/');
            })
            .catch((error) => {
              alert(error.code);
              setLoading('');
            });
        })
        .catch((error) => {
          alert(error.code);
          setLoading('');
        })
    });
  }

  useEffect(() => {
    const fildset = document.querySelector('.newCollectionProgress');
    const btnCancel = document.querySelector('.newCollectionBtnCancel');
    setImageSelectionProgress('0');
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
     setImageSelectionProgress('100');
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
                  <div className="progress-bar" role="progressbar" aria-label="Success example" style={{width: `${imageSelectionProgress}%`}} aria-valuenow={imageSelectionProgress} aria-valuemin="0" aria-valuemax="100"></div>
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
              collectionName !== '' && collectionDescription !== '' && imageSelectionProgress === '100' && loading === '' ?
              <button type="button" onClick={() => handleRegisterCollection()}>Cadastrar</button>
              :
              loading === 'Loading' ?
              <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
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