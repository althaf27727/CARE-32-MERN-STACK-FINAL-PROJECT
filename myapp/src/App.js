import "./App.css";
import Appoinment from "./components/Appoinment/Appoinment";
import Doctordetails from "./components/DoctorDetails/Doctordetails";
import DoctorReg from "./components/DoctorReg/DoctorReg";
import Editpatient from "./components/EditPatient/Editpatient";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PatientDt from "./components/PatientDt/PatientDt";
import PatientReg from "./components/PatientReg/PatientReg";
import Register from "./components/Register/Register";
import StaffReg from "./components/StaffReg/StaffReg";
import Treatment from "./components/Treatment/Treatment";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewDoctor from "./components/ViewDoctor/ViewDoctor";
import SpecificDoctor from "./components/SpecificDoctor/SpecificDoctor";
import ViewAppointment from "./components/ViewAppointment/ViewAppointment";
import Profile from "./components/Profile/Profile";
import "react-toastify/dist/ReactToastify.css";
import AddMedicine from "./components/AddMedicine/AddMedicine";
import ViewMedicines from "./components/ViewMedicines/ViewMedicines";
import WishList from "./components/WishList/WishList";
import MyCart from "./components/MyCart/MyCart";
import Address from "./components/Address/Address";
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
import ProfileAddress from "./components/ProfileAddress/ProfileAddress";
import Payment from "./components/Payment/Payment";
import ViewProducts from "./components/ViewProducts/ViewProducts";
import EditMedicine from "./components/EditMedicine/EditMedicine";
import EditDoctor from "./components/EditDoctor/EditDoctor";
import MyAddress from "./components/MyAddress/MyAddress";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/treatment" element={<Treatment />} /> */}
          <Route path="/login" element={<Login />} />

          <Route path="/stfreg" element={<StaffReg />} />

          <Route path="/docreg" element={<DoctorReg />} />
          <Route path="/patientdetails" element={<PatientDt />} />
          <Route path="/ptregister" element={<PatientReg />} />
          <Route path="/ptedit/:id" element={<Editpatient />} />
          <Route path="/add-doctor" element={<Doctordetails />} />
          <Route path="/appointment" element={<Appoinment />} />
          <Route path="/view-doctor" element={<ViewDoctor />} />
          <Route
            path="/specific-doctor/:doctorname"
            element={<SpecificDoctor />}
          />
          <Route path="/view-appointment" element={<ViewAppointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
          <Route path="/view-medicine" element={<ViewMedicines />} />
          <Route path="/view-wishlist" element={<WishList />} />
          <Route path="/view-mycart" element={<MyCart />} />
          <Route path="/add-address" element={<Address />} />
          <Route path="/profile-address" element={<ProfileAddress />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/payment/:total" element={<Payment />} />
          <Route path="/view-products" element={<ViewProducts />} />
          <Route path="/edit-medicine/:id" element={<EditMedicine />} />
          <Route path="/edit-doc/:id" element={<EditDoctor />} />
          <Route path="/myaddress" element={<MyAddress/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
