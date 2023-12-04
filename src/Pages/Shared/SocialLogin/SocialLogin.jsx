import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
const {googleSignIn} = useContext(AuthContext)
    const handleLogin = () =>{
      googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            const savedUser = {name:loggedUser.displayName, email:loggedUser.email}
            fetch('https://bisto-boss-server-two.vercel.app/users', {
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(savedUser)
          })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
        })
        .catch(err =>{
            console.log(err);
        })
    }

  return (
    <div className=" my-2 flex flex-col items-center">
      <div className="divider"></div>
      <button onClick={handleLogin} className="btn btn-circle">
        <FaGoogle/>
      </button>
    </div>
  );
};

export default SocialLogin;
