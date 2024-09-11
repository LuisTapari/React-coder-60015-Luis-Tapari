import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLS-tltA16IO45lk6uHv665JZmxXyVWZo",
    authDomain: "react-coder-luis-tapari.firebaseapp.com",
    projectId: "react-coder-luis-tapari",
    storageBucket: "react-coder-luis-tapari.appspot.com",
    messagingSenderId: "1506075931",
    appId: "1:1506075931:web:ac42daccfb6fb6ba101fbe"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
