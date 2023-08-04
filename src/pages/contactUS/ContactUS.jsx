import "./contactUS.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooter from "../../components/footer/Footer";

export default function ContactUS() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    window.location.replace("/");
  };

  return (
    <div className="contactUS">
      <Navbar />
      <div className="contact-form-cont">
        <form className="form w-50" id="contact-form" onSubmit={handleSubmit}>
          <h3 className="contact-form-para text-center">
            Provide your feedback here...
          </h3>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Feedback
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="home-submit-btn-container d-flex justify-content-center align-items-center">
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              id="contactUs-submit-btn"
            >
              Submit
            </button>
          </div>
          {/* Popup */}
          <div className="modal" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">LeftOver Inc.</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    onClick={handleClick}
                  ></button>
                </div>

                <div className="modal-body">
                  <p className="text-wrap">
                    Thankyou for providing your valuable feedback. Our team will
                    reach out to you after analysing your feedback.
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="redirect-btn"
                    data-bs-dismiss="modal"
                    onClick={handleClick}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <PageFooter />
    </div>
  );
}
