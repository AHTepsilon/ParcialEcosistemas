import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config.js";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();
const db = getDatabase();

const emailTxt = document.getElementById("emailInput");
const passwordTxt = document.getElementById("passwordInput");

const loginBtn = document.getElementById("loginButton");


const switchScreen = () =>
{
    window.location.href = "votesScreen.html";
}

function register(e, event)
{
    createUserWithEmailAndPassword(auth, emailTxt.value, passwordTxt.value)
    .then((user_credential) => 
    {
        console.log(user_credential);
        const user = 
        {
            "id": user_credential.user.uid,
            "email": emailTxt.value,
            "password": passwordTxt.value,
        }
    
        const dbRef = ref(db, "users/" + user.id);
        set(dbRef, user).then(() =>
        {
            alert("Usuario guardado");
            switchScreen();
        });
    })
    .catch((error) =>
    {
        alert("Email or password invalid, please try again");
        console.log(error.message);
    });
    
}

function login()
{
    signInWithEmailAndPassword(auth, emailTxt.value, passwordTxt.value).then(
        (user_credential) =>
        {
            switchScreen();
        })
        .catch
        (
            (error) =>
            {
                alert("Correo o contraseña incorrectos");
            }
        );
}


loginBtn.addEventListener("click", function()
{
    login();
});