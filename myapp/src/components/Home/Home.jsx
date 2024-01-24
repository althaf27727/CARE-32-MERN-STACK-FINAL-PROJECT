import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../Redux/Reducer/doctorSlice";
import  {PacmanLoader,FadeLoader}  from  'react-spinners';
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.doctors.doctorData);
  const status=useSelector((state)=> state.doctors.status)

  // const [data, setData] = useState([]);
  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/api/viewdoc/view-doctor")
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data.data);
    //   });
    dispatch(getDoctors());
  }, []);

if(status==="loading"){
// return <h1 className="text-centre">LOADING....</h1>
return (
  <>
  <div style={{marginTop:'150px'}} >

 <center>
 <FadeLoader color="#000000"
  size={20}
  speedMultiplier={1}
/>
 </center>

  </div>
</>
)
}
if(status==="error"){
  return <center><h1 style={{marginTop:'100px'}} >Error occured! Please try again!</h1></center> 
}


  return (
    <div  >
      <div  style={{backgroundImage:`url("https://images.unsplash.com/photo-1578689001884-55c21e109439?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,backgroundSize:'cover',height:'1000px'}}></div>
     
      {/* <div>
        <Carousel controls={false} data-bs-theme="dark" interval="5s" fade>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={"/images/SLIDE-A.png"}
              alt="CARE 32"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={"/images/SLIDE-B.png"}
              alt="CARE 32"
            />
          </Carousel.Item> */}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={"/images/SLIDE-C.png"}
              alt="CARE 32"
            />
          </Carousel.Item>
        </Carousel>
      </div> */} 

      {/* <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          // maxWidth: "1536px",
        }}
      >
       <center><h2> <i> Our Specialist Doctors </i></h2></center> 
        {data.map((item) => (
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
            />
            <Card.Body>
            <center><Card.Title>{item.doctorname}</Card.Title></center>  

            <center><Card.Text>{item.specialization}</Card.Text></center>  
            </Card.Body>
            <Link to={`specific-doctor/${item.doctorname}`}>
            <center>  <Button style={{marginBottom:"10px"}}>Book appointment</Button> </center>
            </Link>
          </Card>
        ))} */}

        
        {/* <div style={{marginTop:'90px',backgroundImage:      "url('https://media.istockphoto.com/id/1151550380/vector/seamless-background-with-teeth-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=yZCKKNSWKc9OVviCXREwvhuwQFpu5wXzUSSDmVe129M=')",
            height: "200px",
           width:"1530px",
        
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            
            }}>  <center> <h1 style={{marginTop:"50px"}} ><i>Make your Dental <br />
            Experience more Brighter. </i> </h1></center> </div> 


            
    <div>
       */}
 
    {/* </div> */}
           
         
     
      </div>
  
      
  );
};

export default Home;
