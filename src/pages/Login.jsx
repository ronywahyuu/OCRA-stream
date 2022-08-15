import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    // handleRegister(fullName, email, password, confirmPassword);
  };

//   const cookies = new Cookies();
//   cookies.set('session-id', {}, { path: '/' });

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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="username"
            className="input input-bordered input-secondary w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-secondary w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Button
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

export default Login;
