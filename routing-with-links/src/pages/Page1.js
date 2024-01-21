import React from "react";
import {Link} from "react-router-dom";


export const Page1=()=>{

    let pageOne=(
        <>
        <h2>Page One</h2>

        <p><Link to="/">HomePage</Link></p>
        <p><Link to="/pageOne"> page one</Link></p>
        <p><Link to="/pageTwo"> page two</Link></p>
        <p><Link to="/pageThree"> Page three</Link></p>
        </>
    );
    return pageOne;
}