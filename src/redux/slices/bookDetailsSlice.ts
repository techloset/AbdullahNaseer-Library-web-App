import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "../../Types/types"; 

interface FetchBookDetailsParams {
  id: string;
}

interface BookDetailsState {
  isLoading: boolean;
  data: Book | null;
  isError: boolean;
}

export const fetchBookDetails = createAsyncThunk<Book, FetchBookDetailsParams>(
  "bookDetails/fetchBookDetails",
  async ({ id }: FetchBookDetailsParams) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: BookDetailsState = {
  isLoading: false,
  data: null,
  isError: false,
};

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export default bookDetailsSlice.reducer;
