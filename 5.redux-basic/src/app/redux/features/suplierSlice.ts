'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://192.168.91.10:8000/api';

export const getSuplierList = createAsyncThunk(
  'data/getData',
  async () =>
    await axios
      .get('/suplier')
      .then(function (response) {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch(function (error) {
        console.log('data gagal',error.response);
        // return rejectWithValue(error.response);
      }),
);

export type DataSUplier={
  nama_suplier:string;
  alamat_suplier:string;
  telp_suplier:string;
}

type DataState = {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  data: DataSUplier[];
};

const initialState: DataState = {
  isPending: false,
  isSuccess: false,
  isError: false,
  data:[] ,
};

export const suplierSlice = createSlice({
  name: 'suplier',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSuplierList.pending, (state, action) => {
      (state.isPending = true),
        (state.isSuccess = false),
        (state.isError = false);
    });
    builder.addCase(getSuplierList.fulfilled, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
      state.data = action.payload;
    });
    builder.addCase(getSuplierList.rejected, (state, action) => {
      (state.isPending = false),
        (state.isSuccess = true),
        (state.isError = false);
    });
   
  },
});

export default suplierSlice.reducer;