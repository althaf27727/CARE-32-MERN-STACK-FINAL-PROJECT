import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const WishList = () => {
  const Token = localStorage.getItem("Token");
  console.log(Token);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/wishlist/view-wishlist", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })

      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, []);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/wishlist/delete-wishlist/${id}`);
    window.location.reload();
    window.location.reload();
    navigate("/view-wishlist")
  };
  return (
    <>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          maxWidth: "1536px",
        }}
      >
 {data.length>0 ? (
      <>
      
      {data.map((item) => (
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={item.image} />

            <Card.Body>
              <Card.Title>Medicine Name: {item.name}</Card.Title>

              <Card.Text> {item.description}</Card.Text>
              <Card.Text>Price in MRP: {item.price}</Card.Text>
            </Card.Body>
            <Button
              onClick={() => handleDelete(item._id)}
              variant="primary"
              type="submit"
            >
              Delete from wishlist
            </Button>
          </Card>
        ))}  
      </>
    ) : (
      <p>U have no wishlist</p>
    )}


      </div>
    </>
  );
};

export default WishList;
