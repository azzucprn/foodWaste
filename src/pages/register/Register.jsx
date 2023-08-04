import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const res = axios.post("http://localhost:5000/register", obj);
      console.log("data posted successfully...");
      window.location.replace("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="nav-header">
        <Link to="/">
          <img
            src="src/assets/images/sublogo.jpg"
            className="header-logo"
            alt="LeftOver"
          />
        </Link>
      </div>
      <div className="register-cont">
        <div className="container d-flex justify-content-center align-items-center mt-2">
          <form
            className="p-2 rounded-2"
            id="registrationForm"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center fw-bold">Welcome to Leftover</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <label className="form-label fs-5" htmlFor="form3Example1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <label className="form-label fs-5" htmlFor="form3Example2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fs-5" htmlFor="form3Example3">
                Email address
              </label>
              <input
                required
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label fs-5" htmlFor="form3Example4">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>

            <div className="btn-container d-flex justify-content-center align-items-center">
              <button type="submit " className="btn mb-2">
                Register
              </button>
            </div>

            <div className="text-center">
              <p>
                Already a member? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
