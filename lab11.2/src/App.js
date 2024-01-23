import React,{useState} from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import { AddBook } from "./AddBook";
import { Books } from "./Books";
import './App.css';

function App() {
const[bookList,setBookList]=useState([]);


const onAdd=(book)=>{
  setBookList(bookList.concat(book));
}

const onRemove=(isbn)=>{
  setBookList(bookList.filter((book)=>book.isbn!==isbn));
}


  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>

<Route exact path="/" element={<Books bookList={bookList} removeFunction={onRemove}></Books>}/>

<Route path="/addbook" element={<AddBook addBookFunction={onAdd}></AddBook>} />

       </Routes>
       </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
