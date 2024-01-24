// import { createSlice } from "@reduxjs/toolkit";

// const bookSlice = createSlice({
//     name: 'book'
// });
// export default bookSlice.reducer



import { createSlice, Slice } from "@reduxjs/toolkit";

interface BookState {
    // Define the state properties here
}

const initialState: BookState = {
    // Initialize the state properties here
};

const bookSlice: Slice<BookState> = createSlice({
    name: 'book',
    initialState,
    reducers: {
        // Define the reducers here
    }
});

export default bookSlice.reducer;


