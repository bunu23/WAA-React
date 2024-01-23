import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

export const AddBook=({addBookFunction})=>{
const navigate=useNavigate();
const cleanuser={isbn:"",title:"",author:"",price:""}
const[book,setBook]=useState(cleanuser);

const handleSubmit=(e)=>{
    e.preventDefault();
    addBookFunction(book);
    navigate("/");
}

const handleFieldChange=(e)=>{
    setBook({...book,[e.target.name]:e.target.value});
}

return(
<div>
<h2>Add new Book: </h2>
<form onSubmit={handleSubmit}>

<div>isbn
<input type="text"
placeholder="isbn"
name="isbn"
value={book.isbn}
onChange={handleFieldChange}></input>
</div>

<div>Title
<input type="text"
placeholder="title"
name="title"
value={book.title}
onChange={handleFieldChange}></input>
</div>

<div>Author
    <input type="text"
    name="author"
    value={book.author}
    placeholder="author"
    onChange={handleFieldChange}/>
</div>

<div>Price
  <input type="text"
  name="price"
  value={book.price}
  onChange={handleFieldChange}></input>  
</div>
<button type="submit">Submit</button>
</form>


</div>




)





}