import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../Redux/Reducer/doctorSlice";
import { FadeLoader } from "react-spinners";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doctors.doctorData);
  const status = useSelector((state) => state.doctors.status);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  if (status === "loading") {
    return (
      <div className="loading-spinner">
        <FadeLoader color="#000000" size={20} speedMultiplier={1} />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="error-message">
        <h1>Error occurred! Please try again!</h1>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">Specialized services.</h1>
        <h2 className="subtitle">Superior outcomes.</h2>
      </div>

      <div className="card-section">
        <ul className="cards">
          {/* Replace image paths with your actual image paths */}
          <li className="cards_item">
            <Card>
              <Card.Img variant="top" src="./images/CardOne.png" />
              <Card.Body>
                <Card.Title>Care32</Card.Title>
                <Card.Text>care32</Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li className="cards_item">
            <Card>
              <Card.Img variant="top" src="./images/CardTwo.png" />
              <Card.Body>
                <Card.Title>Care32</Card.Title>
                <Card.Text>care32</Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li className="cards_item">
            <Card>
              <Card.Img variant="top" src="./images/CardThree.png" />
              <Card.Body>
                <Card.Title>Implant</Card.Title>
                <Card.Text>Dental implants are medical devices surgically</Card.Text>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>

      <div className="button-section">
        <Link to={`/appointment`}>
          <Button variant="primary">Request Appointment</Button>
        </Link>
      </div>

      <div className="image-section">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://your-image-url-1.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://your-image-url-2.jpg" alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
