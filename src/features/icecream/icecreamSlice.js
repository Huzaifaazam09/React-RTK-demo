import { createSlice } from '@reduxjs/toolkit'

import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams : 20,
    totalIcecreamsOrdered: 0,
}

const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered: (state) => {
            state.numOfIcecreams--;
            state.totalIcecreamsOrdered++;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(cakeOrdered, (state) =>{
    //         state.numOfIcecreams--
    //     })
    // },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions 
// export const icecreamActions = icecreamSlice.actions 