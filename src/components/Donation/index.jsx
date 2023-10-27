import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import "./stil.css";
import logo from "../../img/logo.png";
export default function Doantion() {
  return (
    <>
      <MDBContainer fluid className="py-5" style={{}}>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard className="rounded-3">
              <MDBCardBody className="mx-1 my-2">
                <div className="d-flex align-items-center">
                  <div>
                    <MDBIcon
                      fab
                      icon="cc-visa"
                      size="4x"
                      className="text-black pe-3"
                    />
                  </div>
                  <div>
                    <p className="d-flex flex-column mb-0">
                      <b>GreenCleanCity</b>
                      <span className="small text-muted">**** 8880</span>
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="d-flex flex-row pb-3">
                    <div
                      className="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                      style={{ backgroundColor: "rgba(18, 101, 241, 0.07)" }}
                    >
                      <div className="d-flex align-items-center pe-3">
                        <MDBRadio
                          name="radioNoLabelX"
                          id="radioNoLabel11"
                          defaultChecked
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <p className="mb-1 small text-primary">
                          Total amount due
                        </p>
                        <h6 className="mb-0 text-primary">$1.200</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="rounded border d-flex w-100 px-3 py-2 align-items-center">
                    <div className="d-flex align-items-center pe-3">
                      <MDBRadio name="radioNoLabelX" id="radioNoLabel11" />
                    </div>
                    <div className="d-flex flex-column py-1">
                      <p className="mb-1 small text-primary">Other amount</p>
                      <div className="d-flex flex-row align-items-center">
                        <h6 className="mb-0 text-primary pe-1">$</h6>
                        <MDBInput
                          id="typeNumber"
                          type="number"
                          size="sm"
                          style={{ width: "55px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-1">
                  <a
                    href="/home"
                    className="text-muted"
                    style={{ textDecoration: "none" }}
                  >
                    Go back
                  </a>
                  <a href="https://payme.uz/fallback/payme-visa/">
                    {" "}
                    <button
                      style={{
                        width: "90px",
                        height: "40px",
                        border: "none",
                        borderRadius: "10px",
                        background: "#0066ff  ",
                        color: "white",
                      }}
                    >
                      Pay amount
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
