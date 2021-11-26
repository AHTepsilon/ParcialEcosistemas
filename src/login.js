import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config.js";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const usernameTxt = document.getElementById("emailInput");
const passwordTxt = document.getElementById("passwordInput");

const loginBtn = document.getElementById("loginButton");

const switchScreen = () =>
{
    window.location.href = "votesScreen.html";
}

onAuthStateChanged(auth, (userAccount) =>
{
    if(userAccount)
    {
        
    }
});

loginBtn.addEventListener("click", function()
{
    switchScreen();
});