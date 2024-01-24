import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    bookingData:[],
    status:"idle"
}
export const postBookings= createAsyncThunk('bookings/post',async(data)=>{
    const response = await axios.post('http://localhost:5000/api/appointment/fill-appointment',data)

    const result= response
    console.log(result);
    // return result
})
const bookingSlice=createSlice({
    name:"bookings",
    initialState,
    extraReducers:(builder)=>{

    builder.addCase(postBookings.pending,(state,action)=>{
state.status="loading"
    })
    .addCase(postBookings.fulfilled,(state,action)=>{
        state.status="idle"
      

    })
    .addCase(postBookings.rejected,(state,action)=>{
state.status="error"
    })
    
}

    
})

export default bookingSlice.reducer