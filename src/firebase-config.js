const firebaseConfig = {
    apiKey: "AIzaSyDuVzU8vt5nEqs85qlvNqU8lhTHoyhlxcM",
    authDomain: "parcial-a607e.firebaseapp.com",
    databaseURL: "https://parcial-a607e-default-rtdb.firebaseio.com",
    projectId: "parcial-a607e",
    storageBucket: "parcial-a607e.appspot.com",
    messagingSenderId: "610312787110",
    appId: "1:610312787110:web:172f858d78b0823aa3d067",
    measurementId: "G-5KGCST871X"
  };

  export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}