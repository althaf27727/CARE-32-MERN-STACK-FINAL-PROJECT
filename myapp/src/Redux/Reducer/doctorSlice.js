import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constants/API';

const initialState={
    doctorData:[],
    status:"idle"
}

export const getDoctors= createAsyncThunk('doctors/get',async()=>{
    // const response = await axios.get('http://localhost:5000/api/admin/view-doctor')
    const response = await axios.get(`${BASE_URL}/api/admin/view-doctor`)

    const result= response.data.data
    console.log(result);
    return result
})




const doctorSlice=createSlice({
    name:"doctors",
    initialState,
    extraReducers:(builder)=>{

    builder.addCase(getDoctors.pending,(state,action)=>{
state.status="loading"
    })
    .addCase(getDoctors.fulfilled,(state,action)=>{
        state.status="idle"
        state.doctorData=action.payload

    })
    .addCase(getDoctors.rejected,(state,action)=>{
state.status="error"
    })



    
}

    
})

export default doctorSlice.reducer

    
