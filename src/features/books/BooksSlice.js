import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    {
      id: new Date().getTime().toString(),
      title: "Love Bangladesh",
      author: "kaji Nozrul",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books", 
  initialState: initialBooks, 
  reducers: {
    showBooks: (state) => state, 
    addBook: (state, action) => {
      // state.books.push(action.payload); 
      state.books = [...state.books, action.payload]
    },
    deleteBook: (state, action ) =>{
      const id = action.payload
      state.books = state.books.filter((book)=>book.id !== id ); 
    },
    updateBook:(state, action) =>{
      const {id, title, author} = action.payload
      const isBookExist = state.books.filter((book)=> book.id === id ); 
      if( isBookExist){
        isBookExist[0].title = title;
        isBookExist[0].author = author
      }
    }
  }
}); 

export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer; 