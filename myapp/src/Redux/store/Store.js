import { configureStore } from '@reduxjs/toolkit';
import doctorSlice from '../Reducer/doctorSlice';
import bookingSlice from '../Reducer/bookingSlice';


export default configureStore({
    reducer: {
     doctors:doctorSlice,
     bookings:bookingSlice
    },
  });
