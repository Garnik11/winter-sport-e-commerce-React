import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/product-reducer"

export const store = configureStore({
    reducer:{products:productReducer}
})

