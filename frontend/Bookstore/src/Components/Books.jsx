import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Books(){
    const[books,setBooks]=useState([])

    useEffect(()=>{
    const fetchAllBooks=async()=>{
        try{
            const res = await axios.get("http://localhost:8800/books")
            setBooks(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchAllBooks()
    },[])


   async function handleDelete(id){
    console.log("Inside delete")
       try{
        await axios.delete("http://localhost:8800/deletebook/"+id);
        console.log("Book deleted");
        window.location.reload();
       }
       catch(err){
        console.log(err);
       }
    }
    return(
        <div className="container">
         <h1>BOOK SHOP</h1>
         <div className="book">
           {
            books.map((book,index)=>
                <div key={index}>
                     {book.cover && <img src="{book.cover}" alt=""></img>}
                     <h2>{book.title}</h2>
                     <p>{book.description}</p>
                     <span>{book.price}</span>
                     <button className="delete" onClick={()=>handleDelete(book.id)}>DELETE</button>
                     <button className="update"><Link to={`/updatebook/${book.id}`}>Update</Link></button>
                </div>
                

            )
           }
         </div>
         <button>
            <Link to="/addbook">Add Book</Link>
         </button>
        </div>
    )
}

export default Books;