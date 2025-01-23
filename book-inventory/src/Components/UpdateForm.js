import { FieldHolder, FormContainer, InputField, Label, LabelHolder, RowHolder, SubmitButtonNew } from "../Components-styles/feedbackForm";
import React, {useState} from "react";
import { onlyAlphabets, validateEmail } from "../utils/FormHandling";

function UpdateForm({authors, title, summary, id, setBooks}){

    const [fieldValues,setFieldValues] = useState({
        authors,
        title,
        summary
    })

    const updateHandler = async(e)=>{
        e.stopPropagation();
        try {
            await fetch(`http://localhost:8000/books/${id}`,{
                method: "PATCH",
                body: JSON.stringify({
                    author: authors,
                    id: id,
                    title: title,
                    Summary: summary
                })
            });
            const booksResp = await fetch("http://localhost:8000/books");
            const booksData = await booksResp.json();
            setBooks(booksData);
        } catch (error) {
            console.log("can't update due to some error", error);
        }
    }

    const titleChangeHandler = (e)=>{
        e.stopPropagation();
        setFieldValues({...fieldValues, title: e?.target?.value});
    }

    const authorsChangeHandler = (e)=>{
        e.stopPropagation();
        setFieldValues({...fieldValues, authors: e?.target?.value});
    }
     
    const summaryChangeHandler = (e)=>{
        e.stopPropagation();
        setFieldValues({...fieldValues, summary: e?.target?.value});
    }
    return(
    <>
        <FormContainer>
            <RowHolder>
                <LabelHolder>
                    <Label for="title">Book Title</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="title" name="title" placeholder="Enter new name ..." value={fieldValues?.title} onChange={titleChangeHandler} onFocus={(e)=> {e.stopPropagation();}}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="authors">Authors</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="authors" name="authors" placeholder="Authors ..." value={fieldValues?.authors} onChange={authorsChangeHandler}  onFocus={(e)=> {e.stopPropagation();}}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="summary">summary</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="summary" name="summary" placeholder="Update Summary here ..." value={fieldValues?.summary} onChange={summaryChangeHandler} onFocus={(e)=> {e.stopPropagation();}}/>
                </FieldHolder>
            </RowHolder>
        </FormContainer><SubmitButtonNew onClick={updateHandler}>SUBMIT</SubmitButtonNew>
    </> 
    )
}

export default UpdateForm;