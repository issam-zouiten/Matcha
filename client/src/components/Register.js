import React from 'react';
import { useState } from "react";
import Axios from "axios"

const Register = () => {

    const [LastnameReg, setLastnameReg] = useState("");
    const [FirstnameReg, setFirstnameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [EmailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [ConfirmpasswordReg, setConfirmpasswordReg] = useState("");

    Axios.defaults.withCredentials = true;
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            lastname: LastnameReg,
            firstname: FirstnameReg,
            username: usernameReg,
            email: EmailReg,
            password: passwordReg,
            Confirmpassword: ConfirmpasswordReg,
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Lastname: </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setLastnameReg(e.target.value);
                    }}
                />
                <label>Firstname: </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setFirstnameReg(e.target.value);
                    }}
                />
                <label>Username: </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <label>Email: </label>
                <input
                    type="text"
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}
                />
                <label>Password: </label>
                <input
                    type="password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <label>Confirm Password: </label>
                <input
                    type="password"
                    onChange={(e) => {
                        setConfirmpasswordReg(e.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}
export default Register;