import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import myContext from "../../../context/context";

export default function Login() {
  const { setUser } = useContext(myContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post("http://localhost:5000/login", obj);
      console.log("data posted successfully...");
      setUser(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login mt-3">
      <div className="container d-flex justify-content-center align-items-center mt-2">
        <form
          className="w-50 p-1 rounded-2 h-50"
          id="loginForm"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center fw-bold">Welcome to Leftover</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-btn-cont d-flex flex-column justify-content-center align-items-center">
            <button type="submit" className="btn w-50">
              Submit
            </button>
            <p className="register-cont mt-3">
              Don't have an account?
              <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
