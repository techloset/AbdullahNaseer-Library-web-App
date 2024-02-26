import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book,FetchMonthBooksParams,MonthState } from "../../types/types";

export const fetchMonthBooks = createAsyncThunk<Book[], FetchMonthBooksParams>(
  "fetchMonthBooks",
  async ({ startIndex, maxResults }: FetchMonthBooksParams) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=rich+dad:keyes&startIndex=${startIndex}&maxResults=${maxResults}&key=${
          import.meta.env.VITE_APIKEY
        }`
      );
      return response.data.items as Book[];
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

const initialState: MonthState = {
  isLoading: false,
  data: null,
  isError: false,
};

const monthSlice = createSlice({
  name: "monthBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonthBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMonthBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchMonthBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export default monthSlice.reducer;
