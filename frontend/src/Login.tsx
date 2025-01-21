import {useState } from "react";

export default function Login({ setLoginVisible }: { setLoginVisible: React.Dispatch<React.SetStateAction<boolean>> }){
    return(
        <div>
            <input type="text" placeholder="Please Enter First Name"></input>
            <input type="text" placeholder="Please Enter Last Name"></input>
            <input type="text" placeholder="Please Enter Email"></input>
            <button onClick={(() => setLoginVisible(false))}>Login</button>
        </div>
    )
}