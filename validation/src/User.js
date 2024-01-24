import React,{useState} from "react";

export const User=(props)=>{
    const cleanuser={
        firstName:"",
        lastName:"",
        email:""
    }
    
    const[user,setUser]=useState(cleanuser);

    const [firstNameError,setFirstNameError]=useState({});
    const[lastNameError,setLastNameError]=useState({});
    const[emailError,setEmailError]=useState({});


const handleOnSubmit=(e)=>{
e.preventDefault();
const isValid=formValidation();
if(isValid){
    setUser(cleanuser);
    alert("form is valid");
}
}

const formValidation=()=>{
    const firstNameEr={};
    const lastNameEr={};
    const emailEr={};
    let isValid=true;

    if(user.firstName.trim().length<3){
        firstNameEr.firstNameShort="firstname is too short"
        isValid=false;
    }

    if(user.lastName.trim().length>7){
        lastNameEr.lastnameLong="lastname is too long"
        isValid=false;
    }
    if(user.lastName.trim().length<3){
        lastNameEr.lastnameShort="lastname is too short"
        isValid=false;
    }

    if(user.email.trim().length<2){
        emailEr.emailtooshort="email is too short"
        isValid=false;
    }

    setFirstNameError(firstNameEr);
    setLastNameError(lastNameEr);
    setEmailError(emailEr);
    return isValid;


}

const handleFieldChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
}


let pageOne=(

<div>
<h3>Enter your data </h3>

<form onSubmit={handleOnSubmit}>

<div>
FirstName:
<input type="text"
placeholder="firstName"
name="firstName"
value={user.firstName}
onChange={handleFieldChange}/>
{Object.keys(firstNameError).map((key)=>{
    return <div style={{color:"blue"}}>
        {firstNameError[key]}
    </div>
})}
</div>

<div>
    LastName:
    <input type="text"
    placeholder="lastName"
    name="lastName"
    value={user.lastName}
    onChange={handleFieldChange}/>
    {Object.keys(lastNameError).map((key)=>{
        return <div style={{color:"blue"}}>
            {lastNameError[key]}
        </div>
    })}
</div>

<div>
Email:
<input type="text"
placeholder="email"
name="email"
value={user.email}
onChange={handleFieldChange}/>
{
Object.keys(emailError).map((key)=>{
return <div style={{color:"blue"}}>
    {emailError[key]}
</div>
})}
</div>
<button type="submit">Next</button>
</form>


</div>



)
return pageOne;

}