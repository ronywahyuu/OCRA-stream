import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
const LoginModal = () => {
  return (
    <div className="modal rounded-lg" id="loginModal">
      <div className="modal-box">
        <div className="modal-action">
          <a href="#" className="">
            x
          </a>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={logo} alt="" />
          <h3 className="font-bold text-lg">Log in to your account!</h3>
        </div>

        <form
          action=""
          method="POST"
          className="flex flex-col items-center mt-4 gap-5"
        >
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-secondary w-full max-w-xs"
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

export default LoginModal;
