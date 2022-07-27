import React, { useEffect, useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { Navbar } from '../../components/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import { firebase, firestore } from '../../firebase/firebase';
import { getStorage, ref, getMetadata, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, collection } from "firebase/firestore";

export const EditCollection = () => {
  const { userEmail ,userLogged } = useSelector(state => state.user);
  const { id, name, description, imageUrl } = useSelector(state => state.collection);
  const [collectionName, setCollectionName] = useState(name);
  const [collectionDescription, setCollectionDescription] = useState(description);
  const [collectionImage, setCollectionImage] = useState(imageUrl);
  const [imageName, setImageName] = useState('Escolha uma imagem para a coleção criada...');
  const [imageSelectionProgress, setImageSelectionProgress] = useState('0');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleSaveCollectionEdit = () => {
    setLoading('Loading');
    const db = collection(firestore, 'flashcardCollection');
    const data = {
      collectionName, 
      collectionDescription, 
      collectionImageUrl: collectionImage
    }
    if(collectionImage === imageUrl) {//Se a imagem não for alterada não fará um novo upload
      updateDoc(doc(db, id), data)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error.code);
          setLoading('');
        })
    }
    else {//Se imagem for alterada fara upload da nova imagem que substituira a imagem anterior já que o nome será a id da coleção
      const storage = getStorage(firebase);
      const flashcardCollectionImage = ref(storage, `flashcardCollectionImage/${userEmail}/${id}`);
      const metadata = {
        customMetadata: {
          name: collectionImage.name
        }
      }
      const uploadTask = uploadBytesResumable(flashcardCollectionImage, collectionImage, metadata)
      uploadTask.on('state_changed', null, error => {alert(error.code)}, () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(url => {
          const data = {
            collectionName, 
            collectionDescription,
            collectionImageUrl: url
          }
          updateDoc(doc(db, id), data)
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
  }

  useEffect(() => {
    if(userLogged === true) {
      const fildset = document.querySelector('.editCollectionProgress');
      const btnCancel = document.querySelector('.editCollectionBtnCancel');
      if(collectionImage === imageUrl) {
        getAuth(firebase)
        const storage = getStorage(firebase);
        const starsRef = ref(storage, `flashcardCollectionImage/${userEmail}/${id}`);
        getMetadata(starsRef)
          .then((e) => {
            setImageName(e.customMetadata.name);
            setImageSelectionProgress('100');
            fildset.removeAttribute('disabled');
            btnCancel.removeAttribute('disabled');
          })
          .catch((error) => {
            switch (error.code) {
              case 'storage/object-not-found':
                setImageName('Erro: A imagem da coleção não foi encontrada');
                setImageSelectionProgress('0');
                fildset.setAttribute('disabled', '');
                btnCancel.setAttribute('disabled', '');
              break;
              default:
                setImageName(error.code);
                setImageSelectionProgress('0');
                fildset.setAttribute('disabled', '');
                btnCancel.setAttribute('disabled', '');
            }
          })
      }
      else {
        if(collectionImage !== undefined) {
          fildset.removeAttribute('disabled');
          btnCancel.removeAttribute('disabled');
          setImageName(collectionImage.name);
          setImageSelectionProgress('100');
        }
        else {
          fildset.setAttribute('disabled', '');
          btnCancel.setAttribute('disabled', '');
          setImageSelectionProgress('0');
          setImageName('Escolha uma imagem para a coleção criada...');
        }
      }
    }
  }, [collectionImage])


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
            <button type="button" onClick={() => handleSaveCollectionEdit()}>Salvar</button>
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