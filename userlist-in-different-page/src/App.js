import './App.css';
import React,{useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { UsersList } from "./UsersList";
import { AddUser } from "./AddUser";

function App() {

  const initialList=[
    {userid:"1",firstName:"John",lastName:"Doe",email:"22d@gmail.com"},
    {userid:"2",firstName:"Frank",lastName:"Jonas",email:"98john@gmail.com"}
  ];
  const[userList,setUserList]=useState(initialList);

  const onAdd=(user)=>{
    setUserList(userList.concat(user));
  }

  const onRemove=(userid)=>{
    setUserList(userList.filter((user)=>user.userid!==userid))
  }
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Routes>

<Route exact path="/" 
element={<UsersList userlist={userList} removeUserFunction={onRemove}></UsersList>}>
</Route>

<Route exact path="/adduser" element={<AddUser addUserFunction={onAdd}></AddUser>}></Route>

       </Routes>
       
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
