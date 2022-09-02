import {createSlice} from "@reduxjs/toolkit";

export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    currentChannel: null,
    fetching: false,
    error: null,
    subscribed: null
  },
  reducers: {
    startFetching: (state) => {
      state.fetching = true
    },
    errorFetching: (state) => {
      state.error = true
    },
    successFetching: (state, action) => {
      state.fetching = false
      state.error = false
      state.currentChannel = action.payload
    },
    subscription: (state, action) => {

    }
  }
})

export const {
  startFetching,
  errorFetching,
  successFetching,
  subscription
} = channelSlice.actions

export default channelSlice.reducer