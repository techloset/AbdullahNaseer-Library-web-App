
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    const data: Book = await response.json();
    return data;
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
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBookDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export default bookDetailsSlice.reducer;
