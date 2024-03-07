import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import './MyCart.css'
const MyCart = () => {
  var Token = localStorage.getItem("Token");
  console.log(Token);

  const UserId = localStorage.getItem("UserId");
  console.log(UserId);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/mycart/view-mycart", {
      //   headers: {
      //     Authorization: `Bearer ${Token}`,
      //   },
      // })
      .get(`${BASE_URL}/api/mycart/view-mycart`, {
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
    axios
  //   .delete(`http://localhost:5000/api/mycart/delete-cartitem/${id}`,{}, {
  //     headers: {
  //       Authorization: `Bearer ${Token}`,
  //     },
  //   });
  //   window.location.reload();
  //   navigate("/view-mycart");
  // };
  .delete(`${BASE_URL}/api/mycart/delete-cartitem/${id}`,{}, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    window.location.reload();
    navigate("/view-mycart");
  };

  const increment = async (id, item) => {
    try {
      const updatedQuantity = item.quantity + 1;

      const response = await axios.post(
        `http://localhost:5000/api/mycart/increment/${id}/${UserId}`
      );

      console.log(response);
      const updatedProduct = data.map((product) =>
        product._id === id ? { ...product, quantity: updatedQuantity } : product
      );
      setData(updatedProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const decrement = async (id, item) => {
    try {
      const updatedQuantity = item.quantity - 1;

      const response = await axios.post(
        `http://localhost:5000/api/mycart/decrement/${id}/${UserId}`
      );

      console.log(response);
      const updatedProduct = data.map((product) =>
        product._id === id ? { ...product, quantity: updatedQuantity } : product
      );
      setData(updatedProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const subTotal = data.map((item) => {
    return item.price * item.quantity;
  });
  console.log(subTotal);

  const total = subTotal.reduce((total, item) => total + item, 0);
  console.log(total);

  // const total = data.reduce((total, item)=>total + item.price*item.quantity,0)
  // console.log(total);

  return (
    <>
      <div
        className="row"
        style={{
          display: "-ms-inline-flexbox",
          justifyContent: "space-around",
          marginTop: "30px",
          maxWidth: "1530px",
        }}
      >
        {data.length > 0 ? (
          <>
            {data.map((item) => (
              <>
                <Card style={{ width: "15rem" }}>
                  {/* <Card.Img variant="top" src={`/images/${item.image}`} /> */}
                  <Card.Img variant="top" src={item.image} />

                  <Card.Body>
                    <Card.Title>Medicine Name: {item.name}</Card.Title>

                    <Card.Text> {item.description}</Card.Text>
                    <Card.Text>Price in MRP: {item.price}</Card.Text>
                    <Card.Text>
                      {/* Quantity: {item.quantity} */}
                      Quantity:{item.quantity}
                      {/* <button onClick={() => increment(item._id)}>+</button> */}
                      <Button
                        style={{ marginLeft: "5px" }}
                        type="submit"
                        variant="primary"
                        onClick={() => increment(item._id, item)}
                        >
                        +
                      </Button>
                      <Button
                        style={{ marginLeft: "10px" }}
                        type="submit"
                        variant="primary"
                        onClick={() => decrement(item._id, item)}
                        >
                        -
                      </Button>
                      <h4 style={{ marginTop: "10px" }}>
                        Subtotal: {item.price * item.quantity}
                      </h4>
                    </Card.Text>
                  </Card.Body>

                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant="primary"
                    type="submit"
                  >
                    Delete from mycart
                  </Button>
                  <br />
                </Card>
              </>
            ))}

            <center>
              {" "}
              <h1>Total:{total}</h1>
            </center>

            <br />
            <br />
            <center>
              <Link to={`/checkout`}>
                <Button variant="dark"> Buy now</Button>
              </Link>
            </center>
          </>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </>
  );
};

export default MyCart;
