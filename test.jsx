import React from 'react'

const test = () => {
  return (
    <div>




<div className="container">
  <div className="window">
    <div className="order-info">
      <div className="order-info-content">
        <h2>Order Summary</h2>
        <div className="line" />
        <table className="order-table">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
                  className="full-width"
                />
              </td>
              <td>
                <br /> <span className="thin">Nike</span>
                <br /> Free Run 3.0 Women
                <br />{" "}
                <span className="thin small">
                  {" "}
                  <br />
                  <br />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="price">$99.95</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="line" />
        <table className="order-table">
          <tbody>
           
          </tbody>
        </table>
        <div className="line" />
        <div className="total">
          <span style={{ float: "left" }}>
            TOTAL
          </span>
          <span style={{ float: "right", textAlign: "right" }}>
            $435.55
          </span>
        </div>
      </div>
    </div>
    <div className="credit-info">
      <div className="credit-info-content">
        <table className="half-input-table">
          <tbody>
            
          </tbody>
        </table>
       
       
        <table className="half-input-table">
          <tbody>
        
          </tbody>
        </table>
        <button className="pay-btn">Place Order</button>
      </div>
    </div>
  </div>
</div>




User

i have a 2 address in a card with 1 radio button for each card i want the card to be displayed when i click one radio button in react js
ChatGPT
To achieve the behavior you described in React, you can use state to determine which card should be displayed based on the selected radio button. Here's a simple example to get you started:

jsx
Copy code
import React, { useState } from 'react';

const CardComponent = ({ address }) => (
  <div>
    <h2>Address: {address}</h2>
    {/* Add other card content here */}
  </div>
);


const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleRadioChange = (address) => {
    setSelectedCard(address);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="address1"
          checked={selectedCard === "address1"}
          onChange={() => handleRadioChange("address1")}
        />
        Card 1
      </label>

      <label>
        <input
          type="radio"
          value="address2"
          checked={selectedCard === "address2"}
          onChange={() => handleRadioChange("address2")}
        />
        Card 2
      </label>

      {selectedCard && <CardComponent address={selectedCard} />}
    </div>
  );
};

export default App




</div>





import React, { useState } from 'react';

const CardComponent = ({ address }) => (
  <div>
    <h2>Primary Address: {address}</h2>
    {/* Add other card content here */}
  </div>
);

const App = () => {
  const [selectedCard, setSelectedCard] = useState("address1"); // Set the primary address initially

  const handleRadioChange = (address) => {
    setSelectedCard(address);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="address1"
          checked={selectedCard === "address1"}
          onChange={() => handleRadioChange("address1")}
        />
        Card 1 (Primary)
      </label>

      <label>
        <input
          type="radio"
          value="address2"
          checked={selectedCard === "address2"}
          onChange={() => handleRadioChange("address2")}
        />
        Card 2
      </label>

      <CardComponent address={selectedCard} />
    </div>
  );
};

export default App;

   
  )
}
















import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../Redux/Reducer/doctorSlice";
import { FadeLoader } from "react-spinners";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doctors.doctorData);
  const status = useSelector((state) => state.doctors.status);

  // const [data, setData] = useState([]);
  useEffect(() => {
    // axios
    //   .get(`${BASE_URL}/api/viewdoc/view-doctor`)
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data.data);
    //   });
    dispatch(getDoctors());
  }, []);

  if (status === "loading") {
    // return <h1 className="text-centre">LOADING....</h1>
    return (
      <>
        <div style={{ marginTop: "150px" }}>
          <center>
            <FadeLoader color="#000000" size={20} speedMultiplier={1} />
          </center>
        </div>
      </>
    );
  }
  if (status === "error") {
    return (
      <center>
        {" "}
        <h1 style={{ marginTop: "100px" }}>Error occured! Please try again!</h1>
      </center>
    );
  }

  return (
    <div>
      <center>
        <h1 className="hone">Specialized services.</h1>
        <h1 className="htwo">Superior outcomes.</h1>
      </center>

      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="./images/CardOne.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Care32</h2>
                <p className="card_text">care32 </p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="./images/CardTwo.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Care32</h2>
                <p className="card_text">care32 </p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="./images/CardThree.png" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Implant</h2>
                <p className="card_text">
                  Dental implants are medical devices surgically
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <>
        <div className="parallax">
          <div>
            <center>
            <Link to={`/appointment`}>
              <button style={{ color: "white", backgroundColor: "#008CBA",marginTop:'10px' }}>
                Request Appointment
              </button>
              </Link>
            </center>
          </div>{" "}
        </div>
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Care32</h2>
                  <p className="card_text">care32 </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Care32</h2>
                  <p className="card_text">care32 </p>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Care32</h2>
                  <p className="card_text">care32</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="parallax"> </div>

        <div className="parallax"> </div>

      </>
    </div>
  );
};

export default Home;


export default test