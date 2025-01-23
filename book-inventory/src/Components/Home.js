import React,{useState, useEffect} from "react";
import BookShortDescription from "./BookShortDescription";
import Modal from "./Modal";
function Home(){

    const [books, setBooks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [idToRead, setIdToRead] = useState();

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
                books.map((book)=> <BookShortDescription id={book.id} bookName={book.title} setBooks={setBooks} setIdToRead={setIdToRead} setModalOpen={setModalOpen}/>)
            }
            <Modal isOpen={modalOpen} toClose={setModalOpen} idToRead={idToRead}/>
        </>
    )
}

export default Home;