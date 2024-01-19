//example2

import React,{useState} from "react";

const FormPage=()=>
{
const[name,setName]=useState("");
const[country,setCountry]=useState("");
const[HairColor,setHairColor]=useState("");

let formPage=(
<div> 
    <form>
        <h3>Enter your information</h3>
        <table>
            <tr>
                <td>
                    Name  
                </td>
                <td>
                    <input type="text" value={name} 
                    onChange={e=>setName(e.target.value)}/>
                </td>
            </tr>

            <tr>
                <td>
                    Country
                </td>
                <td>
                    <select type="text"
                    value={country}
                    onChange={e=>setCountry(e.target.value)}>
                    <option>USA</option>
                    <option>Nepal</option>
                    <option>India</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td>Hair Color</td>

                <td>
                    <input type="radio"
                    value="Black"
                    checked={HairColor==="Black"}
                    onChange={e=>setHairColor(e.target.value)}/>Black
                </td>

                <td>
                    <input type ="radio"
                    value="Brown"
                    checked={HairColor==="Brown"}
                    onChange={e=>setHairColor(e.target.value)}></input>
                    Brown

                </td>

            </tr>

            <button onClick={
e=>{
    alert("submitted");
    e.preventDefault();
}

            }>Submit</button>
        </table>
        </form>

<p>Name : {name}</p>
<p>Country: {country}</p>
<p>Hair Color: {HairColor}</p>
        </div>
        
);
return formPage;

}

export default FormPage;






//example one
// import React,{useState} from "react";

// const FormPage=()=>
// {
//     const[name,setName]=useState("");
//     const[email,setEmail]=useState("");

// let formPage=(
// <form>
// <h3>Enter your Information</h3>

// <div>

//     <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}></input>
// </div>

// <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}></input>

// <button onClick={e=>{
//     alert(`your name is:${name} and your email is : ${email}`);
//     e.preventDefault();
// }}>Submit</button>

// <p> Name = {name}</p>
// <p> Email = {email}</p>
//     </form>




// )
// return formPage;




// }
// export default FormPage;