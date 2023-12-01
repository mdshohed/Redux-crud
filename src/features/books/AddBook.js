import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState(''); 
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch(); 
  const navigate = useNavigate()
  // const books = useSelector((state)=>state.booksReducer.books.length); 
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id:new Date().getTime().toString(), title, author}
    dispatch(addBook(book)); 
    navigate('/show-books')
  }

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Book Title: </label>
          <input 
            type='text'
            id='tile'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}  
            required
          />
        </div>
        <div>
          <label htmlFor='author'>Book Author: </label>
          <input 
            type='text'
            id='author'
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}  
            required
          />
        </div>
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
};

export default AddBook;