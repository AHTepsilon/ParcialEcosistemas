import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const usernameTxt = document.getElementById("usernameInput");
const passwordTxt = document.getElementById("passwordInput");

const loginBtn = document.getElementById("loginButton");

const switchScreen = () =>
{
    window.location.href = "votesScreen.html";
}

loginBtn.addEventListener("click", function()
{
    switchScreen();
});