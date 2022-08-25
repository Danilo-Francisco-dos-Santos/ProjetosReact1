// Arquivo que vai fazer a interação com o arquivo Firebase e o banco de dados do Firebase
import firebase from 'firebase/compat/app';

// Faz autenticação com google
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Importando o arquivo Firebase
import firebaseConfig from './firebaseConfig';

//Inicilaiza as configurações do firebase com arquivo Firebase
const app = firebase.initializeApp(firebaseConfig);

//função para fazer conexão com o banco
const db = app.firestore();

export default {
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}