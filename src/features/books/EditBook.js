import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const [book, setBook] = useState({
    id: location?.state?.id, 
    title: location?.state?.title, 
    author: location?.state?.author
  })

  const handleSubmitUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateBook(book))
    navigate("/show-books")
  }
  console.log(book);
  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={handleSubmitUpdate}>
        <div>
          <label htmlFor='title'>Book Title: </label>
          <input 
            type='text'
            id='tile'
            value={book.title}
            onChange={(e)=>setBook({...book, title: e.target.value})}  
            required
          />
        </div>
        <div>
          <label htmlFor='author'>Book Author: </label>
          <input 
            type='text'
            id='author'
            value={book.author}
            onChange={(e)=>setBook({...book, author: e.target.value})}  
            required
          />
        </div>
        <button type='submit' >Update</button>
      </form>
    </div>
  );
};

export default EditBook;