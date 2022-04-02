import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const login = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result));
      setLoading(false);
      toast.success("Login successful");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="Login-parent">
        {loading && <Loader />}
        <div
          className="Login-top"
          style={{
            height: "100%",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            backgroundColor: "#B4ECE3",
            zIndex: "0",
          }}
        ></div>
        <div className="row">
          <div className="col-md-6" style={{ zIndex: "1", color: "white" }}>
            <div
              className="login-form"
              style={{ paddingLeft: "200px", paddingTop: " 200px" }}
            >
              <h2>Login</h2>

              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
 
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
             
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <LoginWrapper>
                <Button onClick={login}>Login</Button>

                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Click her to Register
                </Link>
              </LoginWrapper>
            </div>
          </div>
          <div className="col-md-5">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_gjmecwii.json"
              background="transparent"
              speed="1"
              style={{
                width: "400px",
                height: "400px",
                paddingLeft: "100px",
                paddingTop: "100px",
              }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </Layout>
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

export default LoginPage;
