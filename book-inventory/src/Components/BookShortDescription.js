// @ts-nocheck
import { BookDescription, BookTitle, ButtonHolder } from "../Components-styles/bookShortDesc";

function BookShortDescription({id, bookName, setBooks, setIdToRead, setModalOpen, setOpenUpdateModal, setIdToUpdate}){
    
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
                <button onClick={()=>{
                    setOpenUpdateModal(true);
                    setIdToUpdate(id);
                }}>Update</button>
                <button onClick={()=>{
                    setModalOpen(true);
                    setIdToRead(id);
                }}>Read more..</button>
                <button onClick={deleteHandler}>Delete</button>
            </ButtonHolder>
        </BookDescription>
    )
}

export default BookShortDescription;