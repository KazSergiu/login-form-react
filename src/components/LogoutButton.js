import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../usersState/user";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout-container">
      <button
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default LogoutButton;
