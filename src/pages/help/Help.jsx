import "./help.css";
import PageFooter from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import myContext from "../../../context/context";

export default function Help() {
  const { user } = useContext(myContext);
  console.log(user);
  return (
    <div className="help">
      <div className="nav-header">
        <Link to="/">
          <img
            src="src/assets/images/sublogo.jpg"
            className="header-logo"
            alt="LeftOver"
          />
        </Link>
      </div>
      <div className="hero-container">
        <div className="left-container">
          <h2>
            You're doing the right thing,<span className="lineBreak"></span>the
            easiest possible way
          </h2>
        </div>
        <div className="right-container mt-2">
          <table className="table table-bordered table-hover">
            <tr>
              <th className="text-center" colSpan="2">
                Here's the way
              </th>
            </tr>
            <tr>
              <td>1. Login or Register</td>
              <td>Cause safety is our top priority.</td>
            </tr>

            <tr>
              <td>2. Tell us a few things about your Leftover</td>
              <td>Like your food's photo, quantity, expiration etc..</td>
            </tr>

            <tr>
              <td>3. That's all</td>
              <td>
                You made us believe a bit more in our motto: <br />
                'why bin it; just pin it & win it'
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bottom-info-container">
        <h3>Lets get you started...</h3>
        {!user ? (
          <div className="btn-container" id="bottom-btn-container">
            <Link className="bottom-btn mx-1" to="/login">
              LogIn
            </Link>
            <Link className="bottom-btn" to="/register">
              Register
            </Link>
          </div>
        ) : (
          <div id="direct-upload-cont" className="mt-4">
            <Link className="bottom-btn" to="/uploadFood">
              Go to Upload Food
            </Link>
          </div>
        )}
      </div>
      <PageFooter />
    </div>
  );
}
