import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVideos = createAsyncThunk("videos/getVideos", async () => {
  const response = await fetch("/api/videos");
  const data = await response.json();
  return data.videos;
});

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    return data.categories;
  }
);

const initialState = {
  videosArr: [],
  categoriesArr: [],
  loading: false,
  dummyText: "loream prism",
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    changeDummyTextValue: (state) => {
      state.dummyText = "newValue for dummyText";
    },
  },

  extraReducers: {
    [getVideos.fulfilled]: (state, action) => {
      state.videosArr = action.payload;
    },

    [getCategories.fulfilled]: (state, action) => {
      state.categoriesArr = action.payload;
    },
  },
});
export const { changeDummyTextValue } = videoSlice.actions;
export default videoSlice.reducer;
