import {createSlice} from "@reduxjs/toolkit"


export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    fetching: false,
    error: false
  },
  reducers: {
    startLogin: (state) => {
      state.fetching = true
    },
    successLogin: (state, action) => {
      state.currentUser = action.payload
      state.fetching = false
      state.error = false
    },
    failedLogin: (state) => {
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
    }
  }
})

export const {startLogin, successLogin, failedLogin, logout} = userSlice.actions

export default userSlice.reducer