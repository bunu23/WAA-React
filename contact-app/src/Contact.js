import React,{useState} from "react";
import axios from "axios";

export const Contact=()=>{

const cleanContact={firstName:"",lastName:"",email:"",phone:""};
const[contact,setContact]=useState(cleanContact);
const[contactList,setContactList]=useState([]);

const loadContacts=()=>{
    const contacts=axios.get("http://localhost:8080/contacts")
    .then((response)=>{
    console.log(response.data.contacts).setContactList(response.data.contacts);
})
}

const addContact=(contact)=>{
    axios.post("http://localhost/contacts",contact)
    .then((response)=>{
console.log("added contact"+response.data.firstName);
loadContacts();
    })
}

const removeContact=(e)=>{
    let url="http://localhost:8080/contacts"+e.target.value;
    console.log("removing contact with url : "+url);
    axios.delete(url)
    .then((response)=>{
        console.log("removed contact"+response.headers);
        loadContacts();
    })
}

const handleFieldChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(contact){
        console.log("call the server");
        addContact(contact);
    }

    setContact(cleanContact);
    console.log("load contacts");
    loadContacts();
    console.log("contacts loaded");
}

return(

    <div>
<h2>Contacts</h2>

<table>
    <thead>
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
    </thead>

    <tbody>
        {contactList.map(contact=>(
            <tr key={contact.firstName}>
                <td>{contact.firstName}</td>
<td>{contact.lastName}</td>
<td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td><button onClick={removeContact} value={contact.firstName}> Remove</button></td>
            </tr>
       ) )}
    </tbody>
   
</table>

<button onClick={loadContacts}>Load Contacts</button>


<h2>Add a new contact</h2>

<form onSubmit={handleSubmit}>

<div>FirstName: 
    <input type="text"
    placeholder="firstname"
    name="firstName"
    value={contact.firstName}
    onChange={handleFieldChange}></input>
</div>

<div>LastName: 
    <input type="text"
    placeholder="lastname"
    name="lastName"
    value={contact.lastName}
    onChange={handleFieldChange}></input>
</div>

<div>Email: 
    <input type="text"
    placeholder="email"
    name="email"
    value={contact.email}
    onChange={handleFieldChange}></input>
</div>

<div>phone: 
    <input type="text"
    placeholder="phone"
    name="phone"
    value={contact.phone}
    onChange={handleFieldChange}></input>
</div>

<button type="submit"> Add Contact </button>



</form>


    </div>
)



}