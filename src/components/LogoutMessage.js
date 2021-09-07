import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

const Logout = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="logout-container">
      <h1>Welcome {user.firstName}!</h1>
      <LogoutButton/>
    </div>
  );
};

export default Logout;
