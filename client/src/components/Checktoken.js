import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios"

const Checktoken = () => {

    const [Token, setToken] = useState("");


    Axios.defaults.withCredentials = true;
    const confirmEmail = () => {
        Axios.post("http://localhost:3001/confirmEmail", {
            Token: username,
            password: password,
        }).then((response) => {
            if (!response.data.auth) {
                setLoginStatus(false)
            } else {
                localStorage.setItem("token", response.data.token)
                setLoginStatus(true)
            }
        });
    };

    const userAuthenticated = () => {
        Axios.get("http://localhost:3000/confirme", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username..."
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="password..."
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={login}>Log In</button>

            <h1>
                {loginStatus && (
                    <button onClick={userAuthenticated}> Check if Authenticated</button>
                )}
            </h1>
        </div>
    )
}
export default Checktoken;