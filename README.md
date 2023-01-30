<h1 align="center">Mind Booster</h1>

<div align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</div>

## :pushpin: Tabela de conteúdo
<!--ts-->
   * [Descrição do projeto](#memo-descrição-do-projeto)
   * [Funcionalidades do projeto](#white_check_mark-funcionalidades-do-projeto)
   * [Executar a aplicação](#hammer_and_wrench-executar-a-aplicação)
   * [Tecnologias utilizadas](#hash-tecnologias-utilizadas)
   * [Autor](#man_technologist-autor)
<!--te-->

## :memo: Descrição do projeto

<p align="center">O Mind booster possibilita a criação de flashcards para ajudar na memorização e aprendizagem.</p>
<p align="center">🧠📚</p>
<div align="center">
  <img src="./docs/initial.gif" />
</div>

## :white_check_mark: Funcionalidades do projeto

- [x] Cadastro de usuário
- [x] Autenticação de usuário
- [x] Criação/edição/exclusão de coleções de flashcards
- [x] Criação/edição/exclusão de flashcards
- [x] Busca de flashcards
- [x] Jogar

## :hammer_and_wrench: Executar a aplicação
  
  ### 1: Acesse a pasta do projeto baixado no terminal/cmd
    cd mind-booster

  ### 2: Dentro da pasta do projeto, acesse o arquivo em /mind-booster/src/firebase/firebase.js e substitua com as configurações do seu projeto criado no Firebase.
    import { initializeApp } from "firebase/app";
    import { initializeFirestore } from "firebase/firestore";

    const firebaseConfig = {
      // Insira aqui a configuração do projeto do Firebase
    };

    export const firebase = initializeApp(firebaseConfig);
    export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});
  #### Duvidas? Entre em contato comigo ou acesse a documentação sobre a [configuração do projeto Firebase.](https://firebase.google.com/docs/web/setup)

  ### 3: Instale as dependências
    npm install

  ### 4: Execute a aplicação
    npm run dev


## :hash: Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)
- [Vite + React](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Google Firebase](https://firebase.google.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Redux Persist](https://github.com/rt2zz/redux-persist)

## :man_technologist: Autor

| [<img src="https://avatars.githubusercontent.com/u/60938127?v=4" width=115><br><sub>Matheus Henrique Ferreira</sub>](https://github.com/matheushenriqueferreira) |  
| :---: |
