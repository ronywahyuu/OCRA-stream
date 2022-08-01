import React from "react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar is-login">
        <div className="">
          <box-icon name="user-circle" color="#ffffff"></box-icon>{" "}
        </div>
      </label>
      <ul
        tabIndex="0"
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="">
          <a className="" href="#loginModal">
            <box-icon name="user" color="#eaeaea"></box-icon>
            Sign In
          </a>
        </li>
        <li>
          <a>
            <box-icon name="sun" color="#ffffff"></box-icon>
            Light Mode
          </a>
        </li>
      </ul>

      <LoginModal />
    </div>
  );
};

export default LoginButton;
