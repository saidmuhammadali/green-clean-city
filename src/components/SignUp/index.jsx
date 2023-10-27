import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Button } from "./style";
import { FcGoogle } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo.png";
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
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-12 ft-2"
              style={{ marginTop: "-80px" }}
            >
              <h5 style={{ fontSize: "15px" }}>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/home" style={{ fontSize: "11px" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/Donation" style={{ fontSize: "11px" }}>
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/marketplace"
                    style={{ fontSize: "11px" }}
                  >
                    {" "}
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/location" style={{ fontSize: "11px" }}>
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt=""
              style={{
                width: "50px",
                height: "30px",
                marginTop: "-342px",
                marginLeft: "30px",
              }}
            />
            <p className="pp">
              Lorem ipsum dolor sit <br /> amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="divbuton">
            <input className="input" type="Email" placeholder="  Email" />
            <button className="buttom">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p style={{ fontSize: "10px" }}>Design By Green Clean City</p>
      </div>
    </>
  );
}

export default SignUp;
