import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Button } from "./style";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      <div>
        <h3>SignUp</h3>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div>
          <button>SignIn</button>
        </div>
      </div>
      <div>
        <Button onClick={handleClick}>
          <FcGoogle style={{ top: "3px", position: "relative" }} /> Sign with
          Google
        </Button>
      </div>
    </>
  );
}

export default SignUp;
