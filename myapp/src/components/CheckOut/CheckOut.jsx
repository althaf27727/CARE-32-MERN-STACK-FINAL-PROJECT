import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import "./CheckOut.css"
import Button from "react-bootstrap/Button";

const CheckOut = () => {
    var Token = localStorage.getItem("Token");
  console.log(Token);

  const UserId = localStorage.getItem("UserId");
  console.log(UserId);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/mycart/view-mycart", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })

      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, []);
  const subTotal = data.map((item) => {
    return item.price * item.quantity;
  });
  console.log(subTotal);

  const total = subTotal.reduce((total, item) => total + item, 0);
  console.log(total);
  return (
    <div>
        <div>
        <div style={{marginTop:"30px"}} className="container">
        <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1"></div>
          <div className="col col-2">Product</div>
          <div className="col col-3">Quantity</div>
          <div className="col col-4">Price</div>
        </li>
        </ul>
        </div>
        {data.map((item) => (
      <div className="container">
 
      <ul className="responsive-table">
       
        <li className="table-row">
          <div className="col col-1" >
            
          </div>
          <div className="col col-2" >
            {item.name}
          </div>
          <div className="col col-3" >
            {item.quantity}
          </div>
          <div className="col col-4" >
            {item.price}
          </div>
        </li>
        
      </ul>
    </div>

     
       
        
        
      
        
      ))}
     <center> <h1>TOTAL AMOUT TO BE PAID:{total}</h1> </center>
        </div>

        
<center><Link to={`/payment/${total}`}>
          <Button style={{width:"200px"}}> Place order</Button>
          </Link>
</center>
        
    </div>
  )
}

export default CheckOut