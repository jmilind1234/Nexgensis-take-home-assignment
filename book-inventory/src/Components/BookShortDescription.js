// @ts-nocheck
import { BookDescription, BookTitle, ButtonHolder } from "../Components-styles/bookShortDesc";

function BookShortDescription({id, bookName, setBooks}){
    const deleteHandler = async ()=>{
        try {
            const deleteResponse = await fetch(`http://localhost:8000/books/${id}`, {method:'DELETE'});
            const booksResponse = await fetch("http://localhost:8000/books");
            const booksData = await booksResponse.json();
            setBooks(booksData);
        } catch (error) {
            console.log("Unable to  delete due to following error ", error);
        }
    }
    return(
        <BookDescription>
            <BookTitle>{bookName}</BookTitle>
            <ButtonHolder>
                <button>Update</button>
                <button>Read more..</button>
                <button onClick={deleteHandler}>Delete</button>
            </ButtonHolder>
        </BookDescription>
    )
}

export default BookShortDescription;