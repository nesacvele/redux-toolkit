import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState: {
        allProducts: [], // ovde cuvamo podatke
        isLoading: true,
        singleProduct: {},
        loadSingleProduct: false
    },
    reducers: {
        getAllProductsAction: (state, action) => {
            // stigli podaci
            state.isLoading = false;
            state.allProducts = action.payload
        },

        getSingleProductAction: (state, action) => {
            console.log(action.payload);
            state.singleProduct = action.payload
        }
    }
})

export const { getAllProductsAction, getSingleProductAction } = productSlice.actions;  // actions - redusers
export default productSlice.reducer;