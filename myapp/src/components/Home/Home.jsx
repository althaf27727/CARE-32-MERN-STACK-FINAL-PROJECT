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
      <>
  <div id="services" className="card-container">
    <div className="card">
      <img
        src="https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg?w=996&t=st=1709737763~exp=1709738363~hmac=83673175d13d576603b04833bced72e71c2d0386ce6866083d076d80c5b28fe3"
        alt="Service 1 Image"
      />{" "}
      <h3>Preventive Dentistry</h3>
      <p>Regular check-ups and cleanings to maintain optimal oral health.</p>
    </div>
    <div className="card">
      <img src="https://img.freepik.com/free-photo/close-up-happy-client-dental-clinic_23-2149206232.jpg?t=st=1709738265~exp=1709741865~hmac=9c5276bccdb2060f43a73d37bb7d3de3a6dd64be3bfea314888d63909f00f703&w=996" />
      <h3>Cosmetic Dentistry</h3>
      <p>Enhance your smile with our cosmetic dentistry solutions.</p>
    </div>
    <div className="card">
      <img
        src="https://img.freepik.com/free-photo/patient-dentist-office-having-check-up_23-2148338118.jpg?t=st=1709738145~exp=1709741745~hmac=c3dc1b4989a0cc8be5864da6fff4cd8eac4ed65b4fafee5b999ce34bc6d3844f&w=996"
        alt="Service 3 Image"
      />{" "}
      <h3>Restorative Dentistry</h3>
      <p>
        Repair and restore your teeth with our restorative dental procedures.
      </p>
    </div>
  </div>
  <div className="footer">
    <p>
      Contact us to schedule an appointment and start your journey to a
      healthier smile.
    </p>
    <p>© 2024 Your Dental Clinic. All rights reserved.</p>
  </div>
</>

      
        
            <center>
            <Link to={`/appointment`}>
              <button style={{ color: "white", backgroundColor: "#008CBA",marginTop:'10px' }}>
                Request Appointment
              </button>
              </Link>
            </center>
        
    </div>
  );
};

export default Home;
