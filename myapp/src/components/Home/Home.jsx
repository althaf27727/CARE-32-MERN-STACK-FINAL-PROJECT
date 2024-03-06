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
