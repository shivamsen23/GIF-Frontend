import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIxZTdrt-ICte_OPQfhWVkyyhEkL1LTUs",
    authDomain: "gif-maker-fc02c.firebaseapp.com",
    projectId: "gif-maker-fc02c",
    storageBucket: "gif-maker-fc02c.appspot.com",
    messagingSenderId: "856875875514",
    appId: "1:856875875514:web:98803c8ad25b8664b71683",
    measurementId: "G-PNNTQKFTEF"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
