import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link, useParams } from 'react-router-dom';
import "./CheckOut.css"
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

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

  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/address/view-address", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })

      .then((response) => {
        console.log(response);
        setAddress(response.data.data);
      });
  }, []);

  
  const subTotal = data.map((item) => {
    return item.price * item.quantity;
  });
  console.log(subTotal);

  const total = subTotal.reduce((total, item) => total + item, 0);
  console.log(total);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleRadioChange = (address) => {
    setSelectedAddress(address);
  };


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
        


     

    
 
 <div>
        {address.map((item) => (
          <Card key={item.id} className='addresscard'>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.mobile} <br />
                {item.address} <br />
              </Card.Text>
              <label className="container">
                select
                <input
                  type="radio"
                  name="address"
                  value='select'
                  onChange={() => handleRadioChange(item)}
                />
              </label>
            </Card.Body>
          </Card>
        ))}
      </div>
      <center>
      {selectedAddress && (
        <div>
          <h2>Selected Address:</h2>
          <p>{selectedAddress.name}</p>
          <p>{selectedAddress.mobile}</p>
          <p>{selectedAddress.address}</p>
        </div>

      )}
      </center>
</div>







  )
}

export default CheckOut