import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: [],
    error: null,
    status: "idle"
  };


  export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const res = await fetch("http://localhost:5001/prod/all");
      const json = await res.json();
      return json;
    }
  );

  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
         .addCase(
          fetchProducts.fulfilled,
          (state, action) => {
              
            state.status = "success";
            state.products = action.payload;
          }
        )
        .addCase(fetchProducts.rejected, (state) => {
          state.status = "error";
        })
    },
  });

  export default productsSlice.reducer;
  export const allProducts = (state) => state.products.products;  
  