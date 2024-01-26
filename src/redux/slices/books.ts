import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface FetchBooksParams {
  startIndex: number;
  maxResults: number;
}

interface BooksState {
  isLoading: boolean;
  data: any | null; // Replace 'any' with the actual type of your book data
  isError: boolean;
}

export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async ({ startIndex, maxResults }: FetchBooksParams) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=harrypotter:keyes&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyA9HOGeKjPBNtTLUjSXpSKlLy2eixVWGP0`
    );
    const data = await response.json();
    return data;
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
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("error", (action.payload as PayloadAction));
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export default booksSlice.reducer;
