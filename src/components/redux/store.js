import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../redux/slices/VideoSlice";
export default configureStore({
  reducer: {
    videos: videosReducer,
  },
});
