import React,{useState, useEffect} from "react";
import UpdateForm from "./UpdateForm";

const UpdateModal = ({ isOpen, toClose, idToUpdate, setBooks}) => {
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [summary, setSummary] = useState("");

    useEffect(()=>{
        const fetchDetails = async()=>{
            try {
                const detailResp =await fetch(`http://localhost:8000/books/${idToUpdate}`);
                const detailData = await detailResp.json();
                console.log(`${detailData?.author} ${detailData?.title} ${detailData?.Summary}`)
                setAuthors(detailData?.author);
                setTitle(detailData?.title);
                setSummary(detailData?.Summary);
            } catch (error) {
                console.log("failed to fetch detail of particular book due to ", error);
            }
            
        }
        fetchDetails();
    })


    if (!isOpen) return null;

    
    
    return (
        <div
            onClick={()=>{
                toClose(false);
            }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(91, 67, 67, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: "auto",
                    width: "auto",
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                <UpdateForm authors={authors} summary={summary} title={title} id={idToUpdate} setBooks={setBooks}/>
            </div>
        </div>
    );
};

export default UpdateModal;
