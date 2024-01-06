
import "./mix.css"
import { NavLink } from "react-router-dom"
import React, { useState } from 'react'

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });
     console.log(inpval)
    const setVal = (e) => {
      //  console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { username, email, password, cpassword } = inpval;

        if (username === "") {
            alert("Please Enter your name")
        } else if (email === "") {
            alert("Please Enter your email")
            
        } else if (!email.includes("@")) {
            alert("Please Enter valid email")
           
        } else if (password === "") {
            alert("Please Enter your password");
        } else if (password.length < 6) {
            alert("Password contain more than 6 character")
        } else if (cpassword === "") {
            alert("Please confirm your password");
        }
        else if (cpassword.length < 6) {
            alert("Password contain more than 6 character")
        } else if (password !== cpassword) {
            alert("Password not matched")
        } else {
        //  console.log("user registration succesfully done");


        const data = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, email, password, cpassword
            })
        });
           
        const res =await data.json();
       // console.log(res);
       if (res.status === 201) {
       alert("Registration Successfully done 😃!", {
            position: "top-center"
        });
        setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" });
    }
            
        }
    }

    return (
        <>
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Sign Up</h1>
                    <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                        your tasks! We hope that you will get like it.</p>
                </div>

                <form>
                    <div className="form_input">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={setVal} value={inpval.username} name="username" id="username" placeholder='Enter Your Name' />
                    </div>
                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                    </div>
                    <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <div className="two">
                            <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                            <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                {!passShow ? "Show" : "Hide"}
                            </div>
                        </div>
                    </div>

                    <div className="form_input">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="two">
                            <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm password' />
                            <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                {!cpassShow ? "Show" : "Hide"}
                            </div>
                        </div>
                    </div>

                    <button className='btn' onClick={addUserdata}>Sign Up</button>
                    <p>Already have an account? <NavLink to="/">Log In</NavLink></p>
                </form>
                
            </div>
        </section>
    </>
    )

    
}
export default Register