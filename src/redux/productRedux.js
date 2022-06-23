import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {}
    //GET ALL
    getProductStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
})


