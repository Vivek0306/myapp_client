import { useRef } from "react";
import "./register.css";
import {useHistory, Link } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e)=>{
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    }
    else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };

      try{
        await axios.post("/auth/register", user)
        history.push("/login")
      }catch(err){
        console.log(err);
      }
    }
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BrosBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on BrosBook.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input placeholder="Username" type="text" ref={username} required className="loginInput" />
            <input placeholder="Email" type="email" ref={email} required className="loginInput" />
            <input placeholder="Password" type="password" minLength={6} ref={password} required className="loginInput" />
            <input placeholder="Password Again" type="password" minLength={6} required ref={passwordAgain} className="loginInput" />
            <button type="submit" className="loginButton">Sign Up</button>
            <Link to={`/login`} className="loginRegisterButtonLink">
              <button className="loginRegisterButton">
                Log into Account
              </button>
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
}
