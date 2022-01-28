import React from "react";
import {  useSelector } from "react-redux";


function User() {
  const { name } = useSelector((state) => state.user);

  return (
    <div>
      <h3>User:{name}</h3>
    </div>
  );
}

export default User;
