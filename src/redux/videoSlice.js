import {createSlice} from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    currentVideo: null,
    loading: false,
    error: null,
    liked: null,
    disliked: null,
    comments: null
  },
  reducers: {
    fetchVideoStart: (state) => {
      state.loading = true
    },
    fetchVideoSuccess: (state, action) => {
      state.loading = false
      state.currentVideo = action.payload
    },
    fetchVideoError: (state) => {
      state.error = true
    },
    likeVideo: (state, action) => {
      if (action.payload === 200) {
        state.liked = true
        state.disliked = false
      }
    },
    dislikeVideo: (state, action) => {
      if (action.payload === 200) {
        state.disliked = true
        state.liked = false
      }
    },
    fetchComment: (state) => {
      state.loading = true
    },
    fetchCommentSuccess: (state, action) => {
      state.loading = true
      state.comment = action.payload
    },
  }
})

export const {
  fetchVideoStart,
  fetchVideoSuccess,
  fetchVideoError,
  likeVideo,
  dislikeVideo,
  fetchComment,
  fetchCommentSuccess
} = videoSlice.actions
export default videoSlice.reducer