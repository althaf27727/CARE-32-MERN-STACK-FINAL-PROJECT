import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import './MyAddress.css'


const MyAddress = () => {
    const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  console.log(Role);
  console.log(Token);

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


  return (
    <div>
      <div className="transbox">
       <center>
    {address.map((item)=> (
 <Card className='addresscard'>
      
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
{item.mobile} <br />
{item.address} <br />

        </Card.Text>
      </Card.Body>
      
    </Card>
    




    ))}
   </center>
            <center><Link to={`/profile-address`}>
          <Button style={{width:"200px"}}>Add Address</Button>
          </Link>
</center>


</div>
  



    </div>
  )
}

export default MyAddress