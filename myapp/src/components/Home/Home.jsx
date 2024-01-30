import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../Redux/Reducer/doctorSlice";
import  {PacmanLoader,FadeLoader}  from  'react-spinners';
import './Home.css'
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
  return <center> <h1  style={{marginTop:'100px'}} >Error occured! Please try again!</h1></center> 
}


  return (
    <div >
      {/* <div className="background-image"></div> */}
      <div><img style={{marginLeft:'700px'}} src="https://www.pngall.com/wp-content/uploads/8/Dentistry-PNG.png" alt="" /></div>
     
      <div className="main">
      <center>
        <h1 className="hone" >Specialized services.</h1>
        <h1 className="htwo">Superior outcomes.</h1>
        </center>
      
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
care32          </p>
        
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
care32          </p>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
            care32
          </p>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
care32          </p>
         
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
           care32
          </p>
         
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://img.freepik.com/premium-vector/cute-dental-characters-teeth-with-dental-implant-cartoon-flat-design_581569-53.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">Care32</h2>
          <p className="card_text">
           care32
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>

     
      

           
        
      
     
      </div>
  
      
  );
};

export default Home;
