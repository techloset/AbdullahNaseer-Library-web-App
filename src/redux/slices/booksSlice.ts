import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BooksResponse,
  FetchBooksParams,
  BooksState,
} from "../../types/types";


export const fetchBooks = createAsyncThunk<BooksResponse, FetchBooksParams>(
  "fetchBooks",
  async ({ startIndex, maxResults }: FetchBooksParams) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=science:keyes&startIndex=${startIndex}&maxResults=${maxResults}&key=${
          import.meta.env.VITE_APIKEY
        }`
      );
      return response.data;
    } catch (error) {
      console.error("Error: ", error);
      if (error instanceof Error) {
        throw new Error(error?.message || "Error while fetching data");
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  }
);

const initialState: BooksState = {
  isLoading: false,
  data: null,
  isError: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export default booksSlice.reducer;
