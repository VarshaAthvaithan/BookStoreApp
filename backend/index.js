import express from "express"
import mysql from "mysql2"
import cors from "cors"
const app=express()


const db=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"varsha2002",
        database:"test"
})


app.use(express.json())
app.use(cors())
app.get("/hey",(req,res)=>{
     res.json("hello this is backend hare krishna!")
})

app.get("/books",(req,res)=>{
    const q="SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) return res.json;
        return res.json(data)
    })
})


app.post("/newbook",(req,res)=>{
    const q="INSERT INTO books (`title`,`description`,`price`,`cover`) VALUES (?)";
    const values=[req.body.title,req.body.description,req.body.price,req.body.cover];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json;
        return "Book successfully added";
    })
})


app.delete("/deletebook/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE id = ?";

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json;
        return "Book successfully deleted";
    })




})



app.put("/books/:id",(req,res)=>{
    const bookId=req.params.id;

    const q="UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id=? ";
    const values=[
        req.body.title,req.body.description,req.body.price,req.body.cover
    ]

    db.query(q,[...values,bookId],(err,data)=>{
        if(err) return res.json;
        return "Book Updated deleted";
    })


})


app.listen(8800,()=>{
    console.log("Connected to backend!")
})