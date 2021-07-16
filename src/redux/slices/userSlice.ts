import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface userState {
  displayName: string
  uid: string
}

// Define the initial state using that type
const initialState: userState = {
displayName: "",
uid: "",

}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    registerUser: (state, action: PayloadAction<string>) => {
      state.displayName += action.payload
    }
  }
})

export const {  registerUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.displayName

export default userSlice.reducer