import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes : 10,
    totalCakesOrdered: 0,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: ( state ) => {
            state.numOfCakes--;
            state.totalCakesOrdered++;
        },
        restocked: ( state, action ) => {
            state.numOfCakes += action.payload
        },
    },
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions 
// export const cakeActions = cakeSlice.actions 