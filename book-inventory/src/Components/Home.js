import React,{useState, useEffect} from "react";
import BookShortDescription from "./BookShortDescription";
function Home(){

    const[books, setBooks] = useState([]);

    useEffect(()=>{
        async function fetchBooks(){
            const booksResponse = await fetch("http://localhost:8000/books");
            const booksData = await booksResponse.json();
            setBooks(booksData);
        };

        fetchBooks();
    })
    return(
        <>
            {
                books.map((book)=> <BookShortDescription id="" bookName={book.title}/>)
            }
        </>
    )
}

export default Home;