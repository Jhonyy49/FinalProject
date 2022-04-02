import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const RegistePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const register = async () => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      setLoading(false);
      toast.success("registration successful");
    } catch (error) {
      console.log(error);
      toast.error("registration failed");
      setLoading(false);
    }
  };
  return (
    <div className="register-parent">
      {loading && <Loader />}
      <div
        className="register-top"
        style={{
          height: "100%",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          backgroundColor: "#8479E1",
        }}
      ></div>
      <div className="row">
        <div className="col-md-5">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
            background="transparent"
            speed="1"
            // style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div
          className="col-md-4"
          style={{ zIndex: "1", paddingTop: " 250px", paddingLeft: "100px" }}
        >
          <div className="login-form">
            <h2 style={{ color: "white" }}>Register</h2>

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              style={{ width: "500px" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              style={{ width: "500px" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              style={{ width: "500px" }}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <br />
            <LoginWrapper>
              <Button onClick={register}>Register</Button>

              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Click her to Login
              </Link>
            </LoginWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 30px;
`;

export default RegistePage;
