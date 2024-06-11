import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Update(){
    const[add,setAdd]=useState([]);
    const[titleadd,setTitleAdd]=useState("");
    const[descriptionadd,SetDescriptioAdd]=useState("");
    const[priceadd,SetPriceAdd]=useState("");
    const[coveradd,SetCoverAdd]=useState("");

    const location=useLocation()

    const bookId=location.pathname.split("/")[2]

    async function handleAddBook(){
        const newBook={title:titleadd,description:descriptionadd,price:priceadd,cover:coveradd};
        console.log(newBook.title);
        setAdd(b=> [...b,newBook]);

        try{
                console.log("try block")
                await axios.put("http://localhost:8800/books/" + bookId,newBook);
                console.log("Book saved")
        }
        catch(err){
                console.error(err);

        }        
    }

    function handleTitleAdd(event){
               setTitleAdd(event.target.value);
               //console.log(titleadd);
    }

    function handleDescriptionAdd(event){
            SetDescriptioAdd(event.target.value);
            //console.log(descriptionadd);
    }
    function handlePriceAdd(event){
            SetPriceAdd(event.target.value);
            //console.log(priceadd);
    }
    function handleCoverAdd(event){
            SetCoverAdd(event.target.value);
            //console.log(coveradd);
    }

    return(
        
        <div className="form">
            
            <h1>Update new Book</h1>
            <input placeholder="title" type="text" onChange={handleTitleAdd} name="title" value={titleadd}></input>
            <input placeholder="description" type="text" onChange={handleDescriptionAdd} name="description" value={descriptionadd}></input>
            <input placeholder="price" type="number" onChange={handlePriceAdd} name="price" value={priceadd}></input>
            <input placeholder="cover" type="text" onChange={handleCoverAdd} name="cover" value={coveradd}></input>

            <button onClick={handleAddBook}>Update the Book</button>
            
        </div>
        
    )
}

export default Update;