import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar is-login">
        <div className="">
          <box-icon aria-label="avatar-icon" name="user-circle" color="#ffffff"></box-icon>{" "}
        </div>
      </label>
      <ul
        tabIndex="0"
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="">
          <Link to="/auth/login" className="">
            <box-icon name="user" color="#eaeaea"></box-icon>
            Sign In
          </Link>
        </li>
        <li>
          <a>
            <box-icon name="sun" color="#ffffff"></box-icon>
            Light Mode
          </a>
        </li>
      </ul>

      {/* <LoginModal /> */}
    </div>
  );
};

export default LoginButton;
