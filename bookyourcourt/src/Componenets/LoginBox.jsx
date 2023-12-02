import { MDBInput, MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Constants/Const";

import { toastError, toastSuccess } from "../Constants/plugins";

import { useNavigate } from "react-router-dom";

function LoginBox({ setBoxName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    setBoxName("signup");
  };
  const handleLogin=()=>{
    try {
      if(email&&password){
        axios.post(`${BASE_URL}/auth/login`,{email,password}).then((res)=>{
          if(res.data.message==="login successfull"&&res.data.token){
            localStorage.setItem("token",res.data.token)
            const parsedToken=parseJwt(res.data.token)
            localStorage.setItem("user",JSON.stringify(parsedToken))
            navigate("/home")
            toastSuccess("login successful")
          }else if(res.data.message==="invalid credentials"){
            toastError("invalid credentials")
          }
        })
      }else{
        toastError("credentials not filled")
      }
      
    } catch (error) {
      console.log(error)
    }
  }


  // parseJwt function for decoding backend user token details
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-4 pt-5">
        <MDBIcon />
        <MDBInput
          label="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBIcon />
        <MDBInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="mb-4" size="lg" onClick={handleLogin}>
        Login
      </button>
      <p className="text-center mb-5 mx-1 mx-md-4 mt-4" onClick={handleSignUp}>
        Sign up
      </p>
    </>
  );
}

export default LoginBox;
