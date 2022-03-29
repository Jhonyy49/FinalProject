import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

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
            height: "50%",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            backgroundColor: "#003f5c",
            zIndex: "0",
          }}
        ></div>
        <div className="row">
          <div className="col-md-4" style={{ zIndex: "1", color: "white" }}>
            <div className="login-form">
              <h2>Login</h2>
              <hr />
              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button onClick={login}>Login</button>
              <hr />
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Click her to Register
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_5tkzkblw.json"
              background="transparent"
              speed="1"
              // style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
