import "./ourStory.css";
import Navbar from "../../components/navbar/Navbar";
import PageFooter from "../../components/footer/Footer";

export default function OurStory() {
  return (
    <div className="ourStory">
      <Navbar />
      <div className="story-container-card">
        <div className="story-container">
          <div className="main-img-cont">
            <img
              src="src/assets/images/sharingFood.jpg"
              className="main-img"
              alt="main-img"
            />
          </div>
          <div className="story-container-text">
            <h3>About Leftover</h3>
            <p className="para1">
              Leftover is a non-profit food sharing platform that connects food
              sharers with those in need, all with the aim of reducing food
              wastage. Shockingly, around 1.3 billion tonnes of food is wasted
              globally each year, with over 30% of that occurring in Ireland
              alone. In Dublin, where we are based, over 50,000 tonnes of food
              is wasted every year.
            </p>
            <p className="para2">
              At Leftover, we believe that every little bit counts. That's why
              we've created a simple and easy-to-use platform. With just three
              clicks or less, you can share your Leftover and within three
              clicks, someone in need can get in touch with you. Hence, Our
              belief:
              <i>"why bin it; pin it & win it"</i>
            </p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
