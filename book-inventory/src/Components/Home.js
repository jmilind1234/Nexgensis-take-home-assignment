import React,{useState, useEffect} from "react";
import BookShortDescription from "./BookShortDescription";
function Home(){

    const[books, setBooks] = useState([]);

    useEffect(()=>{
        async function fetchBooks(){
            try {
                const booksResponse = await fetch("http://localhost:8000/books");
                const booksData = await booksResponse.json();
                setBooks(booksData);
            } catch (error) {
                console.log("Error faced while making fetch books call");
            }
        };

        fetchBooks();
    })

    return(
        <>
            {
                books.map((book)=> <BookShortDescription id={book.id} bookName={book.title} setBooks={setBooks}/>)
            }
        </>
    )
}

export default Home;