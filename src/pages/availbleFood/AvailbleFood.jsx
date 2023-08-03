import { useEffect, useState } from "react";
import PageFooter from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./availbleFood.css";

export default function AvailbleFood() {
  const [foodList, setFoodList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFoodList = await axios.get(
          "http://localhost:5000/fetchFood"
        );
        setFoodList(fetchedFoodList.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(foodList);

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
                  <button className="btn">Get this food</button>
                </div>
              </div>
            );
          })}
      </div>
      <PageFooter />
    </>
  );
}
