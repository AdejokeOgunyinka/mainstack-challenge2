 import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from './types'

interface IUserSliceState {
   userDetails: IUser | null
 }
 
 const initialState: IUserSliceState = {
   userDetails: null,
 }
 
 export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
     setUserDetails: (state, action: PayloadAction<IUser>) => {
       state.userDetails = {...state.userDetails,...action.payload};
     },
   },
 })
 
 export const { setUserDetails } = userSlice.actions
 
 export const userReducer = userSlice.reducer;
 