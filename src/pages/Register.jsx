import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Register = ({handleRegister}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


    const handleOnSubmit=(e)=>{
        e.preventDefault();
        handleRegister(fullName, email, password, confirmPassword);
    }



    return (
    <div className=" flex justify-center" id="">
      <div className="modal-box">
        <div className="flex justify-center flex-col items-center">
          <img src={logo} alt="" />
          <h3 className="font-bold text-lg">Create a new account</h3>
        </div>

        <form
          action=""
          method="POST"
          className="flex flex-col items-center mt-4 gap-5"
          onSubmit={handleOnSubmit}
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-secondary w-full "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder="Last Name"
              className=" input input-bordered input-secondary w-full max-w-xs"
            /> */}
          </div>
          <div className="flex w-full gap-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-secondary w-full "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div className="flex gap-2 w-full">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered input-secondary w-full "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered input-secondary w-full "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>

          {/* new user */}
          <div>
            <p>
              New Ocra Enjoyer{" "}
              <Link to="/register" className="link link-primary">
                Create Account
              </Link>
            </p>
          </div>
        </form>
        {/* <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
      <p className="py-4">
        You've been selected for a chance to get one year of subscription to
        use Wikipedia for free!
      </p> */}
      </div>
    </div>
  );
};

export default Register;
