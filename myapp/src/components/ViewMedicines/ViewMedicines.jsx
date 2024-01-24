import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const ViewMedicines = () => {
  const Token = localStorage.getItem("Token");
  console.log(Token);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/medicine/view-medicine")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, []);
     const addToMycart = (item) => {
        axios
        .post("http://localhost:5000/api/mycart/addto-mycart", item,{
          headers:{
            Authorization: `Bearer ${Token}`
          }
          
        })

        .then((response) => {
          console.log(response);
          setData(response.data.data);
         
      
        });
        
      }
      



  const addToWishlist = (item) => {
    axios
      .post("http://localhost:5000/api/wishlist/add-wishlist", item,{
        headers:{
            Authorization: `Bearer ${Token}`
        }
      })
      
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });

   
      
      
  };
  return (
    <div>
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          maxWidth: "1536px",
        }}
      >
        {data.map((item) => (
          <Card border="info" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={`/images/${item.image}`} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>

            {Token !== null ? (
              <>
                <Link to={`/view-wishlist`}>
                  <Button onClick={() => addToWishlist(item)}>
                    {" "}
                    Add to wishlist
                  </Button>
                </Link>
                <br />
                <Link to={`/view-mycart`}>
                  <Button onClick={() => addToMycart(item)}>
                    {" "}
                    Add to Cart
                  </Button>
                </Link>
              </>
            ) : (
              ""
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewMedicines;
