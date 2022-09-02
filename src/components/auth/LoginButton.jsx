import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/userSlice";
import {UserCircleIcon} from "@heroicons/react/outline";

const LoginButton = () => {
  const {currentUser} = useSelector((state) => state.user)

  const dispatch = useDispatch()
  // const splitProfilenamePic = currentUser.fullName.toLowerCase().split(' ').map(name => name[0]).join('')
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    window.location.reload()
  }
  return (
      <>

        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar is-login">
            <div className="">
              {/*<box-icon aria-label="avatar-icon" name="user-circle" color="#ffffff"></box-icon>*/}
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  {currentUser === null ? <UserCircleIcon/> :
                      <img src={currentUser.profileImage}/>}
                </div>
              </div>
              {" "}
            </div>
          </label>
          <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {currentUser === null && (
                <li>
                  <Link to="auth/login" className="">
                    <box-icon name="user" color="#eaeaea"></box-icon>
                    {currentUser === null ? "Sign In" : " Your Profile"}
                  </Link>
                </li>
            )}
            {currentUser !== null && (
                <li>
                  <Link to={`video/c/${currentUser.channelId}`}>
                    <box-icon name='user-rectangle' type='solid' color='#ffffff'></box-icon>
                    Your Channel
                  </Link>
                </li>
            )}
            <li>
              <a>
                <box-icon name="sun" color="#ffffff"></box-icon>
                Light Mode
              </a>
            </li>
            <li onClick={handleLogout}>
              <a>
                {/* <box-icon name="sun" color="#ffffff"></box-icon> */}
                Logout
              </a>
            </li>
          </ul>
        </div>
      </>
  );
};

export default LoginButton;
