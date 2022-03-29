import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="col-md-4" style={{ zIndex: "1" }}>
          <div className="login-form">
            <h2>Register</h2>
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
            <input
              type="text"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button onClick={register}>Register</button>
            <hr />
            <Link to="/login" style={{ color: "white" }}>
              Click her to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistePage;
