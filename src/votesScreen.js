import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config.js";
import {getDatabase, ref, set, onValue, push} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { bookCard } from "./bookCard.js";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();

const bookList = document.getElementById("bookList");
const bookTitleTest = document.getElementById("bookTitleTEST");
const bookRatingTest = document.getElementById("bookRatingTEST");

const addBookButton = document.getElementById("addBook");

function registerNewBook(newBook)
{
    const db = getDatabase();

    const newBookRef = (ref(db, "books/" + newBook.TITLE));
    console.log(newBookRef);

    //const dbRef = ref(db, "user/ " + newUser.NAME);
    set(newBookRef, newBook);
}

function getBookCards()
{
    const dbRef = ref(db, 'books');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateBooks(data);
    });
}

function updateBooks(info)
{
    if(info)
    {
        bookList.innerHTML = "";
        console.log("wow");
        
        Object.keys(info).forEach((key, index) =>
        {
            console.log(key, index);
            const book = new bookCard(info[key]);  
            
            bookList.appendChild(book.drawOn());
        });

        //userList1.innerHTML = text;
    }

    else
    {
        bookList.innerHTML = "N/A";
    }
}

const saveBookData = (e, event) =>
{
    let title = bookTitleTest.value;

    let newBook =
    {
        TITLE: title,
        RATING: 0,
        NUMBEROFVOTES: 0,
        LASTVOTE: 0
    };

    registerNewBook(newBook);
}

getBookCards();

addBookButton.addEventListener("click", saveBookData);

