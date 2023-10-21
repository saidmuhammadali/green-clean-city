import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Button } from "./style";
import { FcGoogle } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

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
      <div className="wrapper  d-flex align-itmes-center justify-content-center  w-100 ">
        <div className="login ">
          <h2 className="mb-3 ">Login</h2>
          <form className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label htmlFor="emial" className="form-label">
                Email Adress
              </label>
              <input type="email" className="form-control" required></input>
              <div className="invalid-feedback">Enter Email</div>
            </div>
            <div className="form-grou was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" required></input>
              <div className="invalid-feedback">Enter password</div>
            </div>
            <button type="submit" className="btn btn-primary mt-2 w-100">
              SIGN UP
            </button>
            <Button onClick={handleClick}>
              <FcGoogle
                style={{ top: "-1px", left: "-8px", position: "relative" }}
              />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
