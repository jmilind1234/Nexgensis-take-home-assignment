import React,{useState, useEffect} from "react";

const Modal = ({ isOpen, toClose, idToRead }) => {
    const[author, setAuthor] = useState("");
    const[title, setTitle] = useState("");
    const[summary, setSummary]= useState("");


    useEffect(()=>{
        const fetchDetails = async()=>{
            const detailResp =await fetch(`http://localhost:8000/books/${idToRead}`);
            const detailData = await detailResp.json();
            setAuthor(detailData?.author);
            setTitle(detailData?.title);
            setSummary(detailData?.Summary);
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
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Summary</th>
                    </tr>
                    <tr>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>{summary}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Modal;
