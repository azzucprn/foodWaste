import { useEffect, useState } from "react";
import PageFooter from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./availbleFood.css";
import { useNavigate } from "react-router-dom";

export default function AvailbleFood() {
  const [foodList, setFoodList] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    confirm(
      "Thankyou for trusting us. You will be navigated to home page now..."
    );
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFoodList = await axios.get(
          "https://foodsharing-backend.onrender.com/fetchFood"
        );
        setFoodList(fetchedFoodList.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(foodList);

  return (
    <>
      <Navbar />
      <div className="container availbleFoodContainer">
        {foodList &&
          foodList.map((food) => {
            return (
              <div className="foodContainer" key={food._id}>
                <div className="foodImgContainer">
                  <img
                    src={"http://localhost:5000/uploads/" + food.image}
                    alt="food-image"
                    className="food-image"
                  />
                </div>
                <div className="foodInfoContainer">
                  <p>Food Name: {food.foodName}</p>
                  <p>Expiry Date: {food.expDate}</p>
                  <p>Address : {food.address}</p>
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Get this food
                  </button>
                  <div className="modal" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Food Info</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            onClick={handleClick}
                          ></button>
                        </div>

                        <div className="modal-body">
                          <p className="text-wrap">
                            you can react out to the provider at
                            <p>
                              Contact: <i>9998887776</i>
                            </p>
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
                </div>
              </div>
            );
          })}
      </div>
      <PageFooter />
    </>
  );
}
