import React from "react";
import { useContext } from "react"g5;
import userContext from "../userContext";

const Profile = () => {
  const userName = useContext(userContext);
  return (
    <>
      <h1>Hello {userName}</h1>
    </>
  );
};

export default Profile;
