// import React, { useState } from 'react'
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios"
// const StaffLog = () => {
//   const [item, setItem] = useState({});
//   const handlechange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setItem({ ...item, [name]: value });
//     console.log(item);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:5000/api/stflog", item)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
// <center>
// <Form>
          
//           <Form.Group className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               style={{ width: "300px", border: "2px solid grey" }}
//               onChange={handlechange}
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               style={{ width: "300px", border: "2px solid grey" }}
//               onChange={handlechange}
//               type="password"
//               name="password"
//               placeholder="Password"
//             />
//           </Form.Group>

//           <Button onClick={handleSubmit}  variant="primary" type="submit">
//        Login
//       </Button> 


//           </Form>
//           </center>
//     </div>
   
//   )
// }

// export default StaffLog