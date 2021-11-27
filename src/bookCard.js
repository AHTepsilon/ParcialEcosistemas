import { getDatabase, ref, set, onValue, push } from 'firebase/database';

export class bookCard
{
    constructor(book)
    {
        this.book = book;
    }

    drawOn()
    {
        let card = document.createElement("div");
        card.className = "book-card";

        let bookTitle = document.createElement("h3");

        bookTitle.className = "book-title";
        bookTitle.innerHTML = this.book.TITLE;

        let bookRating = document.createElement("h4");

        bookRating.className = "book-rating";
        bookRating.innerHTML = this.book.RATING;

        let vote1 = document.createElement("button");
        let vote2 = document.createElement("button");
        let vote3 = document.createElement("button");
        let vote4 = document.createElement("button");
        let vote5 = document.createElement("button");

        vote1.className = "vote1Button";
        vote2.className = "vote2Button";
        vote3.className = "vote3Button";
        vote4.className = "vote4Button";
        vote5.className = "vote5Button";

        vote1.innerHTML = "1";
        vote2.innerHTML = "2";
        vote3.innerHTML = "3";
        vote4.innerHTML = "4";
        vote5.innerHTML = "5";

        vote1.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();
            const BookRatRef = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const bookNumVotesRef = ref(db, "books/" + this.book.TITLE + "/" + "NUMBEROFVOTES");
            const BooklastVoteRef = ref(db, "books/" + this.book.TITLE + "/" + "LASTVOTE");
            
            this.book.LASTVOTE += 1;
            this.book.NUMBEROFVOTES += 1;

            this.book.RATING = (this.book.LASTVOTE / this.book.NUMBEROFVOTES).toFixed(1);

            set(BooklastVoteRef, this.book.LASTVOTE);
            set(BookRatRef, this.book.RATING);
            set(bookNumVotesRef, this.book.NUMBEROFVOTES);
        });

        vote2.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();
            const BookRatRef = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const bookNumVotesRef = ref(db, "books/" + this.book.TITLE + "/" + "NUMBEROFVOTES");
            const BooklastVoteRef = ref(db, "books/" + this.book.TITLE + "/" + "LASTVOTE");
            
            this.book.LASTVOTE += 2;
            this.book.NUMBEROFVOTES += 1;

            this.book.RATING = (this.book.LASTVOTE / this.book.NUMBEROFVOTES).toFixed(1);

            set(BooklastVoteRef, this.book.LASTVOTE);
            set(BookRatRef, this.book.RATING);
            set(bookNumVotesRef, this.book.NUMBEROFVOTES);
        });

        vote3.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();
            const BookRatRef = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const bookNumVotesRef = ref(db, "books/" + this.book.TITLE + "/" + "NUMBEROFVOTES");
            const BooklastVoteRef = ref(db, "books/" + this.book.TITLE + "/" + "LASTVOTE");
            
            this.book.LASTVOTE += 3;
            this.book.NUMBEROFVOTES += 1;

            this.book.RATING = (this.book.LASTVOTE / this.book.NUMBEROFVOTES).toFixed(1);

            set(BooklastVoteRef, this.book.LASTVOTE);
            set(BookRatRef, this.book.RATING);
            set(bookNumVotesRef, this.book.NUMBEROFVOTES);
        });

        vote4.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();
            const BookRatRef = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const bookNumVotesRef = ref(db, "books/" + this.book.TITLE + "/" + "NUMBEROFVOTES");
            const BooklastVoteRef = ref(db, "books/" + this.book.TITLE + "/" + "LASTVOTE");
            
            this.book.LASTVOTE += 4;
            this.book.NUMBEROFVOTES += 1;

            this.book.RATING = (this.book.LASTVOTE / this.book.NUMBEROFVOTES).toFixed(1);

            set(BooklastVoteRef, this.book.LASTVOTE);
            set(BookRatRef, this.book.RATING);
            set(bookNumVotesRef, this.book.NUMBEROFVOTES);
        });

        vote5.addEventListener("click", (e, event) =>
        {
            const db = getDatabase();
            const BookRatRef = ref(db, "books/" + this.book.TITLE + "/" + "RATING");
            const bookNumVotesRef = ref(db, "books/" + this.book.TITLE + "/" + "NUMBEROFVOTES");
            const BooklastVoteRef = ref(db, "books/" + this.book.TITLE + "/" + "LASTVOTE");
            
            this.book.LASTVOTE += 5;
            this.book.NUMBEROFVOTES += 1;

            this.book.RATING = (this.book.LASTVOTE / this.book.NUMBEROFVOTES).toFixed(1);

            set(BooklastVoteRef, this.book.LASTVOTE);
            set(BookRatRef, this.book.RATING);
            set(bookNumVotesRef, this.book.NUMBEROFVOTES);
        });

        card.appendChild(bookTitle);
        card.appendChild(bookRating);

        card.appendChild(vote1);
        card.appendChild(vote2);
        card.appendChild(vote3);
        card.appendChild(vote4);
        card.appendChild(vote5);

        return card;
    }

    importDataBaseForVoteButtons(voteNumber)
    {

    }
}