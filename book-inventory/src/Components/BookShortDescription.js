// @ts-nocheck
import { BookDescription, BookTitle, ButtonHolder } from "../Components-styles/bookShortDesc";

function BookShortDescription({id, bookName}){
    return(
        <BookDescription>
            <BookTitle>{bookName}</BookTitle>
            <ButtonHolder>
                <button>Update</button>
                <button>Read more..</button>
                <button>Delete</button>
            </ButtonHolder>
        </BookDescription>
    )
}

export default BookShortDescription;