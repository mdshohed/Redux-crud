import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../src/features/books/BooksSlice"

const store = configureStore({
  reducer: {
    booksReducer: booksSlice, 
  },
})

export default store; 