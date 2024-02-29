import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./Payment.css";
import { BASE_URL } from "../../constants/API";

const Payment = () => {
  var Token = localStorage.getItem("Token");
  console.log(Token);

  const UserId = localStorage.getItem("UserId");
  console.log(UserId);
  const { total } = useParams();
  console.log(total);
  const [data, setData] = useState({
    total: total,
  });
  console.log(total);



  useEffect(() => {
    axios
  //     .get("http://localhost:5000/api/mycart/view-mycart", {
  //       headers: {
  //         Authorization: `Bearer ${Token}`,
  //       },
  //     })

  //     .then((response) => {
  //       console.log(response);
       
  //     });
  // }, []);
  .get(`${BASE_URL}/api/mycart/view-mycart`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })

      .then((response) => {
        console.log(response);
       
      });
  }, []);

  return (
    <div>
      <h1>TOTAL AMOUNT :{data.total}</h1>


      <div>



      </div>
    </div>
    
  );
};

export default Payment;
